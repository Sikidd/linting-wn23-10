const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's a json file of user data
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = "Home Page";
  res.render('pages/index', { 'title': title });
});

app.get('/about', (req, res) => {
  var title = "About Page";
    res.render('pages/about',{'title':title});
});

app.get('/sports', (req, res) => {
  var title = "Sports Page";
    res.render('pages/sports',{'title':title});
});

app.get('/contact', (req, res) => {
  var title = "Contact Page";
    res.render('pages/contact',{'title':title});
});

    //users index is our list page



    //add user/view route - we are cheating by using the array index - 1


app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    console.log(data);
});
