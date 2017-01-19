// var noNumbers = function(english){
//     if (english) === "number"){
//     alert ('hey bro write a word');
//   } else{
//     alert ("This is a string!");
//   }
// }
var vowArray = ['a', 'e', 'i', 'o', 'u'];

var vowCheck = function(firstLetter_) {
  if (vowArray.indexOf(firstLetter_) > -1) {
    return true;
  }
   else {
    return false;
  }
}
 // var vowOutput = function(lastLetters_){
 //   if vowCheck = true {
 //     return lastletters_ + ay;
 //   }
 // }

$(document).ready(function() {

 $("form#englishInput").submit(function(event) {
   event.preventDefault();

   var input = $("input#english").val();
   var firstLetter = input.charAt(0);
  //  var lastLetters = input.slice(length-1);

   var result = vowCheck(firstLetter);

   if (result === true) {
     $(".result").show();
     $("#answer").text(input+"ay");

   }
   if (result === false) {
     $(".result").show();
     $("#answer").text(result);

   }
  //  var output = vowOutput(lastLetters)

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
