function check() {
     var get_name = document.getElementById("name").value;
     var greets = ["Hello ", "Good Bye "];
     //Checking the length of the input just to make sure the user enter something
     //if you add a space the function can continue as normal
     //Since it would think there is a charachter
     if (get_name.length == 0) {
          document.getElementById("msg").innerHTML = "Enter a valid name";
     } else if (get_name.length > 0) {
          // "||" means or
          //"|" is called pipe or vertical bar
          //Checking if the name starts with upper case or lowercase J
          if ((get_name.startsWith("J")) || (get_name.startsWith("j"))) {
               //displaying the Hello + name on the page
               document.getElementById("msg").innerHTML = greets[1] + get_name;
               //displaying the Hello + name in the console
               console.log(greets[1] + get_name);
          } else {
               //displaying the Good Bye + name on the page
               document.getElementById("msg").innerHTML = greets[0] + get_name;
               //displaying the Good Bye + name in the console
               console.log(greets[0] + get_name);
          }
     }
}
