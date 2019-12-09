// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the
// objects returned from the maker functions except in pseudo classical style.
// You must be able to use your new functions to create new horse instances,
// just like this:
//
//   var myHorse = new Horse();
//   var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var MakeHorse = function(name) {
  //var result = {};
  this.name = name;
  //return result;
};
  MakeHorse.prototype.goSomewhere = function(destination) {
    return this.name + ' is galloping to ' + destination + '!';
  };

var MakeFlyingHorse = function(name, color) {
  this.MakeHorse(name);
  this.color = color;
  this.oldGoSomewhere = this.goSomewhere;
  //return result;
};
  MakeFlyingHorse.prototype.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return this.oldGoSomewhere(destination);
    } else {
      return this.name + ' is flying to ' + destination + '!';
    }
  };

// YOUR WORK GOES BELOW
// Here's some starter code to get you going!
// Do not use the ES6 `class` keyword; use ES5 to create your classes.

var Horse = function(name) {
	MakeHorse.call(this,name);
};
  Horse.prototype = Object.create(MakeHorse.prototype);
  Horse.prototype.constructor = Horse;



var FlyingHorse = function(name, color) {
	MakeFlyingHorse.call(this,name,color);
};
  FlyingHorse.prototype = Object.create(MakeFlyingHorse.prototype);
  FlyingHorse.prototype.constructor = FlyingHorse;


