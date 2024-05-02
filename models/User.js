const mongoose = require('mongoose');

// User model
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // matching validation
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true
  },
  id: false
});

// schema settings: virtual called friendCount
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;