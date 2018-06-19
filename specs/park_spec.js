const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur, dinosaur2, dinosaur3;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10, []);
    dinosaur = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("brachiosaurus", "herbivore", 20);
    dinosaur3 = new Dinosaur("brachiosaurus", "herbivore", 20);
  });

  it('should have a name', function() {
    assert.strictEqual(park.name, "Jurassic Park")
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.ticketPrice, 10)
  });

  it('should have a collection of dinosaurs', function() {
    assert.deepStrictEqual(park.collectionOfDinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaurToCollectionOfDinosaurs(dinosaur);
    assert.deepStrictEqual(park.collectionOfDinosaurs, [dinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaurToCollectionOfDinosaurs(dinosaur);
    park.removeDinosaurFromCollectionOfDinosaurs(dinosaur);
    assert.deepStrictEqual(park.collectionOfDinosaurs, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  // it('should be able to find all dinosaurs of a particular species' function() {
  //   park.addDinosaurToCollectionOfDinosaurs(dinosaur);
  //   park.addDinosaurToCollectionOfDinosaurs(dinosaur2);
  //   park.addDinosaurToCollectionOfDinosaurs(dinosaur3);
  //   assert.strictEqual(park.getAllDinosaursOfSameSpecies(dinosaur2), [dinosaur2, dinosaur3])
  // });


  it('should be able to remove all dinosaurs of a particular species');

});
