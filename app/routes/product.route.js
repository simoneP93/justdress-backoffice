module.exports = function(app, db) {
    app.post(function(req, res) {
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

};