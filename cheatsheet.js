//Cheat sheet of dreams 

//Recomended IDE: VS Code. I mean you dont have to use this its going to be what I use and it works nicely but eh 
// Enjoy the spagetti code and complain about it later also add anything that you think might be useful 
//fair warning: There may be insults, memes, jokes, cursing, and other miscellaneous unniceties. Procede at your own risk 

//Global Objects 
console.log("Hello world");

let hello = "Whats up guys";
console.log(hello);
//makes this available globally. Everything on the global object makes it availible globably because thats what global does I promise 
global.console.log(hello);

console.log(__dirname); //gives you the full dir name also its 2 underscores like a litle shit because just one wasnt enough its not a bag of lays damn it 
console.log(__filename);//gives you the full file name and the path 

//import modules usually at the beginning 
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`); 

//global process because you need these to process things (once again and I can not stress this enough ) globally 
console.log(process.pid); 
console.log(process.versions.node); 

console.log(process.argv); //argument varriables that are sent ot the proccess when its run it just happens to be in an array 

//Array destructuring because we might need this for absolutely no reason what so ever 
const [, , firstName, LastName] = process.argv;
console.log(`Your name is ${firstName} ${LastName}`);

//grab function

const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag)+1; 
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`); 


//Quick question and answer project that runs in terminal because guis at this point are over rated 
 
process.stdout.write("Hello  "); //process standard out because its standarad and it writes to the terminal 
process.stdout.write("Bitchachos \n\n\n"); //Adding some new lines for some flare or pizzaz or what ever the oyung people are calling it these days 


//so lets ask some questions you know in array form 

const questions  = [
    "What is your name?",
    "What is your quest?",
    "What os your second favorite position in the kama sutra?"
];

const ask = (i =0) =>{
    process.stdout.write(`\n\n\ ${questions[i]}`);
    process.stdout.write(`>`)
}

ask();

//so this part runs syncronuslly so like the little shit that js is once it ask the questions it stops because i guess we dont have an input yet because fuck that 
//so inputs 

const answers = [];
process.stdin.on("data", data => {
   answers.push(data.toString().trim());

   if(answers.length < questions.length){
    ask(answers.length); //asks the next question 
   }
   else{
       process.exit();
   }
});
//btw control+c quits stuff in the terminal if you didnt know that 

process.on('exit', () =>{
    const [name, quest, pos] = answers;
    console.log(`
        So let me get this straight 

        Your name is ${name} , your quest is ${quest}, and your second favorite is ${pos}? Wild. 

    `);
});


//alright you got that? now lets move on to timers so that way we can see just how long we wasted on existing 

const waitTime = 3000;
console.log(`setting a ${waitTime /1000} second delay`);

const timerFinished = () => console.log("It be done"); 

setTimeout(timerFinished, waitTime); //just comment out the before stuff if you want to see it work entirely by itself im just putting this in one sheet because im lazy and thats how it be someitmes 

const waitInterval = 500;
let currentTime = 0; 

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`)
}

//you can clear intervals so it doesnt run forever 
// that ends that part 

// were oging to do the core 

const path = require("path");

const dirUploades = path.join(__name, "www", "files", "uploads"); // fucking wonderful for finding paths 
const util = require("util"); // utilities modual has a datate and time stamp 
const v8 = require("v8"); // you can get Heap Statistics to get the memory and usage statistics 

// so you know what were going to do were going to do the same ask thing again 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "What is your favorite memory?",
    "What is the most dangerous dare youve ever considered doing ?"
]; 

const colelctAnswers=(questions, done)=>{
    const answers = [];
    const [firstQuestion] = questions; 

    const questionAnswered = answer => {
        answers.push(answer); 
        if (answers.length<question.length){
            rl.question(questions[answers.length], questionAnswered)
        }
        else{
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered); 

}
collectAnswers(questions, answers =>{
    console.log("Intersting. ")
    console.log(answers); 
    process.exit(); 
})

//export modules because when we code like stephen we will have several files that all need to be combined 
module.exports = "Bitch"; 
//when you require it you have to require the path best way to do this is with a ./ its super nice 
// there is an event emmitter that does stuff which is similar to the wtitch bot 
//gonna add this here to commit git push -u origin master