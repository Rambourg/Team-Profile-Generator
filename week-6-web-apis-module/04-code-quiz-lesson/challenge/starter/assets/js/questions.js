
let counter = 0;
let questions = [
    {   
        id: 0,
        question: "Arrays in JavaScript can be used to store",
        answers: [
            {value: "1.Multiple values", isCorrect: true},
            {value: "2.Just numbers", isCorrect: false},
            {value: "3. Strings and numbers", isCorrect: false},
            {value: "4.Booleans", isCorrect: false}

        ]
    },
    {   
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {value: "1.<j>s", isCorrect: true},
            {value: "2.<scripting>", isCorrect: false},
            {value: "<script.js", isCorrect: false},
            {value: "<index.html>", isCorrect:false}
        ]
    },
            {id:3,
            question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {value: "1.The <body> section",isCorrect:true},
            {value: "2.Bot the ,head> section and the <body> section are correct",isCorrect:false},
            {value: "3.Inside the <p. section.", isCorrect:false},
            {value: "4.Any sectio due to JavaScript be a open language.",isCorrect:false}

        ]},
         
        {id:4,
        question: "How do you write Hello World in an alert box?",
        answers: [
        {value:"1.alert('Hello world')",isCorrect:true},
        {value: "2.alertBox ('Hello Wolrd')",isCorrect:false},
        {value: "3.msg('Hello Wordl')",isCorrect:false},
        {value: "4.msgBox('Hellor World,",isCorrect:false}


    ]}
    ]
    
    const questionEl = document.querySelector ("#questions")
    questionEl.children[0].textContent = questions[counter].question
    
questionEl.addEventListener("click", nextQuestion )
function nextQuestion(){
    if (counter>=questions.length) {
        questionEl.className= "hide";
        const endScreenEl = document.querySelector("#end-screen");
        endScreenEl.className = "visible";
        return;
    
    
    }
    questionEl.children[0].textContent = questions[counter].question;
    document.getElementById("choices").innerHTML = ""

    for (let index = 0; index < questions[counter].answers.length; index++) {
       console.log(questions[counter].answers[index]);

       const node = document.createElement("button");
       const textnode = document.createTextNode(questions[counter].answers[index].value);
       node.appendChild(textnode);
       //if is correct = true show the asnwer
       //create event listener .
       document.getElementById("choices").appendChild(node);
        
    }
    
    console.log(counter)
    
   

counter++;
}


