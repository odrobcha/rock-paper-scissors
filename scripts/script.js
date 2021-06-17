(function (){
    let userScore = 0;
    let computerScore = 0;
    let userChoice = '';

    const userButtons = document.getElementsByClassName('item-button');

    const computerButtons = [
        {item: 'rock', imgSrc: "img/rock.jpeg"},
        {item: 'scissors', imgSrc: "img/scissors.jpeg"},
        {item: 'paper', imgSrc: "img/paper.jpeg"},
        {item: 'lizard', imgSrc: "img/lizard.jpeg"},
        {item: 'spock', imgSrc: "img/spock.jpeg"},

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
            document.getElementById('text').innerHTML = '';
            return
        };

        let computerChoice = computerButtons[Number(randomComputerChoice())];

        document.getElementById('computer-choice-img').setAttribute("src", computerChoice.imgSrc);
        document.getElementById('computer-choice-img-title').innerHTML = computerChoice.item;
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
        if ((userChoice == 'rock') && (computerChoice.item == "lizard")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'rock') && (computerChoice.item == "spock")){
            getGameResult('computerWon', userChoice, computerChoice);
        };

        if ((userChoice == 'paper') && (computerChoice.item == "rock")){
            getGameResult('userWon', userChoice, computerChoice);
        };

        if ((userChoice == 'paper') && (computerChoice.item == "scissors")){
            getGameResult('computerWon', userChoice, computerChoice);
        };
        if ((userChoice == 'paper') && (computerChoice.item == "lizard")){
            getGameResult('computerWon', userChoice, computerChoice);
        };
        if ((userChoice == 'paper') && (computerChoice.item == "spock")){
            getGameResult('userWon', userChoice, computerChoice);
        };

        if ((userChoice == 'scissors') && (computerChoice.item == "rock")){
            getGameResult('computerWon', userChoice, computerChoice);
        };

        if ((userChoice == 'scissors') && (computerChoice.item == "Paper")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'scissors') && (computerChoice.item == "lizard")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'scissors') && (computerChoice.item == "spock")){
            getGameResult('computerWon', userChoice, computerChoice);
        };
        if ((userChoice == 'lizard') && (computerChoice.item == "rock")){
            getGameResult('computerWon', userChoice, computerChoice);
        };
        if ((userChoice == 'lizard') && (computerChoice.item == "paper")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'lizard') && (computerChoice.item == "scissors")){
            getGameResult('computerWon', userChoice, computerChoice);
        };
        if ((userChoice == 'lizard') && (computerChoice.item == "spock")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'spock') && (computerChoice.item == "rock")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'spock') && (computerChoice.item == "paper")){
            getGameResult('computerWon', userChoice, computerChoice);
        };
        if ((userChoice == 'spock') && (computerChoice.item == "scissors")){
            getGameResult('userWon', userChoice, computerChoice);
        };
        if ((userChoice == 'spock') && (computerChoice.item == "lizard")){
            getGameResult('computerWon', userChoice, computerChoice);
        };


        gameScore();


        userChoice = '';

        if (userScore > computerScore){
            document.getElementById('text').innerHTML = `Let play again! Give computer a chance to win!!!!`
        }
        if (userScore < computerScore){
            document.getElementById('text').innerHTML = `Try again and win!!!`
        }
        if (userScore == computerScore){
            document.getElementById('text').innerHTML = `Let play again! Somebody has to win!!!!`
        }
        document.getElementById('playAgain').classList.remove("display-none");
        document.getElementById('startGame').classList.add('display-none');
    }

    gameScore();

    document.getElementById('playAgain').addEventListener('click', () =>{

        document.getElementById('playAgain').classList.add("display-none");
        document.getElementById('startGame').classList.remove("display-none");
        for (const button of userButtons) {
                button.classList.remove('inactive');
        };
        document.getElementById('computerChoice').classList.add('display-none');
        document.getElementById('text').innerHTML = '';
        document.getElementById('result').innerHTML = '';
    })


    for (const button of userButtons) {
            button.addEventListener("click", (target) => {
                userChoice = button.getAttribute('id');
                addInactiveClass();
                button.classList.remove('inactive');
                document.getElementById('computerChoice').classList.add('display-none');
        });

    };
    document.getElementById('startGame').addEventListener('click', playGame);
    document.getElementById('rules-link').addEventListener('click' , () => {
        document.getElementById('rules').classList.remove('display-none');
    });
    document.getElementById('rules-close').addEventListener('click', () =>{
        document.getElementById('rules').classList.add('display-none');
    })
})();