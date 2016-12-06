var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var request = require('request');
var bodyParser = require('body-parser');
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);


app.use(bodyParser.json());


 app.post('/add-customer', function (req, res) {
    stripe.customers.create(
        { email: req.body.email,
           description: req.body.description
       },
        function(err, customer) {
            err; // null if no error occured
            customer; // the created customer object

            res.json(customer) // Send newly created customer back to client (Swift App)
        }
    );
});



app.listen(PORT);