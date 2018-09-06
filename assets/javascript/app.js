//Variables
let timer = 120
let vGQuestions= {
    questions:[
        "Black Ops is a subtitle of which game?",
        "True or False. In the original arcade version of the Donkey Kong, Mario was a plumber.",
        "Who developed Destiny 2?",
        "What's the color of the wings of Dragon in Sypro?",
        "Which year the Grand Theft Auto V was released?",
        "What is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?",
        "Which year was the PS4 released?",
        "What does NES stand for?",
        "The character Master Hand is in which game?",
        "Which year the Minecraft released?",
        "What does Mario jumps on after completing a level?",
        "Most of us have played Atari games. What does 'Atari' mean?",
        "What year was the first Pokemon game released?"],
    correctA:[
        "Call of Duty",
        "Flase",
        "Bungie",
        "Orange ",
        "2013",
        "Princess Peach",
        "2013",
        "Nintendo Entertainment System",
        "Smash Brothers",
        "2009",
        "Flag pole",
        "Success",
        "1996",
    ],
    IncorretA:[
        "Ghost Recon, Battlefield, Gears of War",
        "True",
        "Infinity Ward, Blizzard, Ubisoft",
        "Red, Purple, Yellow",
        "2012, 2014, 2015", //this will go for array 6 and 9
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

    //add questions to html
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
    
})
