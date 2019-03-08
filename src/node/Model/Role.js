var mongoose = require("mongoose");

var roleSchema=mongoose.Schema({
    RoleId: String,
    RoleName: String,
    RoleStatus: String
}
)
var roleModel=mongoose.model('Roles', roleSchema,'Roles');
module.exports= roleModel;