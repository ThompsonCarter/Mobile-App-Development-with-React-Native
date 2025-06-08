const user = { name: 'Ada', age: 30 };

// Old way
const msg1 = 'Hello ' + user.name + ', you are ' + user.age + ' years old.';

// New way
const msg2 = `Hello ${user.name}, you are ${user.age} years old.`;
