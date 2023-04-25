var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
NASA=['01.jpg', '02.jpg', '03.jpg', '04.jpg', 'mars.jpg']
var i=Math.floor(Math.random()*5)
var background=NASA[i]
var roverImg="rover.png"
var rover_height=90
var rover_width=100
var rover_x=0
var rover_y=0
function open(){
     background_img=new Image()
    background_img.onload=upLoadBackground
    background_img.src=background
    
    rover_Img_tag=new Image()
    rover_Img_tag.onload=upLoadRover
    rover_Img_tag.src=roverImg
}

function upLoadBackground(){
    ctx.drawImage(background_img, 0, 0, 800, 600)
}

function upLoadRover(){
  ctx.drawImage(rover_Img_tag, rover_x, rover_y, rover_width, rover_height)  
}

window.addEventListener("keydown", my_key_down)
function my_key_down(e){
    keyPress=e.keyCode
    console.log(keyPress)

    if (keyPress=='37') {
        console.log("left key is pressed")
         Left_arrow()
    }

    if (keyPress=='39') {
        console.log("right key is pressed")
        Right_arrow()
    }

    if (keyPress=='38') {
        console.log("Up arrow is pressed")
        Up_arrow()
    }

    if (keyPress=='40') {
        console.log("Down arrow is pressed")
        Down_arrow()
    }
}
function Left_arrow(){
        if (rover_x>=0){
    rover_x=rover_x-7
    upLoadBackground()
    upLoadRover()
        }
}
function Right_arrow(){
    if (rover_x<=700) {
    rover_x=rover_x+7
    upLoadBackground()
    upLoadRover()
    }
}
function Up_arrow(){
    if (rover_y>=0){
    rover_y=rover_y-7
    upLoadBackground()
    upLoadRover()
    }
}
function Down_arrow(){
    if (rover_y<=500){
    rover_y=rover_y+7
    upLoadBackground()
    upLoadRover()
    }
}