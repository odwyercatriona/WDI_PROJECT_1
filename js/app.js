window.onload = init;

function init(){
  $level = $('.span');
  $windows = $('.windows');
  $playWithMe = $('.playWithMe');
  $animalAnswer = $('.animalAnswer');
  $actionAnswer = $('.actionAnswer');
  $playAgain = $('.playAgain');
  $answers = $('.answers');

  $answers.hide();
  $playAgain.hide();
  $playWithMe.hide();
  $windows.on('click', randomAnimal);
}

let animals = ['dog', 'cat', 'rabbit', 'horse', 'fish']; //add in gifs here as bonus
const actions = ['Pet It', 'Feed It', 'Love It', 'Sing To It', 'Wash It']; //add in gifs here as bonus
let actualAnimalAnswer = [];
let actualActionAnswer = [];
let userAnimalAnswer = []; //push id from animal button.s in here
let userActionAnswer = []; //push id from action buttons in here

function randomAnimal(e) {
  let animalRandom = animals[Math.floor(animals.length * Math.random())];
  actualAnimalAnswer.push(animalRandom);
  ($(this).text(animalRandom));
  console.log(animalRandom);
  //how do you remove it from the animal array after it has pushed to the new answer array?
  if (actualAnimalAnswer !== 7 && $level.text === 2) {
    playWithMe.show();
    playWithMe.on('click', randomAction);
  } else {
    actualAnimalAnswer !== 7 && $level.text === 1
    ($(this).fadeOut(1000));
  }
}

function randomAction() {
  let actionRandom = actions[Math.floor(actions.length * Math.random())];
  actualActionAnswer.push(actionRandom);
  ($(this).text(actionRandom));
  console.log(actionRandom);
}





//
// actionAnswer etc lis .hide()
//
// example of how you can hide a button and save it in a const to be referred to again within this function
// $('li').on('click', function() {
//   const $element = $(this);
//   $element.hide('slow', 'swing', () => {
//     setTimeout(function(){
//       $element.show();
//     }, 1000);
//   });
// });
//
// var myObj (animalValues) = {
//   key: value
//   dog: img
//   cat: img
// }; (try this way first as need these to be in an array to randomly pull one out-or could I have these in html as images and pull them out as jQuery then show them on the e-target? Ask if not working)
//
// const
//
// functions
//
// const lis = document.querySelectorAll('li'); (for playing audio)
//   for (var i = 0; i < lis.length; i++) {
//     lis[i].addEventListener('click', e => {
//       new Audio(`../sounds/${e.target.id}.wav`).play();
//     });
//   }
// };
//
// function gameOver() {
//   $submit.off('click');
//   $display.html('Game Over');
//   $input.val('');
