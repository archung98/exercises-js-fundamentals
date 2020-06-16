/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
function rockPaperScissorsWinner(a,b) {
  if (a === b){
    return 'draw'
  }
  else if (a === 0 && b === 1){
    return 'win'
  }
  else if (a === 0 && b === 2){
    return 'lose'
  }
  else if (a === 1 && b === 0){
    return 'lose'
  }
  else if (a === 1 && b === 2){
    return 'win'
  }
  else if (a === 2 && b === 0){
    return 'win'
  }
  else if (a === 2 && b === 1){
    return 'lose'
  }

  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');
  console.log(rockPaperScissorsWinner(0, 1)); // => 'win' (scissors beats paper)
  console.log(rockPaperScissorsWinner(1, 0)); // => 'lose' (paper loses to scissors)
  console.log(rockPaperScissorsWinner(1, 2)); // => 'win' (paper beats rock)
  console.log(rockPaperScissorsWinner(2, 2));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = rockPaperScissorsWinner;
