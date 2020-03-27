const Pet = require('../controllers/Pet.controller');

module.exports = function(app){
    app.get('/api/allPets',Pet.findAll);//Done
    app.post('/api/pet/new',Pet.createPet);
    app.delete('/api/delpet/:id',Pet.delPet);//Done
    app.get('/api/details/:id',Pet.findOnePet);
    app.put('/api/update/:id',Pet.updatePet);
};