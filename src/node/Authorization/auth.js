var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

var usrmod = require("./../Model/User");
var userPermanentModel = mongoose.model("UserPermenant");
var userModel = mongoose.model("Users")
var rolemo = require("./../Model/Role");
var roleModel = mongoose.model("Roles");

var instance = require('./../generatetoken');

module.exports= {
    authUser: function(request,response){
        var user={
            Username : request.body.Username,
            Password : request.body.Password,
            EmailAddr : request.body.EmailAddr,
            RoleId : request.body.RoleId
          };
          console.log(request.body.Username);
          console.log("In auth user", JSON.stringify(user));
          userPermanentModel.findOne({Username:request.body.Username}, function(err, usr){
              console.log(usr);
              if(err)
              {
                  console.log("Some Error has occured");
                  throw err;
              }
              if(!usr){
                 // response.send({statusCode:404, message:"Sorry user is not available."});
                 userModel.findOne({Username:request.body.Username}, function(err, usr){
                    console.log(usr);
                    if(err)
                    {
                        console.log("Some Error has occured");
                        throw err;
                    }
                    if(!usr){
                        response.send({statusCode:404, message:"Sorry user is not available."});
                    }
                    else if(usr)
                    {
                        
                        if(usr.Password != user.Password )
                        {
                           
                            response.send({statusCode: 404, message:"Sorry! username and password not found"});
                        }
                       
                        else{
                            console.log("In else if", JSON.stringify(usr));
                            // Sign in user and generate token
                            var token=jwt.sign({usr}, 
                                instance.get("jwtSecret"),{
                             //   expiresIn:36000
                            });
                            //save token globally
                            
                            roleModel.findOne({RoleId: usr.RoleId}, (err, data) => {
                                console.log(data)
                              if(err){
                                  console.log(err);
                              }else if(data){
                                  
                                  var rname=data.RoleName;
                                  console.log(data.RoleName);//getting the role name for the logged-in user
                  
                                  response.send({
                                      authenticated: true,
                                      emailAddr:usr.EmailAddr,
                                      userName: request.body.Username,
                                      message: "Login Success",
                                      token: token,
                                      role: rname
                                  });
                              }
                              else{
                                  response.send({
                                      status:403,
                                      statusCode:"unauthorized Access"
                                  });
                              }
                                  
                          });
                        }
                    }
                });
              }
              else if(usr)
              {
                  
                  if(usr.Password != user.Password )
                  {
                     
                      response.send({statusCode: 404, message:"Sorry! username and password not found"});
                  }
                 
                  else{
                      console.log("In else if", JSON.stringify(usr));
                      // Sign in user and generate token
                      var token=jwt.sign({usr}, 
                          instance.get("jwtSecret"),{
                       //   expiresIn:36000
                      });
                      //save token globally
                      
                      roleModel.findOne({RoleId: usr.RoleId}, (err, data) => {
                          console.log(data)
                        if(err){
                            console.log(err);
                        }else if(data){
                            
                            var rname=data.RoleName;
                            console.log(data.RoleName);//getting the role name for the logged-in user
            
                            response.send({
                                authenticated: true,
                                emailAddr:usr.EmailAddr,
                                userName: request.body.Username,
                                message: "Login Success",
                                token: token,
                                role: rname
                            });
                        }
                        else{
                            response.send({
                                status:403,
                                statusCode:"unauthorized Access"
                            });
                        }
                            
                    });
                  }
              }
          });
    },
    authToken:function(receivedToken){
        var verify;
        jwt.verify(receivedToken, instance.get("jwtSecret"), function(error, decoded){
            if(error){
                verify=false;   
            }
            else{
                verify=true;
            }
        });
        return verify; 
    }
}
