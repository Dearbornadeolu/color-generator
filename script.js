const color = [0,1,2,3,4,5,6,7,8,9,"A", "B","C", "D", "E", "F"]
let btn = document.querySelector('button')
btn.addEventListener('click', function bg () {
    let hexCode = '#'
    let secHexCode = '#'
    let thirdHexCode ='#'
    let fourthHexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += color[MotherRandomCodeGen()]
        secHexCode += color[secondPara()]
        thirdHexCode += color[thirdPara()]
        fourthHexCode += color[fourthPara()]
    }
    document.querySelector('.color1').style.backgroundColor = hexCode
    document.querySelector('.color1-colorcode').textContent = ` ${'COLOUR CODE:'} ` +' ' + hexCode
    document.querySelector('.color2').style.backgroundColor = secHexCode
    document.querySelector('.color2-colorcode').textContent = ` ${'COLOUR CODE:'} `+ secHexCode
    document.querySelector('.color3').style.backgroundColor = thirdHexCode
    document.querySelector('.color3-colorcode').textContent = ` ${'COLOUR CODE:'} `  + thirdHexCode
    document.querySelector('.color4').style.backgroundColor = fourthHexCode
    document.querySelector('.color4-colorcode').textContent = ` ${'COLOUR CODE:'} ` + fourthHexCode
})
function MotherRandomCodeGen() {
    return Math.floor(Math.random()*color.length)
}
function secondPara() {
    return Math.floor(Math.random()*color.length)
}
function thirdPara() {
    return Math.floor(Math.random()*color.length)
}
function fourthPara() {
    return Math.floor(Math.random()*color.length)
}