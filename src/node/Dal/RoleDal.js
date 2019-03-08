var mongoose = require("mongoose");

var role = require("./../Model/Role");
var RoleModel = mongoose.model("Roles");

module.exports = {
    getRole: function(request, response){
        RoleModel.find().exec(function(err, res){
            if(err)
            {
                response.statusCode=500;
                response.send({statusCode: response.statusCode, error:err });
            }
            response.send({statusCode: 200, data:res});
        });
    },
    postRole: function(request, response){
        var role={
            RoleId : request.body.RoleId,
            RoleName : request.body.RoleName,
            RoleStatus : request.body.RoleStatus
        };
        RoleModel.create(role, function(err, res){
            if(err)
            {
                 response.statusCode=500;
                 response.send({statusCode: response.statusCode, message:err});
            }
            response.send({status:200, data: res});
        });
    }
}