var mongoose = require("mongoose");

var usrinfo = require("./../Model/Information");
var InfoPerModel = mongoose.model("PersonalInfoPermenant");


module.exports = {
    getPerInfo:function(request, response){
        InfoPerModel.find().exec(function(err, res){
            if(err)
            {
                response.statusCode=500;
                response.send({statusCode: response.statusCode, error:err });
            }
            response.send({statusCode: 200, data:res});
        });
          
    },

    postPerInfo:function(request,response){
        var prd = {
            PersonalUniqueId: request.body.PersonalUniqueId,
            FullName:{
                FirstName: request.body.FullName.FirstName,
                MiddleName: request.body.FullName.MiddleName,
                LastName: request.body.FullName.LastName
            },
            Gender: request.body.Gender,
            Dob: request.body.Dob,
            Age : request.body.Age,
            Address : {
                FlatNo: request.body.Address.FlatNo, 
                SocietyName: request.body.Address.SocietyName, 
                AreaName: request.body.Address.AreaName
            },
            City: request.body.City,
            State: request.body.State,
            Pincode: request.body.Pincode,
            PhoneNo : request.body.PhoneNo,
            Telephone : request.body.Telephone,
            EmailAddr : request.body.EmailAddr,
            PhysicalDisability: request.body.PhysicalDisability,
            MaritalStatus : request.body.MaritalStatus,
            EducationStatus: request.body.EducationStatus,
            BirthSign: request.body.BirthSign  
        };
        console.log(prd);
      
        // pass the parsed object to "create()" method
        InfoPerModel.create(prd, function(err, res) {
          if (err) {
            response.statusCode = 500;
            response.send(err);
          }
          response.send({ status: 200, data: res });
        });
    },
    
    updatePerInfo:function(request, response){
        var id={ PersonalUniqueId: request.params.id }
         var newvalue={$set:
        {
        FullName:{
            FirstName: request.body.FullName.FirstName,
            MiddleName: request.body.FullName.MiddleName,
            LastName: request.body.FullName.LastName
        },
        Gender: request.body.Gender,
        Dob: request.body.Dob,
        Age : request.body.Age,
        Address : {
            FlatNo: request.body.Address.FlatNo, 
            SocietyName: request.body.Address.SocietyName, 
            AreaName: request.body.Address.AreaName
        },
        City: request.body.City,
        State: request.body.State,
        Pincode: request.body.Pincode,
        PhoneNo : request.body.PhoneNo,
        Telephone : request.body.Telephone,
        EmailAddr : request.body.EmailAddr,
        PhysicalDisability: request.body.PhysicalDisability,
        MaritalStatus : request.body.MaritalStatus,
        EducationStatus: request.body.EducationStatus,
        BirthSign: request.body.BirthSign  
                        }};
        InfoPerModel.updateOne(id,newvalue,function(err,res){
        if(err){
          response.statusCode=500;
          response.send({status:response.statusCode,error:err});
        }
      response.send({status:200,data:res});
      });
    },

    getById:function(request,response){
        var id={  PersonalUniqueId :request.params.id  }
            console.log(request.params.id);
            InfoPerModel.findOne(id,function(err, res){
                if(err)
                {
                    response.statusCode=500;
                    response.send({statusCode: response.statusCode, error:err });
                }
                else{
                    response.send({statusCode: 200, data:res});
                }
                
            });
    },

    getByEmail:function(request,response){
        var emailId={ EmailAddr :request.params.email }
            console.log(request.params.email);
            InfoPerModel.findOne(emailId,function(err, res){
                if(err)
                {
                    response.statusCode=500;
                    response.send({statusCode: response.statusCode, error:err });
                }
                else{
                    console.log(res);
                    response.send({statusCode: 200, data:res});
                }
                
            });
    },
    search:function(request,response){
        InfoPerModel.find({$or:[{City : request.body.City},{State:request.body.State}]}, function(err, res) {
            if (err) {
              response.statusCode = 500;
              response.send(err);
            }
            response.send({ status: 200, data: res });
          });
        }
}
