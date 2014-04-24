Fill out this dictionary:

var dictionary = {
  instance: "",
  constructor: "",
  class: "",
  subclass: "",
  inheritance: "",
  encapsulation: "",
  functional_instantation:"",
  functional_w_shared_instantiation: "",
  prototypical_instantiation:"",
  pseudoclassical_instantiation:""
};

===============================================

Using functional instantiation,
create a constructor called Pokemon. This
class has some properties, name, strength,
location, points, and health. It also has some
methods: attack, run and gettingHurt. 
(for now just have the methods log 'attacking',
  'running away!', or 'shielding')

Create an instance of pokemon and name it 
after one of your favorites.
===============================================

Using functional instantiation with shared
methods, re-write the following constructor.

Write the attacking method so that it takes
an enemy instance and calls gettingHurt() on that
while giving itself 2 pts.

ex. pikachu.attack(charmander) will increment
pikachus level and decrement charmanders health.

Write the gettingHurt method such that it takes
away two health points from the instance it is 
being called on

ex. charmander.gettingHurt() will decrement 
charmander.health by 2

===============================================

Re-write the previous constructor and methods 
using prototypical instantiation.



===============================================

Re-write the previous constructor and methods 
using pseudoclassical.
