titlex = 70
titley = 250
story = " "


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

        fill("#ffffff")
        //forward
        rect(300, 550, 100, 40)
        //backward
        rect(300, 620, 100, 40)
        //left
        rect(180, 590, 100, 40)
        //right
        rect(420, 590, 100, 40)

        textFont("Oswald")
        fill("#000000")
        textSize(20)
        text("FORWARD", 303, 575)
        text("LEFT", 205, 615)
        text("RIGHT", 440, 615)
        textSize(17)
        text("BACKWARD", 302, 645)




        textFont("Oswald")
        fill("#ffffff")
        textSize(30)
        text(story, 30, 540)

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
