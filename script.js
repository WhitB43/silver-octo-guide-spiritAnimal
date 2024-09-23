// $('body').css("background-color", "yellow");

// when button is clicked
// IIFW = immediately invoked f/n expression
$("#btnGetAnimal").on("click", function(){
// get user name
  let username = $("#userName").val();
// give them a personalized greeting
  $("#greetingArea").text("Hi there, " + username + "! ");
// tell spirit animal
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))]
  $("#animalArea").text("Your spirit animal is : " + randomAnimal)
})

let spiritAnimals = ["🦅", "🐧", "🦈", "🐍", "🦇", "🐈"]