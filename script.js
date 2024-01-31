const scriptURL = "https://script.google.com/macros/s/AKfycbz8wEZZgj96AXtFvhRYKEKrzXwMajiy-A4f5qqLFj-UU7arigvCh9Lw9RmBUcLzYEk2/exec";
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");
form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thanks for subscribing";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})