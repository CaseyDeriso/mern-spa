const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Outdoor Power & Garden Equipment' },
    { name: 'WateringHerIrrigation' },
    { name: 'Lawn Fertilizer & Soils' },
    { name: 'Mulch & Weed, Sod' },
    { name: 'Landscape Architecture, DIY' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Lawn_Service.png',
      description:
        'os.',
      image: 'Lawn_Service.png',
      category: categories[0]._id,
      price: 46.99,
      quantity: 360
    },
    {
      name: ' Xeriscape_installation.png',
      description:
        'Replacing grassy lawns with soil, rocks, mulch,.',
      image: 'Xeriscape_installation.png',
      category: categories[0]._id,
      price: 1221.99,
      quantity: 360
    },
    {
      name: 'Sodding.png ',
      category: categories[1]._id,
      description:
        'Seeding vegetative sections of plant materials to promptly stabilize erosion areas.',
      image: 'Sodding.png',
      price: 88.99,
      quantity: 360
    },
    {
      name: 'Flowered_Mulching.png',
      category: categories[1]._id,
      description:
        ' Attention to safety, detail orientation, teamwork, time management.',
      image: 'Flowered_Mulching.png',
      price: 73.99,
      quantity: 360
    },
    {
      name: 'Decks_Railings_Stones.png',
      category: categories[1]._id,
      description:
        'Decking, fencing, and ornamental hardware--all of it expensive.',
      image: 'Decks_Railings_Stones.png',
      price: 4143.99,
      quantity: 360
    },
    {
      name: 'Landscape_Architect.png',
      category: categories[2]._id,
      description:
        'Design attractive and functional public parks, gardens, playgrounds, residential areas, i.e. Law School.',
      image: 'Landscape_Architect.png',
      price: 2699.99,
      quantity: 360
    },
    {
      name: 'Fences_Gates.png',
      category: categories[2]._id,
      description:
        'Your home is adding an electronic opening gate that increases home security.',
      image: 'Fences_Gates.png',
      price: 1699.99,
      quantity: 360
    },
    {
      name: 'Tree_Leaf_Removal.png',
      category: categories[3]._id,
      description:
        ' Regularly clean up leaves in your yard; Once at the end of Halloween, once before Christmas and once at the beginning of the New Year .',
      image: 'Tree_Leaf_Removal.png',
      price: 391.99,
      quantity: 360
    },
    {
      name: 'Tree_Trimming_Tree_Services.png',
      category: categories[4]._id,
      description: 'Ut i.e Cut away dead limbs, obstructive, or excess branches.',
      image: 'Tree_Trimming_Tree_Services.png',
      price: 514.99,
      quantity: 360
    },
    {
      name: 'Sprinkler_Irregation_Systems.png',
      category: categories[4]._id,
      description:
        'Purified H20 is distributed through fiber optics via pumps, valves, pipes, and sprinklers copper.',
      image: 'Sprinkler_Irregation_Systems.png',
      price: 422.99,
      quantity: 360
    },
    {
      name: 'Lawn_Fertilization.png',
      category: categories[4]._id,
      description:
        'Fertilizer is a key ingredient in growing and maintaining a green, healthy lawn..',
      image: 'Lawn_Fertilization.png',
      price: 47.99,
      quantity: 360
    },
    {
      name: 'Lawn_Service.png',
      category: categories[4]._id,
      description:
        'Healthy and well-cared-for yard can improve curb appeal, increase property value and encourage you.',
      image: 'Lawn_Service.png',
      price: 99.99,
      quantity: 360
    }
  ]);

  console.log('Services Needed');

  await User.deleteMany();

  await User.create({
    firstName: 'Miss',
    lastName: 'Universe',
    email: 'miss@universe.com',
    password: 'P@$$w0rd1234',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Sample',
    lastName: 'Example',
    email: 'sample@mail.com',
    password: 'P@$$w0rd123'
  });

  console.log('Users Germinated');

  process.exit();
});