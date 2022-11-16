
let homescore = 0
let homescoreEl = document.getElementById("homeScoreEl")
let guestscoreEl = document.getElementById("guestScoreEl")

//add home scores 

function f_add1() {
   homescore += 1
   homescoreEl.textContent = homescore
}

function f_add2() {
   homescore += 2
   homescoreEl.textContent = homescore
}

function f_add3() {
   homescore += 3
   homescoreEl.textContent = homescore
}

//add guest scores

function f_add1guest() {
   homescore += 1
   guestscoreEl.textContent = homescore
}

function f_add2guest() {
   homescore += 2
   guestscoreEl.textContent = homescore
}

function f_add3guest() {
   homescore += 3
   guestscoreEl.textContent = homescore
}

//set to 0 home

function f_set0() {
    homescore = 0
    homescoreEl.textContent = homescore
}

//set to 0 guest

function f_set0guest() {
    homescore = 0
    guestscoreEl.textContent = homescore
}
