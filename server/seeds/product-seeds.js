const { Product } = require('../models');

const productData = [
  {
    product_name: 'Spring & Fall Clean-Ups',
    price: 374.99,
    stock: 360,
    category_id: 1,
  },
  {
    product_name: ' Riverrock, Peagravel, Flagstone Walkways, Dry Laid Retaining Walls/Wells',
    price: 699.00,
    stock: 360,
    category_id: 5,
  },
  {
    product_name: 'Lawn Maintenance, Trimming, Blowing',
    price: 67.66,
    stock: 360,
    category_id: 4,
  },
  {
    product_name: 'Organic Garden Fertilizing',
    price: 238.50,
    stock: 360,
    category_id: 3,
  },
  {
    product_name: 'Tree Trimming And/or Removal Hedge ',
    price: 169.99,
    stock: 360,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
