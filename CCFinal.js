titlex = 70
titley = 250
story = " "
hovercolorF = "#ffffff"
hovercolorB = "#ffffff"
hovercolorL = "#ffffff"
hovercolorR = "#ffffff"

//room values
gameStart = false
firstroomValue = false
secondroomValue = false

function setup() {
    createCanvas(700, 700)
    background(100, 100, 100)

    playButton = createButton("PLAY")
    playButton.position(290, 380)
    playButton.style('font-size', '50px')
    playButton.mousePressed(firstRoom)

}

function draw() {
    //title
    push()
    fill("white")
    textSize(100)
    textFont("Lugrasimo")
    text("House Escape", titlex, titley)
    pop()

    if (gameStart) {
        noStroke()
        //text box
        fill("#8a8484")
        rect(0, 500, 750, 200)
        stroke(0)


        //forward
        fill(hovercolorF)
        rect(300, 550, 100, 40)
        //backward
        fill(hovercolorB)
        rect(300, 620, 100, 40)
        //left
        fill(hovercolorL)
        rect(180, 590, 100, 40)
        //right
        fill(hovercolorR)
        rect(420, 590, 100, 40)

        textFont("Oswald")
        fill("#000000")
        textSize(20)
        text("FORWARD", 302, 575) //forward
        text("LEFT", 205, 615) //left
        text("RIGHT", 440, 615) //right
        textSize(17)
        text("BACKWARD", 301.5, 645) //backward

        textFont("Oswald")
        fill("#ffffff")
        textSize(30)
        text(story, 30, 540)

        //BUTTON HOVER COLORS

        if (mouseX > 300 && mouseX < 400 && mouseY > 550 && mouseY < 590) {
            hovercolorF = "#d4d4d4"


        } else {
            hovercolorF = "#ffffff"

        }

        if (mouseX > 300 && mouseX < 400 && mouseY > 620 && mouseY < 660) {
            hovercolorB = "#d4d4d4"

        } else {
            hovercolorB = "#ffffff"
        }

        if (mouseX > 180 && mouseX < 280 && mouseY > 590 && mouseY < 630) {
            hovercolorL = "#d4d4d4"

        } else {
            hovercolorL = "#ffffff"
        }

        if (mouseX > 420 && mouseX < 520 && mouseY > 590 && mouseY < 630) {
            hovercolorR = "#d4d4d4"

        } else {
            hovercolorR = "#ffffff"
        }

        //BUTTON CLICK BOUNDARIES
        if (mouseIsPressed === true) {
            //FORWARD BUTTON BOUNDARIES
            if (mouseX > 300 && mouseX < 400 && mouseY > 550 && mouseY < 590) {


            }

            //BACKWARD BUTTON BOUNDARIES
            if (mouseX > 300 && mouseX < 400 && mouseY > 620 && mouseY < 660) {

            }

            //LEFT BUTTON BOUNDARIES
            if (mouseX > 180 && mouseX < 280 && mouseY > 590 && mouseY < 630) {

            }

            //RIGHT BUTTON BOUNDARIES
            if (mouseX > 420 && mouseX < 520 && mouseY > 590 && mouseY < 630) {

            }

        }

    }

    //ROOM LOGIC
    if (firstroomValue) {
        secondroomValue = false
    } else if (secondroomValue) {
        firstroomValue = false
    }

}

function firstRoom() {
    background(0, 0, 0)
    firstroomValue = true
    gameStart = true
    titlex = 1000
    titley = 1000
    playButton.remove()
    story = "It's dark..."




}

function secondRoom() {
    background(150, 150, 150)
    secondroomValue = true



}
