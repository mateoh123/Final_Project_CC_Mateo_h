titlex = 70;
titley = 250;
doorwithLight = 500
firstnote = 500
lockerroom = 500
lockeddoor = 500
lockX = 460
comboInput = ""
lockerDoor = 0
story = " ";
hovercolorF = "#ffffff";
hovercolorB = "#ffffff";
hovercolorL = "#ffffff";
hovercolorR = "#ffffff";

//locker passcode: 528691

//EVENTS VARIABLES
gotFlashlight = false;
flashlightx = 500;
correctLock = false
clickedLock = true
lockSubScreen = false

//ROOM VARIABLES
gameStart = false;
firstroomValue = false;
noteroomValue = false;
lockerroomValue = false
lockeddoorValue = false

function preload() {
    flashlight = loadImage("images/a9ab94b863f3af9479650fdee9a7f553.png");
    lock = loadImage("images/Lock_PNG_Clip_Art-1406.png")
}

function setup() {
    createCanvas(700, 700);

    playButton = createButton("PLAY");
    playButton.position(290, 380);
    playButton.style("font-size", "50px");
    playButton.mousePressed(firstRoom);

}

function draw() {
    background(0);
    //title
    push();
    fill("white");
    textSize(100);
    textFont("Lugrasimo");
    text("House Escape", titlex, titley);
    pop();

    if (gameStart) {
        noStroke();
        //text box
        fill("#8a8484");
        rect(0, 500, 750, 200);
        stroke(0);

        //DOOR WITH LIGHT
        //door
        push()
        translate(doorwithLight, 0)
        noStroke(0)
        fill("#6e350f")
        rect(350, 100, 100, 200)
        fill("#223e40")
        rect(365, 120, 70, 60)
        fill("#000000")
        ellipse(430, 220, 20, 20)

        //light
        fill(242, 255, 0, 200)
        ellipse(400, 210, 400, 400)
        pop()

        //NOTE ROOM

        push()
        translate(firstnote, 0)
        //note paper
        fill("#ede885")
        rect(300, 50, 200, 330)

        //note words
        fill("#000000")
        textSize(35)
        text("They", 350, 100)
        text("Wont", 330, 170)
        text("Stop", 360, 250)
        text("EB HF IA", 320, 350)

        //light
        fill(242, 255, 0, 200)
        ellipse(400, 210, 400, 400)
        pop()

        //LOCKED CABINET ROOM
        push()
        noStroke()
        translate(lockerroom, 0)
        //locker
        fill("#c4c4c4")
        rect(240, 0, 320, 500)

        push()
        translate(lockerDoor, 0)
        //locker vents
        fill("#878787")
        rect(290, 40, 220, 20)
        rect(290, 80, 220, 20)
        rect(290, 120, 220, 20)

        //locker hinge
        noStroke(0)
        fill("#adadad")
        rect(480, 250, 20, 80)
        pop()

        //light
        fill(242, 255, 0, 200)
        ellipse(400, 250, 400, 400)
        pop()

        //LOCKED DOOR ROOM
        push()
        translate(lockeddoor, 0)
        noStroke()
        //door
        fill("#6e350f")
        rect(240, 0, 320, 500)

        //door border
        fill("#878787")
        rect(240, 0, 20, 520)
        rect(540, 0, 20, 520)
        rect(240, 0, 300, 20)

        //window
        fill("#223e40")
        rect(295, 60, 210, 150)

        //knob
        fill("#000000")
        ellipse(490, 300, 40, 40)


        //light
        fill(242, 255, 0, 200)
        ellipse(400, 210, 400, 400)
        pop()



        //LOCK SUB SCREEN
        push()
        if (clickedLock) {
            fill(140, 140, 140)
            rect(205, 100, 400, 220)
            textSize(30)
            fill(255, 255, 255)
            text("Whats the Code?", 305, 140)
            noStroke()
            rect(220, 160, 50, 50) //1
            rect(300, 160, 50, 50) //2
            rect(380, 160, 50, 50) //3
            rect(460, 160, 50, 50) //4
            rect(540, 160, 50, 50) //5
            rect(220, 230, 50, 50) //6
            rect(300, 230, 50, 50) //7
            rect(380, 230, 50, 50) //8
            rect(460, 230, 50, 50) //9
            rect(540, 230, 50, 50) //0
            rect(330, 285, 60, 30) // check
            rect(420, 285, 60, 30) // clear
            fill(130, 0, 0)
            rect(205, 100, 50, 50) //leave
            fill(0, 0, 0)
            textSize(40)
            text("1", 235, 200)
            text("2", 315, 200)
            text("3", 395, 200)
            text("4", 475, 200)
            text("5", 555, 200)
            text("6", 235, 270)
            text("7", 315, 270)
            text("8", 395, 270)
            text("9", 475, 270)
            text("0", 555, 270)
            textSize(25)
            text("clear", 335, 305)
            text("check", 421, 305)
            text("-----", 520, 305)
            text("X", 220, 135)


        }
        pop()

        //CODE INPUT
        if (comboInput == "528691" || comboInput == "52 86 91") {
            story = "It worked!"
            lockX = 10000
            lockerDoor = 1000
        }





        //forward
        fill(hovercolorF);
        rect(300, 550, 100, 40);
        //backward
        fill(hovercolorB);
        rect(300, 620, 100, 40);
        //left
        fill(hovercolorL);
        rect(180, 590, 100, 40);
        //right
        fill(hovercolorR);
        rect(420, 590, 100, 40);

        textFont("Oswald");
        fill("#000000");
        textSize(20);
        text("FORWARD", 302, 575); //forward
        text("LEFT", 205, 615); //left
        text("RIGHT", 440, 615); //right
        textSize(17);
        text("BACKWARD", 301.5, 645); //backward

        textFont("Oswald");
        fill("#ffffff");
        textSize(30);
        text(story, 15, 530);

        //BUTTON HOVER COLORS
        if (mouseX > 300 && mouseX < 400 && mouseY > 550 && mouseY < 590) {
            hovercolorF = "#d4d4d4";
        } else {
            hovercolorF = "#ffffff";
        }

        if (mouseX > 300 && mouseX < 400 && mouseY > 620 && mouseY < 660) {
            hovercolorB = "#d4d4d4";
        } else {
            hovercolorB = "#ffffff";
        }

        if (mouseX > 180 && mouseX < 280 && mouseY > 590 && mouseY < 630) {
            hovercolorL = "#d4d4d4";
        } else {
            hovercolorL = "#ffffff";
        }

        if (mouseX > 420 && mouseX < 520 && mouseY > 590 && mouseY < 630) {
            hovercolorR = "#d4d4d4";
        } else {
            hovercolorR = "#ffffff";
        }
    }

    //ROOM LOGIC
    if (firstroomValue) {
        noteroomValue = false;
        image(flashlight, flashlightx, 400, 80, 30);
    } else if (noteroomValue) {
        firstroomValue = false;
    } else if (lockerroomValue) {
        image(lock, lockX, 305, 55, 60)
    }


}

