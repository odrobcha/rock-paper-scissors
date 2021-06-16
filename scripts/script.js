(function (){
    const addInactiveClass = () =>{
        for (const button of userButtons){
            button.classList.add('inactive');
        }
    }
    const randomComputerChoice = () =>{
        return Math.floor(Math.random()*3);
    }

    const playGame = ()=>{
        let computerChoice = computerButtons[Number(randomComputerChoice())];
        document.getElementById('computer-choice-img').setAttribute("src", computerChoice.imgSrc);
        document.getElementById('computerChoice').classList.remove('display-none');

       if (userChoice == computerChoice){
           document.getElementById('result').innerHTML = `You c`
       }


    }
    const computerButtons = [
        {item: 'rock', imgSrc: "img/rock.jpeg"},
        {item: 'scissors', imgSrc: "img/scissors.jpeg"},
        {item: 'paper', imgSrc: "img/paper.jpeg"},

    ];

    const userButtons = document.getElementsByClassName('item-button');
    let userChoice = '';

    for (const button of userButtons) {
            button.addEventListener("click", (target) => {
                userChoice = button.getAttribute('id');
                addInactiveClass();
                button.classList.remove('inactive');
        })
    }
    document.getElementById('startGame').addEventListener('click', playGame);




})();