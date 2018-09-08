//Variables
let timer = 120
let vGQuestions= {
    questions:[
        "Black Ops is a subtitle of which game?",//0
        "True or False. In the original arcade version of the Donkey Kong, Mario was a plumber.",//1
        "Who developed Destiny 2?",//2
        "What's the color of the wings of Dragon in Sypro?",//3
        "Which year the Grand Theft Auto V was released?",//4
        "What is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?",//5
        "Which year was the PS4 released?",//6
        "What does NES stand for?",//7
        "The character Master Hand is in which game?",//8
        "Which year the Minecraft released?",//9
        "What does Mario jumps on after completing a level?",//10
        "Most of us have played Atari games. What does 'Atari' mean?",//11
        "What year was the first Pokemon game released?"],//12
    correctA:[
        "Call of Duty",//0
        "Flase",//1
        "Bungie",//2
        "Orange ",//3
        "2013",//4
        "Princess Peach",//5
        "2013",//6
        "Nintendo Entertainment System",//7
        "Smash Brothers",//8
        "2009",//9
        "Flag pole",//10
        "Success",//11
        "1996",//12
    ],
    IncorretA:[ //I might have to split these into its own array for each question
        ["Ghost Recon", "Battlefield", "Gears of War"],
        "True",
        "Infinity Ward, Blizzard, Ubisoft",
        "Red, Purple, Yellow",
        "2012, 2014, 2015", //this will go for array 4 and 6
        "Princess Daisy, Princess Zelda, Princess Rosalina",
        "Needs Extra Space, Never Ending Story, National Entertainment System",
        "Kirby, Sonic, Banjo-Kazooie",
        "2008, 2010, 2011",
        "POW, PowerUps, Goomba",
        "Greatness, Excelsior, Axios",
        "1995, 1997, 1998",
    ]
    
};
//make start button
let startbutton = function () {
    $('.trivia').append('<button id="startbutton" class="btn-success" type="button">Start!</button>');
};
startbutton();
//add start button to html
$('startbutton').on('click', function(){
    $('startbutton').remove();

    //add questionsto html
    let vGQuestions = function(){
        let randomQ = vGQuestions.questions[qlist];
        let removeQ = vGQuestions.questions.splice(qlist,1);
        console.log(this);
        return randomQ;
    }
    let tAnswer = function(qlist){
        let correctAnswer = vGQuestions.correctA[qlist];
        let removeA= vGQuestions.correctA.splice(qlist,1);
        console.log(this);
        return correctAnswer;
    }
    //returns correct answer and questions
})
