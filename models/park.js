const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaurToCollectionOfDinosaurs = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurFromCollectionOfDinosaurs = function(dinosaur) {
  this.collectionOfDinosaurs.shift(dinosaur);
};


// Park.prototype.getAllDinosaursOfSameSpecies = function (dinosaur) {
//
//   dinos = [];
//
//   for (const dino of this.collectionOfDinosaurs) {
//     if (dino.name === dinosaur.name) {
//       dinos.push(dinosaur);
//     } else {}
//   } return dinos;
// };



module.exports = Park;