function firstRoom() {
    firstroomValue = true;
    noteroomValue = false
    lockerroomValue = false
    gameStart = true;
    titlex = 1000;
    titley = 1000;
    doorwithLight = 500
    firstnote = 1000
    lockerroom = 500
    playButton.remove();
    story = "Where am I? Why is it so dark?"

    if (gotFlashlight) {
        story = "What is that ahead?";
        doorwithLight = 0
    }

}

function isItCorrect() {
    comboInput = lockcombo.value()
}





function mousePressed() {
    //FORWARD BUTTON BOUNDARIES
    if (mouseX > 300 && mouseX < 400 && mouseY > 550 && mouseY < 590) {
        if (gotFlashlight != true && firstroomValue) {
            story = "Its too dark! I cant move forward!";
        }

        if (gotFlashlight && firstroomValue) {
            story = "Oh my gosh! Its a door! But its locked..."
            lockeddoorValue = true
            firstroomValue = false
            doorwithlight = 500
            lockeddoor = 0
        }
    }

    //BACKWARD BUTTON BOUNDARIES
    if (mouseX > 300 && mouseX < 400 && mouseY > 620 && mouseY < 660) {
        if (gotFlashlight != true && firstroomValue) {
            story = "Theres nothing behind me...";
        }

        if (gotFlashlight && lockeddoorValue) {
            story = ("whats ahead?")
            lockeddoorValue = false
            firstroomValue = true
            doorwithlight = 0
            lockeddoor = 500

        }
    }

    //LEFT BUTTON BOUNDARIES
    if (mouseX > 180 && mouseX < 280 && mouseY > 590 && mouseY < 630) {
        if (gotFlashlight != true && firstroomValue) {
            story = "Its too dark! I cant move left!";
        }

        if (gotFlashlight && firstroomValue) {
            story = "What is this?";
            noteroomValue = true;
            firstroomValue = false
            lockerroomValue = false
            firstnote = 0
        }


        if (gotFlashlight && lockerroomValue) {
            story = "Whats ahead?"
            doorwithlight = 0
            lockerroom = 1000
            firstroomValue = true
            noteroomValue = false
            lockerroomValue = false
        }




    }

    //RIGHT BUTTON BOUNDARIES
    if (mouseX > 420 && mouseX < 520 && mouseY > 590 && mouseY < 630) {
        if (gotFlashlight != true && firstroomValue) {
            story = "Its too dark! I cant move right!";
        }

        if (firstroomValue && gotFlashlight) {
            noteroomValue = false;
            firstroomValue = false;
            lockerroomValue = true
            story = "Is that a locked locker?";
            lockerroom = 0

        }


        if (gotFlashlight && noteroomValue) {
            story = "Whats ahead?"
            firstnote = 1000
            firstroomValue = true
            noteroomValue = false
            lockerroomValue = false
        }

    }




    //CLICKING FLASHLIGHT
    if (mouseX > 500 && mouseX < 580 && mouseY > 400 && mouseY < 430 && firstroomValue && gotFlashlight != true) {
        story = "I can see now!";
        flashlightx = -100;
        doorwithLight = 0
        gotFlashlight = true;
    }

    //CLICKING THE LOCK
    if (mouseX > 460 && mouseX < 515 && mouseY > 305 && mouseY < 365) {
        fill("#ffd257")
        clickedLock = true

    }

    //EXITING LOCK SUBSCREEN
    if (mouseX > 200 && mouseX < 230 && mouseY > 200 && mouseY < 230) {
        if (clickedLock && lockSubScreen) {
            lockSubScreen = false
            clickedLock = false
        }
    }
}
