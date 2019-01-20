
// array holds the questions
var q = ["Who would have become king of England had they won the battle at Colluden in 1745?",
 "Major Ridge, a Cherokee, earned his unofficial title while serving with what US officer?", 
 "Union Maj. Gen. John Pope fought against what famous Confederate general at the Battle of Chantilly?", 
 "What kind of scandal was the Teapot Dome Scandal?", 
 "The 30 Years War was fought largely in what emprie of the time?",
"Henry Berry Lowrie was a guerilla fighter during what US conflict?", 
"The Battle of Arcole or Battle of Arcola was fought in what country?",
 'What battleground town of WWI was the famous "illegal" trench magazine the "Wipers Times" originated in?',
 "With over 240 years of service, this ship is the world's oldest ship still in service",
  "This man has the dubious fame of being the United States' first traitor"];

// each array holds the answer choices as well as the html for next question
var a1 = ["<button class=buttons002 onclick=q1c()>Bonnie Prince Charlie</button>",
          "<button class=buttons002 onclick=q2c()>Andrew Jackson</button>",
          "<button class=buttons002 onclick=q3i()>Franklin Gardner</button>",
          "<button class=buttons002 onclick=q4i()>Sex Scandal</button>",
          "<button class=buttons002 onclick=q5i()>Britian</button>",
          "<button class=buttons002 onclick=q6i()>WWII</button>",
          "<button class=buttons002 onclick=q7i()>Austria</button>",
          "<button class=buttons002 onclick=q8i()>Paris</button>",
          "<button class=buttons002 onclick=q9i()>C.S.S. Hunley</button>",
          "<button class=buttons002 onclick=q10i()>Mordechai Vanunu</button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()>Duke Wellington</button>",
                  "<button class=buttons002 onclick=q2i()>Ulysses S. Grant</button>",
                  '<button class=buttons002 onclick=q3c()>Thomas J. "Stonewall" Jackson </button>',
                  "<button class=buttons002 onclick=q4c()>Bribery Scandal</button>",
                  "<button class=buttons002 onclick=q5c()>Holy Roman Empire</button>",
                  "<button class=buttons002 onclick=q6i()>Spanish American War</button>",
                  "<button class=buttons002 onclick=q7i()>Spain</button>",
                  "<button class=buttons002 onclick=q8i()>Somme</button>",
                  "<button class=buttons002 onclick=q9i()>U.S.S. Monitor</button>",
                  "<button class=buttons002 onclick=q10i()>Vidkun Quisling</button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()>Duke of Earle</button>",
                  "<button class=buttons002 onclick=q2i()>Goerge Patton</button>",
                  "<button class=buttons002 onclick=q3i()>Robert E. Lee</button>",
                  "<button class=buttons002 onclick=q4i()>Embezzelement Scandal</button>",
                  "<button class=buttons002 onclick=q5i()>Ottoman</button>",
                  "<button class=buttons002 onclick=q6c()>US Civil War</button>",
                  "<button class=buttons002 onclick=q7c()>France</button>",
                  "<button class=buttons002 onclick=q8c()>Ypres</button>",
                  "<button class=buttons002 onclick=q9i()>Cutty Sark</button>",
                  "<button class=buttons002 onclick=q10i()>Patrick Stanley Vaughan Heenan</button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()>Thomas Moore</button>",
                  "<button class=buttons002 onclick=q2i()>John J. Pershing</button>",
                  "<button class=buttons002 onclick=q3i()>Nathan Bedford Forrest </button>",
                  "<button class=buttons002 onclick=q4i()>National Security Scandal</button>",
                  "<button class=buttons002 onclick=q5i()>Roman</button>",
                  "<button class=buttons002 onclick=q6i()>Vietnam</button>",
                  "<button class=buttons002 onclick=q7i()>Germany</button>",
                  "<button class=buttons002 onclick=q8i()>Brandonberg</button>",
                  "<button class=buttons002 onclick=q9c()>HMS Victory</button>",
                  "<button class=buttons002 onclick=q10c()>Benedict Arnold</button>"];

var c=["Bonnie Prince Charlie",
"Andrew Jackson",
'Thomas J. "Stonewall" Jackson',
"Bribery Scandal",
"Holy Roman Empire",
"US Civil War",
"France",
"Ypres",
"HMS Victory",
"Benedict Arnold"]
var i = ["Incorrect, it was Bonnie Prince Charlie", 
"Incorrect, it was Andrew Jackson",
 'Incorrect, it was Thomas J. "Stonewall" Jackson', 
 "Incorrect, it was a Bribery Scandal",
  "Incorrect, it was the Holy Roman Empire",
   "Incorrect, it was the US Civil War", 
   "Incorrect, it is in France",
    "Incorrect, it was in Ypres",
     "Incorrect, it was the HMS Victory",
      "Incorrect, it was Benedict Arnold"];

var n = 0;
n++;
var s = 0;
s++;

var counter = 0;


