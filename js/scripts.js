$(document).ready(function(){
$("input[type='button']").click(function(){
//create an array for storing name ie quiz1 to quiz10
  arr = [];
  for (i = 1; i <= 10; i++) {
  query = "quiz"+i;
  arr.push(query);
  }
