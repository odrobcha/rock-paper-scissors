(function (){
    let userScore = 0;
    let computerScore = 0;
    let userChoice = '';
    let simpleGame = true;
    let maxItemNumber = 3;

    const userButtons = document.getElementsByClassName('item-button');
    const resultElement = document.getElementById('result');
    const computerChoiceImg = document.getElementById('computer-choice-img');

    const computerChoiceElement = document.getElementById('computerChoice');
    const playAgainButton = document.getElementById('playAgain');
    const startGameButton = document.getElementById('startGame');
    const simpleGameButton= document.getElementById('simpleGame');
    const advancedGameButton = document.getElementById('advancedGame');
    const advancedTextElement = document.getElementById('advancedText');
    
    const classicGameButton = document.getElementById('classic');
    const extendedGameButton = document.getElementById('extended');


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
    
    const randomComputerChoice = (num) =>{
        return Math.floor(Math.random()*num);
    }
        const displayGameResult = (result, userChoice, computerChoice) => {
        if(result == 'draw'){
            resultElement.innerHTML = `<p class="result-text">Both of you have <img class="result-img" src=img/${userChoice}.jpeg> chosen.</br> <img class="result-img" src="img/draw.jpeg">Nobody won.</p>`
        };
        if (result == "userWon"){
            resultElement.innerHTML = `<p class="result-text">Yohoooo!!! You won!!!!!!! <img class="result-img" src="img/win.jpeg"></br>You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`

        };
        if (result == "computerWon"){
            resultElement.innerHTML = `<p class="result-text">Yammer!!!! You lost <img class="result-img" src="img/lose.jpeg"></br> You have <img class="result-img" src=img/${userChoice}.jpeg> chosen. Computer choice is <img class="result-img" src=img/${computerChoice.item}.jpeg></p>`
        };
    };
    const gameScore = () =>{
        document.getElementById('score').innerHTML = `SmartUser ${userScore} : ${computerScore} Computer`;
    };
    const checkResults = (computerItem) =>{
        if (userChoice == computerItem.item){
            displayGameResult('draw', userChoice, computerItem);
            return "draw";
        };
        if (((userChoice == 'spock') && (computerItem.item == "scissors")) || ((userChoice == 'spock') && (computerItem.item == "rock")) || ((userChoice == 'lizard') && (computerItem.item == "spock")) || ((userChoice == 'lizard') && (computerItem.item == "paper")) || ((userChoice == 'scissors') && (computerItem.item == "paper")) ||((userChoice == 'paper') && (computerItem.item == "spock")) ||(userChoice == 'rock') && (computerItem.item == "scissors") || ((userChoice == 'rock') && (computerItem.item == "lizard")) || ((userChoice == 'paper') && (computerItem.item == "rock")) || ((userChoice == 'paper') && (computerItem.item == "lizard"))){
            displayGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if (((userChoice == 'spock') && (computerItem.item == "lizard")) || ((userChoice == 'spock') && (computerItem.item == "paper")) || ((userChoice == 'lizard') && (computerItem.item == "scissors")) || ((userChoice == 'lizard') && (computerItem.item == "rock")) || ((userChoice == 'scissors') && (computerItem.item == "spock")) || ((userChoice == 'scissors') && (computerItem.item == "lizard")) || ((userChoice == 'scissors') && (computerItem.item == "rock")) || ((userChoice == 'paper') && (computerItem.item == "scissors")) || ((userChoice == 'rock') && (computerItem.item == "spock")) || (userChoice == 'rock') && (computerItem.item == "paper")){
            displayGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };
    }
    const displayComputerResult = (computerItem) => {

        computerChoiceImg.setAttribute("src", computerItem.imgSrc);
        document.getElementById('computer-choice-img-title').innerHTML = computerItem.item;
        computerChoiceElement.classList.remove('display-none');
        userChoice = '';
        gameScore();
    }

    const playGame = ()=>{
        if(userChoice == ''){
            resultElement.innerHTML =`<p>Please, make your choice</p>`;
            return
        };

        if (simpleGame) {
            let computerChoice = computerButtons[Number(randomComputerChoice(maxItemNumber))];
            let resultGame = checkResults(computerChoice);

            if (resultGame  == 'userWon'){
                userScore += 1;
            };
            if (resultGame  == 'computerWon'){
                computerScore += 1;
            }
            displayComputerResult(computerChoice);

        } else {
            let computerChoice = computerButtons[Number(randomComputerChoice(maxItemNumber))];
            let resultGame = checkResults(computerChoice);
            if (resultGame == 'userWon'){
                advancedTextElement.innerHTML = `You won!!! But wait.... Computer plays second round. </br> Computer is making choice.....`;
                playAgainButton.classList.add('invisible');
                resultElement.classList.add('display-none');

                setTimeout( ()=> {
                    let computerChoiceSecond = computerButtons[Number(randomComputerChoice(maxItemNumber))];
                    let resultGameSecond = checkResults(computerChoiceSecond);

                    if (resultGameSecond == 'userWon'){
                        userScore += 3;
                        displayComputerResult(computerChoiceSecond);
                    }

                    if (resultGameSecond == 'draw'){
                        displayComputerResult(computerChoiceSecond);
                    }

                    if (resultGameSecond  == 'computerWon'){
                        computerScore +=2;
                        displayComputerResult(computerChoiceSecond);
                    }
                    resultElement.classList.remove('display-none');
                    advancedTextElement.innerHTML= '';
                    playAgainButton.classList.remove('invisible');
                }, 2000);
            }

            if (resultGame  == 'computerWon'){
                computerScore +=2;
                displayComputerResult(computerChoice);
            }
            if (resultGame  == 'draw'){
                displayComputerResult(computerChoice);
            }
        }
        playAgainButton.classList.remove("display-none");
        startGameButton.classList.add('display-none');
    }
    gameScore();
    document.querySelector('.item-button#lizard').classList.add('display-none');
    document.querySelector('.item-button#spock').classList.add('display-none');

    classicGameButton.addEventListener('click', () =>{
        maxItemNumber = 3;
        classicGameButton.classList.remove('inactive');
        extendedGameButton.classList.add('inactive');
        document.getElementById('lizard').classList.add('display-none');
        document.getElementById('spock').classList.add('display-none');
    });

    extendedGameButton.addEventListener('click', () =>{
        maxItemNumber = 5;
        classicGameButton.classList.add('inactive');
        extendedGameButton.classList.remove('inactive');
        document.getElementById('lizard').classList.remove('display-none');
        document.getElementById('spock').classList.remove('display-none');
    });

    simpleGameButton.addEventListener('click', () =>{
        simpleGame = true;
        simpleGameButton.classList.remove('inactive');
        advancedGameButton.classList.add('inactive');

    });
    advancedGameButton.addEventListener('click', () =>{
        simpleGame = false;
        simpleGameButton.classList.add('inactive');
        advancedGameButton.classList.remove('inactive');

    });

    playAgainButton.addEventListener('click', () =>{

        playAgainButton.classList.add("display-none");
        startGameButton.classList.remove("display-none");
        for (const button of userButtons) {
                button.classList.remove('inactive');
        };
        computerChoiceElement.classList.add('display-none');

        resultElement.innerHTML = '';
    })

    for (const button of userButtons) {
            button.addEventListener("click", (target) => {

               if (!startGameButton.classList.contains('display-none')) {

                   userChoice = button.getAttribute('id');

                   addInactiveClass();
                   button.classList.remove('inactive');
                   computerChoiceElement.classList.add('display-none');
               }
        });

    };
    startGameButton.addEventListener('click', playGame);

    document.getElementById('rules-link').addEventListener('click' , () => {
        document.getElementById('rules').classList.remove('display-none');
    });

    document.getElementById('rules-close').addEventListener('click', () =>{
        document.getElementById('rules').classList.add('display-none');
    })
})();