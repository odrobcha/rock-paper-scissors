(function (){
    let userScore = 0;
    let computerScore = 0;
    let userChoice = '';
    let simpleGame = true;

    const userButtons = document.getElementsByClassName('item-button');
    const resultElement = document.getElementById('result');
    const computerChoiceImg = document.getElementById('computer-choice-img');

    const computerChoiceElement = document.getElementById('computerChoice');
    const playAgainButton = document.getElementById('playAgain');
    const startGameButton = document.getElementById('startGame');
    const simpleGameButton= document.getElementById('simpleGame');
    const advancedGameButton = document.getElementById('advancedGame');
    const advancedTextElement = document.getElementById('advancedText');

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
        return Math.floor(Math.random()*5);
    }
        const getGameResult = (result, userChoice, computerChoice) => {
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
            getGameResult('draw', userChoice, computerItem);
            return "draw";
        };

        if ((userChoice == 'rock') && (computerItem.item == "paper")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };

        if ((userChoice == 'rock') && (computerItem.item == "scissors")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'rock') && (computerItem.item == "lizard")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'rock') && (computerItem.item == "spock")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };

        if ((userChoice == 'paper') && (computerItem.item == "rock")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };

        if ((userChoice == 'paper') && (computerItem.item == "scissors")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };
        if ((userChoice == 'paper') && (computerItem.item == "lizard")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'paper') && (computerItem.item == "spock")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };

        if ((userChoice == 'scissors') && (computerItem.item == "rock")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };

        if ((userChoice == 'scissors') && (computerItem.item == "paper")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'scissors') && (computerItem.item == "lizard")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'scissors') && (computerItem.item == "spock")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };
        if ((userChoice == 'lizard') && (computerItem.item == "rock")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };
        if ((userChoice == 'lizard') && (computerItem.item == "paper")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'lizard') && (computerItem.item == "scissors")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };
        if ((userChoice == 'lizard') && (computerItem.item == "spock")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'spock') && (computerItem.item == "rock")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'spock') && (computerItem.item == "paper")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };
        if ((userChoice == 'spock') && (computerItem.item == "scissors")){
            getGameResult('userWon', userChoice, computerItem);
            return 'userWon';
        };
        if ((userChoice == 'spock') && (computerItem.item == "lizard")){
            getGameResult('computerWon', userChoice, computerItem);
            return 'computerWon';
        };

    }
    let displayComputerResult = (computerItem) => {

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
            let computerChoice = computerButtons[Number(randomComputerChoice())];
            let resultGame = checkResults(computerChoice);

            if (resultGame  == 'userWon'){
                userScore += 1;
            };
            if (resultGame  == 'computerWon'){
                computerScore += 1;
            }
            displayComputerResult(computerChoice);

        } else {
            let computerChoice = computerButtons[Number(randomComputerChoice())];
            let resultGame = checkResults(computerChoice);
            console.log( 'first = ' + resultGame );


            if (resultGame == 'userWon'){
                advancedTextElement.innerHTML = `You won!!! But wait.... Computer plays second round. </br> Computer is making choice.....`;


                resultElement.classList.add('display-none');


                setTimeout( ()=> {
                    let computerChoiceSecond = computerButtons[Number(randomComputerChoice())];
                    let resultGameSecond = checkResults(computerChoiceSecond);
                    console.log('second ' + resultGameSecond);

                    if (resultGameSecond == 'userWon'){
                        console.log( resultGameSecond + ' '+ userScore);
                        userScore += 3;
                        console.log(resultGameSecond + ' '+ userScore);
                        displayComputerResult(computerChoiceSecond);
                    }
                    if (resultGameSecond == 'draw'){
                        displayComputerResult(computerChoiceSecond);
                        userScore += 0;
                        computerScore += 0;
                    }
                    if (resultGameSecond  == 'computerWon'){
                        console.log( resultGameSecond + ' '+ computerScore);
                        computerScore +=2;
                        console.log( resultGameSecond + ' '+ computerScore);
                        displayComputerResult(computerChoiceSecond);
                    }
                    resultElement.classList.remove('display-none');
                    advancedTextElement.innerHTML= '';
                }, 2500);
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