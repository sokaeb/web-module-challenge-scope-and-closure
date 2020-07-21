// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *          
 *          The count variable is declared within the counter1 function but outside of the counter2 function. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *          counter1 code uses a closure because there is a function within it. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *          In the scenario where you only want the count variable to be available inside that function. For keeping score on     different games. Counter2 would be better when you want the count variable to be accessable by other functions.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

                    function inning(){
                    return Math.floor(Math.random() * 3);
                    }
                    console.log(inning());
          


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

                    function finalScore(inning, numInning){
                      let home = 0;
                      let away = 0;
                        for(let i = 0; i < numInning ; i++){
                          home = home + inning();
                          away = away + inning();
                        }
                        return {"Home": home, "Away": away};
                    }
                    console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, inning, numInning){
  let scores = {home: 0, away: 0 }; // object to hold scores for each inning
  let scoreText = ''; // empty string as a placeholder for now as each inning score is calculated (behind the scenes, each line is added)
  let inningScore = getInningScore(inning); // stores the values calculated in the getInningScore func into the inningScore variable
  
  for(let i = 0; i < numInning; i++){ // this will loop through all 'numInning' number of innings, in this case it'll be 9 innings
      scores.home = scores.home + inningScore.Home; // wanting to update the Home key in the scores object with the value of i (starts at 0) + the value calculated from the getInningScore func which is named 'inningScore'
      scores.away = scores.away + inningScore.Away;
      if(i === 0){
        scoreText = `1st Inning: ${scores.away} - ${scores.home} \n`;
      }else if(i === 1){
        scoreText = scoreText + `2nd Inning: ${scores.away} - ${scores.home} \n`;
      }else if(i === 2){
        scoreText = scoreText + `3rd Inning: ${scores.away} - ${scores.home} \n`;
      }else{
        scoreText = scoreText + `${i+1}th Inning: ${scores.away} - ${scores.home} \n`;
      }
      if(i + 1 === numInning){ // references the last inning 
        // score = getInningScore(inning); // these aren't needed 
        // scores.home = scores.home + inningScore.Home;
        // scores.away = scores.away + inningScore.Away;
        scoreText = scoreText + `Final Score ${scores.away} - ${scores.home} \n`;
      }
  }
  return scoreText;
}

function getInningScore(inning){
  let home = inning(); // invoking the inning function to get a random score number, will give random number to home and away
  let away = inning();
  return final = {Home: home, Away: away}; // this is an object that's holding the randomized home and away scores 
}

console.log(scoreboard(getInningScore, inning, 9));