const productsController = {
  cart: (req, res) => {
    return res.render("productCart");
  },
  detail: (req, res) => {
    return res.render("productDetail");
  },
};

module.exports = productsController;
