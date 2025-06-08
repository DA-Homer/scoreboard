const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const winnerMsg = document.getElementById('winner-msg');

let homeScoreCounter = 0;
let awayScoreCounter = 0;

const updateScore = (side, points) => {
  if (homeScoreCounter >= 12 || awayScoreCounter >= 12) {
    return;
  }

  if (side === 'home') {
    homeScoreCounter += points;
    homeScore.textContent = homeScoreCounter;
  } else {
    awayScoreCounter += points;
    awayScore.textContent = awayScoreCounter;
  }
  leaderHighlight(homeScoreCounter, awayScoreCounter)

  if (homeScoreCounter >= 12) {
    winnerMsg.innerHTML += `<p>HOME WINS!</p>`;
    winnerMsg.classList.remove('hidden');
    return;
  } else if (awayScoreCounter >= 12) {
    winnerMsg.innerHTML += `<p>AWAY WINS!</p>`;
    winnerMsg.classList.remove('hidden');
    return;
  }
}

const leaderHighlight = (homeScoreValue, awayScoreValue) => {
  if (homeScoreValue > awayScoreValue) {
    document.getElementById('home-title').style.color = '#fff359';
    document.getElementById('away-title').style.color = '#ffffff'
  } else if (awayScoreValue > homeScoreValue) {
    document.getElementById('away-title').style.color = '#fff359';
    document.getElementById('home-title').style.color = '#ffffff';
  } else {
    document.getElementById('home-title').style.color = '#ffffff';
    document.getElementById('away-title').style.color = '#ffffff';
  }
};

const newGame = () => {
  homeScoreCounter = 0;
  awayScoreCounter = 0;
  homeScore.textContent = homeScoreCounter;
  awayScore.textContent = awayScoreCounter;
  leaderHighlight(homeScoreCounter, awayScoreCounter);
  winnerMsg.classList.add('hidden');
  winnerMsg.innerHTML = '';
};

document.getElementById('add-one-home').addEventListener('click', () => updateScore('home', 1));
document.getElementById('add-two-home').addEventListener('click', () => updateScore('home', 2));
document.getElementById('add-three-home').addEventListener('click', () => updateScore('home', 3));

document.getElementById('add-one-away').addEventListener('click', () => updateScore('away', 1));
document.getElementById('add-two-away').addEventListener('click', () => updateScore('away', 2));
document.getElementById('add-three-away').addEventListener('click', () => updateScore('away', 3));

document.getElementById('new-game-btn').addEventListener('click', newGame);