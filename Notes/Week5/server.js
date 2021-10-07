// STARTER PACK
const express = require('express');
const ejs = require('ejs');
const os = require('os');
const bodyParser = require('body-parser');

const app = express();

// Middleware

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// STARTER PACK END

// Start Server
let server = app.listen(3000, () => {
    console.log("Server has started on port", server.address().port);
    let networkInfo = os.networkInterfaces();
    //let network = networkInfo['Ethernet'];
    let network = networkInfo['Wi-Fi'];
    network.forEach((item) => {
        if (item.family == "IPv4") {
            console.log('on IP address', item.address);
        }
    })
    //console.log(networkInfo); // look for ipv4 
});

app.post("/order", (req, res) => {
    console.log("Request body: ", req.body);
    let pizzaOrder = { size: req.body.size, toppings : req.body.toppings }
    res.render("pizza", pizzaOrder);
})