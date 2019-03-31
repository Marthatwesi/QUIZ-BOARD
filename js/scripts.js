$(document).ready(function(){
$("input[type='button']").click(function(){
//array for storing name ie quiz1 to quiz10 created
  arr = [];
  for (i = 1; i <= 10; i++) {
  query = "quiz"+i;
  arr.push(query);
  }
  //Do a form validation to check if all the questions have been answered
    var inputs = document.getElementById("quiz").elements;
       var count  = 0;
       for (var i = 0; i < inputs.length; i++) {
           if (inputs[i].type == 'radio' && inputs[i].checked) {
               count++;
           }
        }
   if(count<10) {
     alert("Stop kidding and get you work done. :(");
     document.location.reload();
   }
   else {
          alert("You have answered all the questions,,,yyoooooo :)");
        }

        //an array for storing the checked boxes created
         arr2=[];
         for (var index = 0; index < arr.length; index += 1) {
         var questions = parseInt($("input[name=" + arr[index] + "]:checked").val());
         arr2.push(questions);
         }
