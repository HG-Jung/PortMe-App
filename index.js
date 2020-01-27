const
    express = require('express'),
    app = express(),
    PORT = 3000;


//Application Routes
//get, put, update, delete

app.get('/', function (req, res) {
    res.send({
       Hello: 'World'
    });
});

app.get('/tam-tam', function (req, res) {
    res.send({
        TamTam: 'Hi Tam Tam! Check out my new project!'
    })
});

app.get('/dad', function (req, res) {
  res.send({
      Dad: 'Hey Dad, check out my new project!'
  })
});

app.get('/about', function (req, res) {
    res.send({
        ComingSoon: 'This page is under development, check back in for new updates.'
    })
});

app.get('*', function (req, res) {
    res.send({
        CatchAll: '404 not found.'
    })
});
//app.get(<route>, <ANON FXN>) //Handle an incoming request from the browser to a port on the computer
// (req, res) => {
// res.send({});
// }






//Start the app
app.listen(PORT, () => {
    console.log(`App has started on: ${PORT}`);
});