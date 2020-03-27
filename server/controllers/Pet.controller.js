const Pet = require('../models/Pet.model');


module.exports.findAll=(request,response)=>{
    Pet.find().sort({"PetType":1})
    .then(allPets=>response.json({Pets:allPets}))
    .catch(err=>response.json({err:err}))
};
module.exports.createPet=(request,response)=>{
    const {PetName,PetType,PetDesc,Skill1,Skill2,Skill3} = request.body;
    Pet.create({
        PetName,
        PetType,
        PetDesc,
        Skill1,
        Skill2,
        Skill3
    })
    .then(newPet=>response.json(newPet))
    .catch(err=>response.json(err))
};
module.exports.delPet=(request,response)=> {
    Pet.deleteOne({_id: request.params.id })
    .then(result => response.json(result))
    .catch(err => response.json(err))
};

module.exports.findOnePet=(request,response)=>{
    Pet.findOne({_id:request.params.id})
    .then(singlePet=>response.json(singlePet))
    .catch(err=>response.json({err:err}))
};
module.exports.updatePet=(request,response)=>{
    Pet.findOneAndUpdate({_id:request.params.id},request.body,{new:true,runValidators: true })
    .then(result=>response.json(result))
    .catch(err=>response.json(err))
};