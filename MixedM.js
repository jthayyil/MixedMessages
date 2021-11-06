//let a = Math.floor(Math.random()*5);//

const rex =  ['Djokovic', 'Virat Kohli' , 'Lebron James', 'Caleb Dressel', 'Cristiano Ronaldo'];
const tre = ['Tennis', 'Cricket', 'Basketball', 'Swimming', 'Football'];
const yut = ['Roger Federer', 'Sachin Tendulkar', 'Michael Jordan', 'Michael Phelps', 'Pele'];

/*const rew = function(x){
  console.log(`Your hero is "${rex[x]}".`);
  console.log(`Your idol plays the sport of "${tre[x]}".` );
  console.log(`The most influential player of your sport is "${yut[x]}".`);
}

rew(Math.floor(Math.random()*5));*/



const wer = {
get ex(){
  return Math.floor(Math.random()*5);
} 
};

const right = function(){
  console.log(`Your favorite player should be : "${rex[wer.ex]}". \n`);
  console.log(`Your favorite sport should be : "${tre[wer.ex]}". \n`);
  console.log(`Your inspirational legend should be : "${yut[wer.ex]}".`);
};

right();