// function to begin quiz on button click
function begin001() {
    // how the image chages for each question
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/culloden.jpg";
    // this part makes "click to begin" go invisible
    disappear001.innerHTML = "";
    // this part covers the button
    message001.innerHTML = "";
    // these parts call anwer choices, just need to change the array number as questions progress
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];
    number001.innerHTML = n++;
    
}

// This tells what to do when you choose the correct answer
function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    // these hide the multiple choices
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    // this displays "next" button after question is answered and calls function for setting up next question
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score001.innerHTML = s++;
}

// this is for incorrect answers, bascially the same as above function but remove the score "s++"
function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}


function new002() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/Major_ridge.jpg";
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    score001.innerHTML = s++;
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/battle-of-chantilly.jpg";
    question001.innerHTML = q[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    option004.innerHTML = a4[2];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    score001.innerHTML = s++;
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}


function new004() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/TeapotDomecartoon.jpg";
    question001.innerHTML = q[3];
    option001.innerHTML = a1[3];
    option002.innerHTML = a2[3];
    option003.innerHTML = a3[3];
    option004.innerHTML = a4[3];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q4c() {
    answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
    score001.innerHTML = s++;
}

function q4i() {
    answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/30_year_war.jpg";
    question001.innerHTML = q[4];
    option001.innerHTML = a1[4];
    option002.innerHTML = a2[4];
    option003.innerHTML = a3[4];
    option004.innerHTML = a4[4];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q5c() {
    answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
    score001.innerHTML = s++;
}

function q5i() {
    answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
}

function new006() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/Henry_Berry_Lowrie.jpg";
    question001.innerHTML = q[5];
    option001.innerHTML = a1[5];
    option002.innerHTML = a2[5];
    option003.innerHTML = a3[5];
    option004.innerHTML = a4[5];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q6c() {
    answer001.innerHTML = "<div id=green001>" + c[5] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
    score001.innerHTML = s++;
}

function q6i() {
    answer001.innerHTML = "<div id=red001>" + i[5] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
}

function new007() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/the-battle-of-pont-darcole-emile-jean-horace-vernet.jpg";
    question001.innerHTML = q[6];
    option001.innerHTML = a1[6];
    option002.innerHTML = a2[6];
    option003.innerHTML = a3[6];
    option004.innerHTML = a4[6];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q7c() {
    answer001.innerHTML = "<div id=green001>" + c[6] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
    score001.innerHTML = s++;
}

function q7i() {
    answer001.innerHTML = "<div id=red001>" + i[6] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
}

function new008() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/wwi.jpg";
    question001.innerHTML = q[7];
    option001.innerHTML = a1[7];
    option002.innerHTML = a2[7];
    option003.innerHTML = a3[7];
    option004.innerHTML = a4[7];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q8c() {
    answer001.innerHTML = "<div id=green001>" + c[7] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
    score001.innerHTML = s++;
}

function q8i() {
    answer001.innerHTML = "<div id=red001>" + i[7] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
}

function new009() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/hms-victory-robert-ernest-roe.jpg";
    question001.innerHTML = q[8];
    option001.innerHTML = a1[8];
    option002.innerHTML = a2[8];
    option003.innerHTML = a3[8];
    option004.innerHTML = a4[8];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q9c() {
    answer001.innerHTML = "<div id=green001>" + c[8] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
    score001.innerHTML = s++;
}

function q9i() {
    answer001.innerHTML = "<div id=red001>" + i[8] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
}

function new010() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/Benedict.jpg";
    question001.innerHTML = q[9];
    option001.innerHTML = a1[9];
    option002.innerHTML = a2[9];
    option003.innerHTML = a3[9];
    option004.innerHTML = a4[9];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q10c() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/end.jpg";
    answer001.innerHTML = "<div id=green001>" + c[9] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    score001.innerHTML = s++;
}

function q10i() {
    document.getElementById("replace001").src = "../SimpleHistoryGame/assets/images/end.jpg";
    answer001.innerHTML = "<div id=red001>" + i[9] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

function end001() {
    message001.innerHTML = "End of Quiz.";
    question001.innerHTML = "";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Restart Quiz</button>" + "</div>";
    answer001.innerHTML = "";
}

function repeat001(){
    location.reload();
}



// counts behind the scenes
    function timeOnstart() {
        var secondsDown = 120;
        // var minutesDown = 2;

	 var timeIntervalUp = setInterval(function(){
        
         startTimer
         ()},1000);
     
    //  display counter
    function startTimer(){ 
            document.getElementById("timer").innerHTML = "Time Remaining in seconds :" + secondsDown;
            // minutesDown--;
            secondsDown--;
            
            // starts quiz automatically/ next question
             if (secondsDown == -1) {
                // how to end timer at 0
                 clearInterval(timeIntervalUp);
                endTimer();
            
             }

             function endTimer(){
                    end001();
                
             }
         }
    }

    
    
    
    
    
 