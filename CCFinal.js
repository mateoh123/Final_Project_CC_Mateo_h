titlex = 100
titley = 200




function setup() {
    createCanvas(700, 700)

    playButton = createButton("PLAY")
    playButton.position(290, 380)
    playButton.style('font-size', '50px')
    playButton.mousePressed(firstRoom)




}

function draw() {
    background(100, 100, 100)

    //title
    push()
    fill("white")
    textSize(70)
    text("House Escape", titlex, titley)
    pop()

}

function firstRoom() {
    background(200, 2002, 200)
}
