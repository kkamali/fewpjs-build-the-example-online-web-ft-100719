// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')

// Your JavaScript code goes here!
let likeButtons = document.getElementsByClassName('like')
for (button of likeButtons) {
  button.addEventListener('click', like)
}

function like(e) {
  let heart = e.target
  mimicServerCall("bogusURL")
    .then(function (response) {
      if (heart.innerText == FULL_HEART) {
        heart.style.color = "gray"
        heart.innerText = EMPTY_HEART
      } else {
        heart.style.color = "red"
        heart.innerText = FULL_HEART
      }
      modal.className = "hidden"
    })
    .catch(function (error) {
      modal.className = ""
    })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
