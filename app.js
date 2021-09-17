const express = require("express")
const path = require("path")
const app = express();
require("dotenv").config()
const port = process.env.PORT || 80;

// console.log(process.env.API_KEY);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    // console.log(process.env.API_KEY)
    res.status(200).render('index.ejs', {"api_key": process.env.API_KEY})
});
app.listen(port, () => {
    console.log(`The application started successfully at ${port}`);
})