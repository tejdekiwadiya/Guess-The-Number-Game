let number_value = document.getElementById(`number`)
let no_guess = document.getElementById(`no_guess`)
let num_guess = document.getElementById('num_guess')
let button = document.getElementById('button')
let random_num = Math.floor(Math.random() * 100)
let containr = document.querySelector(`.ele`)
console.log("Game Started")
console.log(random_num)

//No Of Guesses
let i = 0;
function guess() {
    i++
    no_guess.innerHTML = i
}

//Guess Numbers
function guess_no() {
    let ele = document.createElement('div')
    ele.innerHTML = number_value.value
    num_guess.appendChild(ele)
}

//Guess Success
let success = document.createElement('div')
function guess_success() {
    success.innerHTML = 'Congratulations! You guess right number ' + number_value.value + "<br>You guessed the number in " + i + ` tries.<br><span class="reset">Game Reset in 10 seconds</span>`
    success.setAttribute('class', 'alart')
    containr.style.backgroundColor = '#04ff005c'
    containr.appendChild(success)
    setTimeout(() => {
        document.querySelector('.alart').remove()
        window.location.reload()
    }, 10000)
}

//Guess Failed
function error_guess() {
    let faild = document.createElement('div')
    containr.style.backgroundColor = '#ff00005c'
    faild.setAttribute('class', 'alart')

    if (number_value.value == '') {
        faild.innerHTML = 'Enter Number!'
    }
    else if (number_value.value < random_num) {
        faild.innerHTML = 'Too low. Try Again!'
    }
    else {
        faild.innerHTML = 'Too High. Try Again!'
    }
    containr.appendChild(faild)
    setTimeout(() => {
        document.querySelector('.alart').remove()
    }, 1500)
}

//Validation
function valid() {
    if (number_value.value <= 100) {
        guess();
        guess_no();
        if (random_num == number_value.value) {
            guess_success();
        }
        else {
            error_guess();
        }
    }
    else {
        let alart = document.createElement('div')
        alart.innerHTML = 'Please Enter Value Between 0 to 100'
        alart.setAttribute('class', 'alart')
        containr.appendChild(alart)
        setTimeout(() => {
            document.querySelector('.alart').remove()
        }, 1500)
    }
}
button.addEventListener('click', valid)