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
using pseudoclassical instantiation.

===============================================

Now it was fun making your pokemon instances of
Pokemon, but it is actually better practice to 
make your pokemon instances as a subclass of 
Pokemon so thatthey can have custom methods. 
For example, you want all Pikachus to be able 
to make lightning, but you wouldnt want Charmanders
to have that method. 

Re-create your game with subclasses that extend
Pokemon. All Pokemon should have name, points,
strength, attack, shield and run methods. Pikachu
(or whichever Pokemon you chose) will have some 
methods that are unique. Maybe it has a method 
called 'makeLightning'. It should also over-ride
the generic attack method to make it unique too.
Maybe some pokemon subclasses say their name 
when attacking while others are quiet.

Some methods should override the parent class,
while others should inherit from the parent. 

Customize your pokemon subclasses so that they can
interact with one another.  

Use a Decorator called foundFood that gives your
instance more health points.

Make another decorator to make your game more
interesting. 

How would you make your Pokemon evolve into the
next level of Pokemon (Charmander -> Charzard)?
Implement this using classes.



