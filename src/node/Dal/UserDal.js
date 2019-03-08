var mongoose = require("mongoose");

var usrmod = require("./../Model/User");
var userModel = mongoose.model("Users");
var userPermanentModel = mongoose.model("UserPermenant");
module.exports = {
    //create user Profile
    postUsers: function(request,response){
        var user={
            Username : request.body.Username,
            EmailAddr : request.body.EmailAddr,
            Password : request.body.Password,
            RoleId : request.body.RoleId
        };
    
        userModel.create(user, function(err, res){
            if(err)
            {
              //   response.statusCode=500;
              //   response.send({statusCode: response.statusCode, message:err});
              throw error;
            }
            response.send({status:200, data: res});
        });
    },
    postPerUsers: function(request,response){
        var user={
            Username : request.body.Username,
            EmailAddr : request.body.EmailAddr,
            Password : request.body.Password,
            RoleId : request.body.RoleId
        };
    
        userPermanentModel.create(user, function(err, res){
            if(err)
            {
                 response.statusCode=500;
                 response.send({statusCode: response.statusCode, message:err});
            }
            response.send({status:200, data: res});
        });
    },
    //Display user profile data
    getUsers:function(request, response){

        userModel.find().exec(function(err,res){
            if(err){
                respose.status = 500;
                response.send({status:respose.status, error:err});
            }
            response.send({status:200, data:res});
        });
    },
    //Display user profile data permanent
    getPerUsers:function(request, response){

        userPermanentModel.find().exec(function(err,res){
            if(err){
                respose.status = 500;
                response.send({status:respose.status, error:err});
            }
            response.send({status:200, data:res});
        });
    },
    //Update UserProfile Permanent Data
    putPerUsers:function(request, response){
     //   console.log(request);
        var id={ _id: request.params.id  }
      console.log(id);
    var newvalue={$set:{
        Username : request.body.Username,
        Password : request.body.Password,
        EmailAddr : request.body.EmailAddr,
        RoleId : request.body.RoleId
                        }};
                        console.log(newvalue);
        userPermanentModel.updateOne(id,newvalue,function(err,res){
        if(err){
          response.statusCode=500;
          response.send({status:response.statusCode,error:err});
        }
      response.send({status:200,data:res});
      });
    },

    //Delete the user
    deleteUser: function(request,response){
        var emailId={ EmailAddr : request.params.email  }
            console.log(emailId);
      userModel.findOneAndDelete(emailId,function(err,res){
        if(err){
          response.statusCode=500;
          response.send({status:response.statusCode,error:err});
        }
      response.send({status:200,data:res});
      });
    },

}