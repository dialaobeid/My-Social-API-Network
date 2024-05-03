const connectDB = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

// Call connectDB function to establish the database connection
connectDB().then(async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create users
    const createdUsers = await User.create(users);

    // Create thoughts and associate them with users
    for (const thought of thoughts) {
      const { _id } = await Thought.create(thought);
      const user = createdUsers.find((user) => user.username === thought.username);
      user.thoughts.push(_id);
      await user.save();
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
});
