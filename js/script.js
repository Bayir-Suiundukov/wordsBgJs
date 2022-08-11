
const newBox = document.createElement('div')
document.body.appendChild(newBox)
newBox.id = 'yatvoirot'
const edit = document.getElementById('yatvoirot')

const newBoxTwo = document.createElement('div')
document.body.appendChild(newBoxTwo)
newBoxTwo.id = 'titvoirotTwo'
const editTwo = document.getElementById('titvoirotTwo')

const newBoxThree = document.createElement('div')
document.body.appendChild(newBoxThree)
newBoxThree.id = 'titvoirotThree'
const editThree = document.getElementById('titvoirotThree')

const newBoxFour = document.createElement('div')
document.body.appendChild(newBoxFour)
newBoxFour.id = 'titvoirotFour'
const editFour = document.getElementById('titvoirotFour')

const newBoxFive = document.createElement('div')
document.body.appendChild(newBoxFive)
newBoxFive.id = 'titvoirotFive'
const editFive = document.getElementById('titvoirotFive')

const newBoxSix = document.createElement('div')
document.body.appendChild(newBoxSix)
newBoxSix.id = 'titvoirotSix'
const editSix = document.getElementById('titvoirotSix')

const divs =
        [newBox,
        newBoxTwo,
        newBoxThree,
        newBoxFour,
        newBoxFive,
        newBoxSix]

        divs.forEach(function(){
            for(let i of divs){
                i.className = 'box'
            }
        })



const xx = [
    'sad',
    'death',
    'false',
    'lier',
    'blood',
    'love',
    'tears',
    'you',
    'i',
    'sex',
    'night',
    'kiss',
    'smoke',
    'drunk',
    'dream',
    'girlfriend',
    'happy',
    'pain',
    'fetish',
    '69',
    '17',

    '666',
    'kill',
    'demon',
    'broken',
    'ok',
    'run',
    'silence',
    'laugh',
    'who',
    'somebody',
    'no one',
    'bitch',
    'alone',
    'sleep',
    'depression',
    'suicide',
    'heart',
    'hairs',
    'hands',
    'forever',
    'never',

    'infinity',
    'relationship',
    'distance',
    'whore',
    'good bye',
    'hello',
    'welcome',
    'we',
    'we?',
    'what?',
    'why?',
    'for what?',
    'no',
    'yes',
    'pussy',
    'ass',
    'boobs',
    'games',
    'gay',
    'lesbian',
    'please no',

    'yeah',
    'safe',
    'dangerous',
    'cry',
    'far away',
    'tomorrow',
]


// console.log(xx[Math.trunc(Math.random()*10)])
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min)
}

const fps = 200

const ide = setInterval(function () {
    edit.innerText = xx[getRandomArbitrary(1, 69)] + ' '
}, fps)
console.log(xx)
const ides = setInterval(function () {
    editTwo.innerText = xx[getRandomArbitrary(1, 69)]
}, fps)
const idesf = setInterval(function () {
    editThree.innerText = xx[getRandomArbitrary(1, 69)]
}, fps)
const idesg = setInterval(function () {
    editFour.innerText = xx[getRandomArbitrary(1, 69)]
}, fps)
const idesh = setInterval(function () {
    editFive.innerText = xx[getRandomArbitrary(1, 69)]
}, fps)
const ideshg = setInterval(function () {
    editSix.innerText = xx[getRandomArbitrary(1, 69)]
}, fps)


// body styling
document.body.style.background = 'linear-gradient(to left, #3b3c3d, black)'
document.body.style.boxSizing = 'border-box'
document.body.style.padding = '100px'
document.body.style.display = 'flex'
document.body.style.flexWrap = 'wrap'
document.body.style.justifyContent = 'space-between'
// document.body.style.marginTop = 'calc(10% + 16px)'

// element styling

edit.style.textTransform = 'uppercase'
edit.style.fontFamily = ' Montserrat, sans-serif'
edit.style.color = '#3498DB'
edit.style.width = 'fit-content'
const fs = setInterval(function () {
    edit.style.fontSize = getRandomArbitrary(26, 199)
        + 'px'
}, fps)

editTwo.style.textTransform = 'uppercase'
editTwo.style.fontFamily = ' Montserrat, sans-serif'
editTwo.style.color = '#ff457e'
editTwo.style.width = 'fit-content'
const fsb = setInterval(function () {
    editTwo.style.fontSize = getRandomArbitrary(26, 199)
        + 'px'
}, fps)


editThree.style.textTransform = 'uppercase'
editThree.style.fontFamily = ' Montserrat, sans-serif'
editThree.style.color = '#e74c3c'
editThree.style.width = 'fit-content'
const fsf = setInterval(function () {
    editThree.style.fontSize = getRandomArbitrary(26, 199)
        + 'px'
}, fps)

editFour.style.textTransform = 'uppercase'
editFour.style.fontFamily = ' Montserrat, sans-serif'
editFour.style.color = '#f1c4df'
editFour.style.width = 'fit-content'
const fsdа = setInterval(function () {
    editFour.style.fontSize = getRandomArbitrary(26, 199)
        + 'px'
}, fps)

editFive.style.textTransform = 'uppercase'
editFive.style.fontFamily = ' Montserrat, sans-serif'
editFive.style.color = '#e67e22'
editFive.style.width = 'fit-content'
const fsdf = setInterval(function () {
    editFive.style.fontSize = getRandomArbitrary(26, 199)
        + 'px'
}, fps)


editSix.style.textTransform = 'uppercase'
editSix.style.fontFamily = ' Montserrat, sans-serif'
editSix.style.color = 'white'
editSix.style.width = 'fit-content'
const fsdfa = setInterval(function () {
    editSix.style.fontSize = getRandomArbitrary(26, 199)
        + 'px'
}, fps)


