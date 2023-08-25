const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reactionSchema = require ('./reaction.js')
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, {
  toJSON: { virtuals: true } // Enable virtuals to be included when converting to JSON
});

// Create the reactionCount virtual property
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;