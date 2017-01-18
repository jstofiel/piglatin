// var noNumbers = function(english){
//     if (english) === "number"){
//     alert ('hey bro write a word');
//   } else{
//     alert ("This is a string!");
//   }
// }


$(document).ready(function(){

 $("form#englishInput").submit(function(event) {
   event.preventDefault();
 });
   var result= $("input#english").val();

  vowArray =["a","e","i","o","u"]
  alert(vowArray[0])

  var firstLetter = result.charAt(0);
  alert(firstLetter);

  var vowStart = function(firstLetter,vowArray) {

    if (firstLetter === vowArray[0])
    ("vowStart").show
  }
  });






// var felix = function(parameter1, parameter2) {
//   return parameter1 + parameter2;
// }
//
// felix(2,3);
