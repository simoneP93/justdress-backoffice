var LISTEN_PORT = 5000;

var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json({ extended: true, limit: '50mb' }));

var mongoose = require('mongoose');
// var spinner = require('angular-spinners');
mongoose.connect('mongodb://localhost:27017/JustDress'); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});

//Models
var Product = require('./app/models/product');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');

    next(); // make sure we go to the next routes and don't stop here
});

// require('./app/routes')(app, {});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /product
// ----------------------------------------------------
router.route('/product')

// create a product (accessed at POST http://localhost:8080/api/product)
.post(function(req, res) {
        var reqProdcut = new Product();
        if (req && req.body && req.body.product)
            reqProdcut = req.body.product;
        var product = new Product(reqProdcut); // create a new instance of the product model
        // product = JSON.stringify(req.body); // set the product name (comes from the request)
        console.log('req:' + JSON.stringify(req.body));
        console.log(product);
        // save the product and check for errors
        product.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'product created!' });
        })
    })
    // get all the products (accessed at GET http://localhost:8080/api/products)
    .get(function(req, res) {
        Product.find(function(err, products) {
            if (err)
                res.send(err);
            console.log(products);
            res.json(products);
        });
    });

router.route('/product/:product_id')

// get the product with that id (accessed at GET http://localhost:8080/api/product/:product_id)
.get(function(req, res) {
    Product.findById(req.params.product_id, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
})

.put(function(req, res) {

    // use our bear model to find the bear we want
    Product.findById(req.params.product_id, function(err, product) {

        if (err)
            res.send(err);

        product.nome = req.body.nome; // update the bears info

        // save the bear
        product.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'product updated!' });
        });

    });
})

.delete(function(req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function(err, product) {
        if (err)
            res.send(err);

        console.log(product);

        res.json({ message: 'Successfully deleted' });
    });
});

/* Public client */
app.use('/', express.static(__dirname));


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

/* API */




/* Utente */
/*  router.route('/utente/:action?/:id?')
        .get(client_bearer.auth, utente_controller.execute)
        .put(client_bearer.auth, utente_controller.execute);*/



var server = app.listen(LISTEN_PORT);
console.log('Magic happens on port ' + LISTEN_PORT);
//}