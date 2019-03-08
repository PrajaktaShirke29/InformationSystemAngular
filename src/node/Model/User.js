var mongoose = require("mongoose");

var userSchema= mongoose.Schema({
    UserId: String,
    Username: String,
    EmailAddr: String,
    Password:  String,
    RoleId: String
});

var userModel=mongoose.model('Users', userSchema,'Users');
module.exports=userModel;

var userPermanentModel=mongoose.model('UserPermenant', userSchema,'UserPermenant');
module.exports=userPermanentModel;