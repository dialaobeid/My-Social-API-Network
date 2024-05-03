const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'jake_johnson',
    email: 'jake@example.com',
    thoughts: [],
    friends: [],
  },
];

const thoughts = [
  {
    thoughtText: 'I love to play basketball!',
    username: 'john_doe',
    reactions: [
      {
        reactionBody: 'Me too!',
        username: 'jane_smith',
      },
      {
        reactionBody: 'We should play!',
        username: 'jake_johnson',
      },
    ],
  },
  {
    thoughtText: 'Art is favorite hobby.',
    username: 'jane_smith',
    reactions: [
      {
        reactionBody: 'I love painting!',
        username: 'john_doe',
      },
      {
        reactionBody: 'I prefer reading.',
        username: 'jake_johnson',
      },
    ],
  },
  {
    thoughtText: 'Excited about my birthday!',
    username: 'jake_johnson',
    reactions: [
      {
        reactionBody: 'Can\'t wait to be there!',
        username: 'jane_smith',
      },
    ],
  },
];

module.exports = { users, thoughts };