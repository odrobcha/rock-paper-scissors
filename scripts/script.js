(function (){
   let userScore = 0;
   let computerScore = 0;
    document.getElementById('score').innerHTML = `User ${userScore} : ${computerScore} Computer`;
    const computerButtons = [
        {item: 'rock', imgSrc: "img/rock.jpeg"},
        {item: 'scissors', imgSrc: "img/scissors.jpeg"},
        {item: 'paper', imgSrc: "img/paper.jpeg"},

    ];
    const addInactiveClass = () =>{
        for (const button of userButtons){
            button.classList.add('inactive');
        }
    }
    const randomComputerChoice = () =>{
        return Math.floor(Math.random()*3);
    }
    const playGame = ()=>{
        if(userChoice == ''){
            document.getElementById('result').innerHTML =`<p>Please, make your choice</p>`;
            return
        };
        let computerChoice = computerButtons[Number(randomComputerChoice())];
        document.getElementById('computer-choice-img').setAttribute("src", computerChoice.imgSrc);
        document.getElementById('computerChoice').classList.remove('display-none');

       if (userChoice == computerChoice.item){
           document.getElementById('result').innerHTML = `<p class="result-text">Both of you have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Nobody win.</p>`
       };
       if ((userChoice == 'rock') && (computerChoice.item == "paper")){
           document.getElementById('result').innerHTML = `<p class="result-text">Yammer!!!! You lost :( You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
           computerScore += 1;
       };
        if ((userChoice == 'rock') && (computerChoice.item == "scissors")){
            document.getElementById('result').innerHTML = `<p class="result-text">Yohoooo!!! You won!!!!!!! You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            userScore += 1;
        };
        if ((userChoice == 'paper') && (computerChoice.item == "rock")){
            document.getElementById('result').innerHTML = `<p class="result-text">Yohoooo!!! You won!!!!!!! You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            userScore += 1;
        };
        if ((userChoice == 'paper') && (computerChoice.item == "scissors")){
            document.getElementById('result').innerHTML = `<p class="result-text">Yammeer!!!! You lost :( Your choice is: <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            computerScore += 1;
        };
        if ((userChoice == 'scissors') && (computerChoice.item == "rock")){
            document.getElementById('result').innerHTML = `<p class="result-text">Yammer!!!! You lost :( Your choice is: <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            computerScore += 1;
        };
        if ((userChoice == 'scissors') && (computerChoice.item == "Paper")){
            document.getElementById('result').innerHTML = `<p class="result-text">Yohoooo!!! You won!!!!!!! You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            userScore += 1;
        };

        document.getElementById('score').innerHTML = `User ${userScore} : ${computerScore} Computer`;
    }


    const userButtons = document.getElementsByClassName('item-button');
    let userChoice = '';

    for (const button of userButtons) {
            button.addEventListener("click", (target) => {
                userChoice = button.getAttribute('id');
                addInactiveClass();
                button.classList.remove('inactive');
        })
    };
    document.getElementById('startGame').addEventListener('click', playGame);
})();