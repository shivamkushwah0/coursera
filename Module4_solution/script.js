
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var prop in names) {
  console.log();

if (names[prop][0]==="J" || names[prop][0]==="j") {
  byeSpeaker.speak(names[prop]);    
  } else {
    helloSpeaker.speak(names[prop]);
  }
  }
})(window);