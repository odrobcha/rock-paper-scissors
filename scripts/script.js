(function (){
    let userScore = 0;
    let computerScore = 0;
    let userChoice = '';

    const userButtons = document.getElementsByClassName('item-button');

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
    const getGameResult = (result, userChoice, computerChoice) => {
        if(result == 'draw'){
            document.getElementById('result').innerHTML = `<p class="result-text">Both of you have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Nobody won.</p>`
        };
        if (result == "userWon"){
            document.getElementById('result').innerHTML = `<p class="result-text">Yohoooo!!! You won!!!!!!! You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            userScore += 1;
        };
        if (result == "computerWon"){
            document.getElementById('result').innerHTML = `<p class="result-text">Yammer!!!! You lost :( You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
            computerScore += 1;
        };

    };
    const gameScore = () =>{
        document.getElementById('score').innerHTML = `SmartUser ${userScore} : ${computerScore} Computer`;
    };
    const playGame = ()=>{
        if(userChoice == ''){
            document.getElementById('result').innerHTML =`<p>Please, make your choice</p>`;
            return
        };

        let computerChoice = computerButtons[Number(randomComputerChoice())];

        document.getElementById('computer-choice-img').setAttribute("src", computerChoice.imgSrc);
        document.getElementById('computerChoice').classList.remove('display-none');

       if (userChoice == computerChoice.item){
           getGameResult('draw', userChoice, computerChoice);
       };

       if ((userChoice == 'rock') && (computerChoice.item == "paper")){
           getGameResult('computerWon', userChoice, computerChoice);
       };

        if ((userChoice == 'rock') && (computerChoice.item == "scissors")){
            getGameResult('userWon', userChoice, computerChoice);
        };

        if ((userChoice == 'paper') && (computerChoice.item == "rock")){
            getGameResult('userWon', userChoice, computerChoice);
        };

        if ((userChoice == 'paper') && (computerChoice.item == "scissors")){
            getGameResult('computerWon', userChoice, computerChoice);
        };

        if ((userChoice == 'scissors') && (computerChoice.item == "rock")){
            getGameResult('computerWon', userChoice, computerChoice);
        };

        if ((userChoice == 'scissors') && (computerChoice.item == "Paper")){
            getGameResult('userWon', userChoice, computerChoice);
        };

        gameScore();
    }

    gameScore();

    for (const button of userButtons) {
            button.addEventListener("click", (target) => {
                userChoice = button.getAttribute('id');
                addInactiveClass();
                button.classList.remove('inactive');
        })
    };
    document.getElementById('startGame').addEventListener('click', playGame);
})();