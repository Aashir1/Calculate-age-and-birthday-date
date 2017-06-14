var date = new Date();
/********************************** Refrences ******************************************/
var birthdayRef = document.getElementById('birthday');
var eidRef = document.getElementById('eid');
var ageRef = document.getElementById('age');

var currentSec, eidSec, bithdaySec, birthdayAns, birthSec, age;

/********************************** Get Seconds ******************************************/

currentSec = date.getTime();
eidSec = new Date('June 26, 2017').getTime();
birthdaySec = new Date('September 27, 2017').getTime();
birthSec = new Date('Octuber 27, 1994').getTime();

/********************************** Calculation ******************************************/
eidSec = eidSec - currentSec;
birthdayAns = birthdaySec - currentSec;
age = currentSec - birthSec;

/********************************** DOM Manipulation ******************************************/

eidRef.innerHTML = Math.round(eidSec / (1000 * 60 * 60 * 24));
birthdayRef.innerHTML = Math.round(birthdayAns / (1000 * 60 * 60 * 24));
ageRef.innerHTML = Math.round(age / (1000 * 60 * 60 * 24 * 365));