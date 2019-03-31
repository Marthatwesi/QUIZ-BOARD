//Back-end logic
$(document).ready(function){
function onSubmit(){
  var score = 0;
  var numberOfQuestions = 5;
  var answerArray = ['a', 'b', 'b', 'c', 'b'];



  var q1 = document.forms['quiz']['q1'].value;
  var q2 = document.forms['quiz']['q2'].value;
  var q3 = document.forms['quiz']['q3'].value;
  var q4 = document.forms['quiz']['q4'].value;
  var q5 = document.forms['quiz']['q5'].value;

  for(var i = 1; i <= numberOfQuestions; i++){
    if(eval('q' + 1') == ''){
      alert("you missed question number " + i);
      }

  for(var i = 1; i <= numberOfQuestions; i++){
    if(eval('q' + i) == answerArray[i - 1]){
      score++;
    }
  }
alert(7);
  var results = document.getElementById('results')
  results.innerHTML = "<h2>You scored " + score + " points out of " + numberOfQuestions + "</h2>"
  alert('you scored ' + score + ' out of ' + numberOfQuestions +');
  return false;
};
};


//User- Logic
$(document).ready(function() {
 $("#header-button").click(function() {
   $(".card-deck").slideDown();
   $(".disappear").slideDown();
   $(".paragraph").fadeOut();
 });
});
