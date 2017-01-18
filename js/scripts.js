// var noNumbers = function(english){
//     if (english) === "number"){
//     alert ('hey bro write a word');
//   } else{
//     alert ("This is a string!");
//   }
// }
var vowArray =["a","e","i","o","u"];

function firstletterCheck(firstLetter) {
  alert(firstLetter);
  if (firstLetter === vowArray[0]){
     alert("these letters match");
  }
}




$(document).ready(function() {

 $("form#englishInput").submit(function(event) {
   event.preventDefault();

   var result = $("input#english").val();
   var firstLetter = result.charAt(0);

   firstletterCheck(firstLetter);

  //  alert(firstLetter);
  //  if (firstLetter === vowArray[0]){
  //     alert("these letters match");
  //  }


 });
});






// var felix = function(parameter1, parameter2) {
//   return parameter1 + parameter2;
// }
//
// felix(2,3);
