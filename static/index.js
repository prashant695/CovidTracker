mostcases = 0;
function map() {
    fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
            const countries = data.map((country) => ({
                name: country.country,
                latitude: country.countryInfo.lat,
                longitude: country.countryInfo.long,
                cases: country.cases,
                activeCases: country.active,
                recovered: country.recovered,
                deaths: country.deaths
            }));

            countries.forEach(element => {
                if (element.cases > mostcases) {
                    mostcases = element.cases;
                }
            })
            countries.forEach(element => {
                var myIcon = L.icon({
                    iconUrl: "/static/covidd.png",
                    iconSize: [30, 30],
                    iconAnchor: [30, 30],
                });
                L.circle([element.latitude, element.longitude], (element.cases / mostcases) * 2000000).addTo(map);
                L.marker([element.latitude, element.longitude], {
                    icon: myIcon
                }).addTo(map).bindPopup(
                    `<h2 style="background-color:DodgerBlue;">${element.name}</h2>
                         <div>Cases: ${element.cases}</div>
                         <div>Active: ${element.activeCases}</div>
                         <div>Recovered: ${element.recovered} </div>
                         <div>Deaths: ${element.deaths} </div>`
                ).openPopup();

            });
        })
}
map();
setInterval(map, 100000);