let choicesObject = {
    'rock' : {
      'rock' : 'draw',
      'scissor' : 'win',
      'paper' : 'lose'
    },
    'scissor' : {
      'rock' : 'lose',
      'scissor' : 'draw',
      'paper' : 'win'
    },
    'paper' : {
      'rock' : 'win',
      'scissor' : 'lose',
      'paper' : 'draw'
    }
  }

  function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    let computerChoice = choices[num];
        let result

    switch(choicesObject[input][computerChoice]){
        case 'win':
        result = "YOU WIN";
        break;
      case 'lose':
        result = "YOU LOSE";
        break;
      default:
        result = "DRAW";
        break;
    }
        console.log(result);
        document.getElementById('result').textContent = result;
}