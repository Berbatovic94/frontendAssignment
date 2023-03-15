const btn = document.getElementById('turnOfForm');
const cancelBTN = document.getElementById('cancelBTN');
const overlay = document.getElementById('overlay');
const submitBTN = document.getElementById('submitBTN');
const inputText = document.getElementById('fname');
const subject = document.getElementById('subject');

function myFunction() {
  overlay.style.display = 'none';
}

function submitFormAlert() {
  if (inputText.value === '' || subject.value === '') {
    alert('fill in all fields !');
  } else {
    alert('Your message has been sent !');
  }
}

btn.addEventListener('click', myFunction);
cancelBTN.addEventListener('click', myFunction);
submitBTN.addEventListener('click', submitFormAlert);
