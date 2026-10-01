// typing animation

const words=["Web Developer","Programmer","Engineering Student"]

let i=0
let j=0
let currentWord=""
let deleting=false

function type(){

currentWord=words[i]

if(deleting){
document.getElementById("typing").textContent=currentWord.substring(0,j--)
}
else{
document.getElementById("typing").textContent=currentWord.substring(0,j++)
}

if(!deleting && j===currentWord.length+1){
deleting=true
setTimeout(type,1000)
return
}

if(deleting && j===0){
deleting=false
i++
if(i===words.length){
i=0
}
}

setTimeout(type,120)

}

type()

// dark mode

document.getElementById("modeToggle").onclick=()=>{
document.body.classList.toggle("light-mode")
}

// mobile menu

const toggle=document.getElementById("menuToggle")
const nav=document.getElementById("navLinks")

toggle.onclick=()=>{
nav.classList.toggle("show")
}

// particles

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
})

// reveal animation

function reveal(){

const reveals=document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight
let revealTop=reveals[i].getBoundingClientRect().top
let revealPoint=100

if(revealTop<windowHeight-revealPoint){
reveals[i].classList.add("active")
}

}

}

window.addEventListener("scroll",reveal)

document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const message = document.getElementById("message").value

const response = await fetch("/contact", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
name: name,
email: email,
message: message
})

})

alert("Message sent successfully!")

})

document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const message = document.getElementById("message").value

const response = await fetch("http://localhost:3000/contact", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
name: name,
email: email,
message: message
})

})

alert("Message Sent Successfully!")

})