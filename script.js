(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var names_length = names.length;
    for (var i = 0; i < names_length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if ("j" === firstLetter) {
            byeSpeaker.speak(names[i])
        } else {
            helloSpeaker.speak(names[i])
        }
    }
})();
