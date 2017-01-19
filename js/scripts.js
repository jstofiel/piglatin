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
   var lastLetter = input.slice(1) + input.slice(4, 0);


   var result = vowCheck(firstLetter);

   if (result === true) {
     $(".result").show();
     $("#answer").text(input+"ay");

   }
   if (result === false) {
     $(".result").show();
     $("#answer").text(lastLetter+"ay");

   }

 });
});
