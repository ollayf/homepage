// const datetime = new Date().toJSON();
// const date = datetime.slice(0,10).replace(/-/g,'/');
// const time = datetime.slice(11, 19)

// console.log(`Date is ${date}, Time is ${time}`)

var User = require('./models/user');
var user = new User();
console.log(user.findOne({}))
for (const key in user.schema.obj) {
    console.log(`${key} | ${user[key]}`);
};