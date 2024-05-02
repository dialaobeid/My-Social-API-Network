const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

// Thought model
const ThoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    // min and max character limits
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toLocaleString()
  },
  username: {
    type: String,
    required: true
  },
  // schema for replies
  reactions: [reactionSchema]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

// schema settings: virtual called reactionCount 
// refers to Reaction.js
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;