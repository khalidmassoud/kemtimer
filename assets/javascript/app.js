
var number = 30;
var intervalId;
var correct = 0;
var wrong = 0;
function decrement() {
    
    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + "timer: " + number + "</h2>");
    //  Decrease number by one.
    number--;
    //  Once number hits zero...
    if (number === 0) {
      //  Alert the user that time is up.
      clearInterval(intervalId);
      
      result();
    }

  }

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

 run();


$("#quiz-form").on("submit",function(event){
    event.preventDefault();

    var $answer = $("#quiz-answer-1");
    var answer1 = $answer.val();
    console.log(answer1);
    if (answer1 === "yosemite" ){
        correct++;
    }else {
        wrong++;

    }
    
    var $answer = $("#quiz-answer-2");
    var answer2 = $answer.val();
    console.log(answer2);
    if (answer2 === "olympic" ){
        correct++;
    }else {
        wrong++;

    }
    var $answer = $("#quiz-answer-3");
    var answer3 = $answer.val();
    console.log(answer3);
    if (answer3 === "franklin" ){
        correct++;
    }else {
        wrong++;

    }
    var $answer = $("#quiz-answer-4");
    var answer4 = $answer.val();
    console.log(answer4);
    if (answer4 === "edsel" ){
        correct++;
    }else {
        wrong++;

    }
    var $answer = $("#quiz-answer-5");
    var answer5 = $answer.val();
    console.log(answer5);
    if (answer5 === "springfield" ){
        correct++;
    }else {
        wrong++;

    }
 clearInterval(intervalId);
 result();
});

function result(){
    $("#result").append("correct answers" + correct + "wrong answers" + wrong );
};

