const productsController = {
  cart: (req, res) => {
    return res.render("products/productCart");
  },
  detail: (req, res) => {
    return res.render("products/productDetail");
  },
  createandEdit: (req, res) => {
    return res.render("products/createAndEditProduct.ejs");
  },
};

module.exports = productsController;
