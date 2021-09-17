const express = require("express")
const path = require("path")
const app = express();
require('dotenv').config()
const port = process.env.PORT || 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    res.status(200).render('index.html')
});
app.listen(port, () => {
    console.log(`The application started successfully at ${port}`);
})