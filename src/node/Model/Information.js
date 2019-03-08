var mongoose = require("mongoose");

var infoScheme={
    PersonalUniqueId: String,
    FullName: Object,
    Gender: String,
    Dob: String,
    Age: String,
    Address: Object,
    City: String,
    State: String,
    Pincode: String,
    PhoneNo: String,
    Telephone: String,
    EmailAddr: String,
    PhysicalDisability: String,
    MaritalStatus: String,
    EducationStatus: String,
    BirthSign: String
  }

  var InfoModel=mongoose.model("PersonalInfo",infoScheme,"PersonalInfo");
  module.exports= InfoModel;
  var InfoPerModel=mongoose.model("PersonalInfoPermenant",infoScheme,"PersonalInfoPermenant");
  module.exports= InfoPerModel;