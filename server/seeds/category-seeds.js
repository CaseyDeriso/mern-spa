const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Lawns',
  },
  {
    category_name: 'Driveways',
  },
  {
    category_name: 'Flowering ',
  },
  {
    category_name: 'Rocks',
  },
  {
    category_name: 'Plantings',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
