



function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    
    //var correct= 0;
    //var incorrect= 0;

    if (question1 == "false"){
        correct++;
    }
    if (question2 =="true"){
        correct++;
    }    
    if (question3 =="true"){
        correct++;
    }    
    if (question4 =="true"){
        correct++;
    }
    if (question5 =="false"){
        correct++;
    }

    else if (question1 == "true"){
        incorrect++;
    }
    if (question2 =="false"){
        incorrect++;
    }    
    if (question3 =="false"){
        incorrect++;
    }    
    if (question4 =="false"){
        incorrect++;
    }
    if (question5 =="true"){
        incorrect++;
    }
	


	document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("number_incorrect").innerHTML = "You got " + incorrect + " incorrect.";
	
	}
    

    var seconds = 30;
    var running = false;
    //var intervalId;
    var correct= 0; //this is global
    var incorrect= 0;
    

    function handleStartTimer(){
        setInterval("handleTimer()", 500);
    }
    function handleTimer(){
        seconds--;
        var m = Math.floor(seconds/60);
        if(m<10){
            m="0"+ m;
        }
        var s = seconds%60;
        if(s<10){
            s="0"+ s;
        }

        if(seconds<1){
            console.log("seconds is zero")
            //window.location="TimeOver.html";
            //$("#cat-button").on("click", function() {  (button idea)
            //alert("Times up");
            //alert(correct);
            //alert(incorrect);
            //document.getElementById("quiz").innerHTML="<p>Done!</p>" + "<p>You got</p>" + correct + "<p>correct</p>" + "<br>" + "<p>You got</p>" + incorrect + "<p>incorrect</p>";
            document.getElementById("quiz").innerHTML="<p>Times Up</p>";

        }
        var html = m + ":" +s;
        document.getElementById("secondsDiv").innerHTML= html;
    }



