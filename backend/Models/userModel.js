const {model} = require('mongoose');

const {UserSchema} = require('../Schemas/UserSchema');

const UserModel = model("User", UserSchema);

module.exports = UserModel;