
const path = require('path');

const mainController = {
    index: (req, res) =>{
        res.render('index');
    },
    productDetail: (req, res) =>{
        res.render('productDetail');
    },
    cart: (req, res) =>{
        res.render('productCart');
    },
    register: (req, res) =>{
        res.render('register');
    },
    login: (req, res) =>{
        res.render('login');
    }
    
};

module.exports = mainController;