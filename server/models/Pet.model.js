const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema(
  {
    PetName: { type: String,required:[true,"PetName Cannot be Empty"],minlength:[3,"Pet Name cannot be less than 3 characters"],uniqueValidator:[true,"Please enter a Different Name"]},
    PetType: { type: String,required:[true, "PetType cannot be Empty"],minlength:[3,"Pet Type cannot be less than 3 characters"]},
    PetDesc: {type:String,required:[true, "Pet Description cannot be Empty"],minlength:[3,"Pet Description cannot be less than 3 characters"]},
    Skill1: {type:String},
    Skill2: {type:String},
    Skill3: {type:String}
  },
  { timestamps: true }
);
PetSchema.plugin(uniqueValidator);
Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
