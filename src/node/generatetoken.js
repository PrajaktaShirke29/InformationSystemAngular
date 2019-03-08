  // load require package
  var http=require("http");
  var fs=require("fs");
  var express= require("express");
  var mongoose=require("mongoose");
  var cors=require("cors");
  var jwt=require("jsonwebtoken");
  var path=require("path");
  var bodyParser=require("body-parser");
  mongoose.Promise=global.Promise;
  
  var router = express.Router();
  
  module.exports = instance = express();
  
  // configure middleware
  instance.use(bodyParser.urlencoded({extended: false}));
  instance.use(router);
  instance.use(bodyParser.json());
  instance.use(cors());
  
  // connect to database
  mongoose.connect("mongodb://localhost/InfoDb",
                 { useNewUrlParser :true}
                 
  );
  
  
  var dbconnect=mongoose.connection;
  
  if(!dbconnect){
      console.log("Sorry cannot establish the connection");
      return;
  }
  else{
      console.log("Connection established");
  }
  
  instance.listen(4080, function(){
      console.log("Server started at 4080");
  });   

var usrmod = require("./Model/User");
var userModel = mongoose.model("Users");
var userPermanentModel = mongoose.model("UserPermenant");

var usrinfo = require("./Model/Information");
var InfoModel = mongoose.model("PersonalInfo");
var InfoPerModel = mongoose.model("PersonalInfoPermenant");

var rolemod = require("./Model/Role");
var roleModel = mongoose.model("Roles");

//create Role
instance.post("/api/role/create", function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
        if(isValToken==false){
            response.send({success:false, message:"Token verification failed"});
        }
        else{
            roles.postRole(request, response)
        }
  });

//Get Role
instance.get("/api/role", function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
        if(isValToken==false){
            response.send({success:false, message:"Token verification failed"});
        }
        else{
            roles.getRole(request, response)
        }
  });

  // Create a new user
  instance.post("/api/users/create", function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
        if(isValToken==false){
            response.send({success:false, message:"Token verification failed"});
        }
        else{
            users.postUsers(request, response)
        }
  });

  instance.post("/api/users/create/permanent", function(request, response){
   
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
        if(isValToken==false){
            response.send({success:false, message:"Token verification failed"});
        }
        else{
            users.postPerUsers(request, response)
        }
});
  
  //The secret for the jwt
  var jwtSettings={
      jwtSecret: "jbscbihdfcifc"
  } 
  
  //The set with express
  instance.set("jwtSecret", jwtSettings.jwtSecret);
  var tokenStore=" ";
  var auth= require("./Authorization/auth");
  var users = require("./Dal/UserDal");
  var roles = require("./Dal/RoleDal");
  var personalInfo = require("./Dal/InfoDal");
  var personalPerInfo= require("./Dal/InfoPerDal");
  //Authentication user
  instance.post("/api/users/permanent/auth", function(request,response){
   auth.authUser(request,response);
});

instance.post("/api/users/auth", function(request,response){
    auth.authUser(request,response);
 });
   
     //Display Users With role permanent
  instance.get("/api/users/permanent",function(request, response){
        var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
        if(isValToken==false){
            response.send({success:false, message:"Token verification failed"});
        }
        else{
            users.getPerUsers(request, response)
        }
});
   //Display Users With role 
   instance.get("/api/users",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        users.getUsers(request, response)
    }
});

  //Update in permanent user table
  instance.put("/api/users/permanent/:id", function(request, response) {
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        console.log("........");
        users.putPerUsers(request, response);
    }
  });

  //Delete the user profile
  instance.delete("/api/users/:email",function(request,response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        users.deleteUser(request, response);
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
instance.get("/api/role",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        roles.getRole(request, response);
    }
  });

  instance.post("/api/role",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        roles.postRole(request, response);
    }
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

  instance.get("/api/info",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalInfo.getInfo(request, response);
    }
  });
  
  instance.get("/api/info/Permanent",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalPerInfo.getPerInfo(request, response);
    }
  });

  //Insert  Person info
  instance.post("/api/info", function(request, response) {
        var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
        if(isValToken==false){
            response.send({success:false, message:"Token verification failed"});
        }
        else{
            personalInfo.postInfo(request, response);
        }
});
 
    
  // Update PermanentPerson
  instance.put("/api/info/permanent/:id", function(request, response) {
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalPerInfo.updatePerInfo(request, response);
    }
  });

  // Delete info
  instance.delete("/api/info/:email",function(request,response){
//     // read the request id parameter
//     // delete matched record array
//     // respond array
//     var tokenRecieved=request.headers.authorization.split(" ")[1];
//     jwt.verify(tokenRecieved,instance.get("jwtSecret"), function(err, decoded){
//         console.log("In verify");
//         if(err){
//             console.log("In auth error");
//             response.send({Success: false, message:"Token verification error"});
//         }
//         else{
//             console.log("login successful");
//             //decode the request
//             request.decoded=decoded;
    
//             var id={ _id: request.params.id  }
//             console.log(id);
//       InfoModel.deleteOne(id,function(err,res){
//         if(err){
//           response.statusCode=500;
//           response.send({status:response.statusCode,error:err});
//         }
//       response.send({status:200,data:res});
//       });
//     }
//     });
//console.log(email);
var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
if(isValToken==false){
    response.send({success:false, message:"Token verification failed"});
}
else{
    personalInfo.deleteInfo(request, response);
}
 });

// get permanent Personal info
instance.get("/api/info/permanent/:id",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalPerInfo.getById(request, response);
    }
});
// get permanent Person information with emailaddress
instance.get("/api/info/per/:email",function(request, response){
    var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalPerInfo.getByEmail(request, response);
    }
});
//Create Permanent Personal info
instance.post("/api/info/permanent", function(request, response) {
var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalPerInfo.postPerInfo(request, response);
    }
});

//Search
instance.post("/api/info/permanent/search", function(request, response) {
var isValToken = auth.authToken(request.headers.authorization.split(" ")[1])
    if(isValToken==false){
        response.send({success:false, message:"Token verification failed"});
    }
    else{
        personalPerInfo.search(request, response);
    }
});

  
   