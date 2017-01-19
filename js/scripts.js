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

$(document).ready(function() {

 $("form#englishInput").submit(function(event) {
   event.preventDefault();

   var input = $("input#english").val();
   var firstLetter = input.charAt(0);

   var result = vowCheck(firstLetter);

   if (result === true) {
     $(".result").show();
     $("#answer").text(result);

   }
   if (result === false) {
     $(".result").show();
     $("#answer").text(result);

   }

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
