const mongoose = require('mongoose');

// schema only = used as Thought model's subdocument
const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    // default value set to a new ObjectId
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    // max character limit
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toLocaleString()
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

module.exports = reactionSchema;