// reset all defaults 
document.body.style.cssText = 'margin:0;padding:0;box-sizing: border-box;'

// global variables 
let promptContent;
let welcomeDiv;
let firstDiv;
let output;

// webpage loads Prompt will begin
document.addEventListener('DOMContentLoaded', starting()) // first event calling starting function if user didint type its entering to loop this is why i created as function 
function starting() {
    // prompt section 
    promptContent = prompt("Please Enter Your Name", "")
    if (promptContent === null || promptContent.trim() === "") {
        alert("YOUR NAME REQUIRED")
        starting()
        // if not filled calling again starting function to repeat 
    } else {
        promptContent = promptContent.toUpperCase();
        // without function calling promptcontent cant load immediatly to load 
        Divopen();
    }
}

// welcome section 
function Divopen() {
    welcomeDiv = document.createElement("div");
    welcomeDiv.id = "welcomeid" //id needed to find jquery fading effect
    welcomeDiv.style.width = "800px"
    welcomeDiv.style.height = "300px"
    welcomeDiv.style.backgroundColor = "black"
    welcomeDiv.style.marginTop = "150px"
    welcomeDiv.style.marginLeft = '350px'
    welcomeDiv.style.border = "25px solid white"
    welcomeDiv.style.boxShadow = " 25px 25px black"
    document.body.appendChild(welcomeDiv)

    // name printing 
    let welcomePrint = document.createElement("h1")
    welcomePrint.innerHTML = "Welcome " + promptContent
    welcomePrint.style.color = 'white'
    welcomePrint.style.wordSpacing="5px"
    welcomePrint.style.marginLeft = "20px" 
    welcomePrint.style.fontFamily="monospace" 
    welcomePrint.style.fontSize=" 48px"
    welcomeDiv.appendChild(welcomePrint)

    // play button 
    let play = document.createElement("div")
    play.style.width = "150px"
    play.style.height = "90px"
    play.style.backgroundColor = "white"
    play.style.display = "flex"
    play.style.justifyContent = "center"
    play.style.alignItems = "center"
    play.style.marginLeft = "55%"
    play.style.marginTop = "45px"
    play.style.backgroundColor = "white"
    welcomeDiv.appendChild(play)

    // inside play created a button 
    let button = document.createElement("button")
    button.textContent = "PLAY NOW"
    button.style.fontFamily="fantasy" 
    button.style.letterSpacing="1px"
    button.style.padding = "16px"
    button.style.color = "black"
    button.style.fontSize = "13px"
    button.style.fontSize = "13px"
    button.style.textDecoration = "solid"
    button.style.border = "3px solid black"
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.9)"
        button.style.backgroundColor = "aqua"
    })
    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)"
        button.style.backgroundColor = "white"
    })
    button.addEventListener("click", begins)
    play.appendChild(button)
}


// play button click and it will run 
function begins() {
    // welcomeDiv.remove()
    // document.body.removeChild(welcomeDiv)
    // we can both use remove child and remove()inbuild function but here im used small animation to fade out using jquery
    $("#welcomeid").fadeOut(5000, function () {
        // after fading new div created 
        firstDiv = document.createElement("div")
        firstDiv.style.width = "100%"
        firstDiv.style.height = "707px"
        firstDiv.style.backgroundColor = "black"
        document.body.appendChild(firstDiv)

        // created h1 to display game instruction 
        let text = document.createElement("h1")
        text.innerHTML = "You Have Only 1 Minute To Find The 5 Differences"
        text.style.color = "white"
        text.style.margin = "0"
        text.style.paddingTop = "30px"
        text.style.paddingLeft = "20px"
        text.style.wordSpacing="3px"
        text.style.fontFamily="sans-serif"
        firstDiv.appendChild(text)

        // created p for game instruction 
        let instruction = document.createElement("p")
        instruction.innerHTML = "On the next click, The timer will start, And you will receive 2 images. You can spot the findings in IMAGE 2 within 30 seconds."
        instruction.style.color = "white"
        instruction.style.paddingLeft = "20px"
        instruction.style.paddingTop = "10px"
        instruction.style.wordSpacing="3px"
        instruction.style.fontFamily="sans-serif"
        firstDiv.appendChild(instruction)

        // after click it runs 
        let mousedown = true  //this should be place out of the function
        document.addEventListener("mousedown", function () {
            if (mousedown) {  // check if mousedown is true 
                // image div creation 
                let imgDiv = document.createElement("div")
                imgDiv.style.width = "728px"
                imgDiv.style.height = "485px"
                imgDiv.style.backgroundColor = "white"
                imgDiv.style.marginTop = "20px"
                imgDiv.style.marginLeft = "20px"
                firstDiv.appendChild(imgDiv)

                // inside img div creates image
                let imagex=document.createElement("img")
                imagex.setAttribute("src","find 5 differences new.jpg")
                imagex.setAttribute("usemap","#findings")
                imgDiv.appendChild(imagex)

                // image 1 name 
                let imageOne=document.createElement("p")
                imageOne.innerHTML="Image-1"
                imageOne.style.position="absolute"
                imageOne.style.top="620px"
                imageOne.style.left="145px"
                imageOne.style.color="white"
                imgDiv.appendChild(imageOne)

                 // image 2 name 
                 let imageTwo=document.createElement("p")
                 imageTwo.innerHTML="Image-2"
                 imageTwo.style.position="absolute"
                 imageTwo.style.top="620px"
                 imageTwo.style.left="521px"
                 imageTwo.style.color="white"
                 imgDiv.appendChild(imageTwo)

                // on the right side output display created as absolute 
                output = document.createElement("div")
                output.style.width = "520px"
                output.style.height = "485px"
                output.style.backgroundColor = "black"
                output.style.position = "absolute"
                output.style.top = "131px"
                output.style.right = "95px"
                firstDiv.appendChild(output)

                // image appear here when user click.at the same time need to start timer so must write in this function 
                setTimeout(timeUp, 30000); //timeup is function name and ,set the timer 
                return mousedown = false //mousedown return false so next time restrict always remember that dont write anything after return.becuase it will exit after return so execution will not takeplace//
            }
        })
    })
}

let stop=1; //after alert it wont allow if condition because after alert make its value to 2
// timer function effects 
function timeUp() {
    if (counter != 5) { //user cant get the 5 points
        let los = document.createElement("h1")
        los.innerHTML = "Better Luck Next Time " + promptContent
        los.style.fontStyle = "italic"
        los.style.color = "red"
        output.appendChild(los)
       

        // next game button  also provide for losers
        let next = document.createElement("button")
        next.textContent = "Next Game"
        next.style.padding = "10px"
        next.style.marginLeft = "20px"
        next.style.marginTop = "50px"
        next.style.fontWeight = "bold"
        next.addEventListener("click", nextGame)
        output.appendChild(next)
        return stop =2; //if conditon not allow after this
    }
    alert("Time Up") //also make a alert additionally
}


// user finding checking and conditions 
let counter = 0;
let finded = [] //created an array to mark the values 
function point(x) { // parameter x will give in html 1,2,3,4,5
    if (!finded.includes(x) && stop==1 )  //condition allow only.if x value are not present in array, ie= checking x values are not present in finded array
    {
        if (x === 1) {
            counter++
            finded.push(x) //the x value =1 pushes to array .now 1 is there in array,next time it will not allow this condition

        } else if (x === 2) {
            counter++
            finded.push(x) //the x value =2 pushes to array .now 1 is there in array,next time it will not allow this condition

        } else if (x === 3) {
            counter++
            finded.push(x)//the x value =3 pushes to array .now 1 is there in array,next time it will not allow this condition

        } else if (x === 4) {
            counter++
            finded.push(x) //the x value =4 pushes to array .now 1 is there in array,next time it will not allow this condition
        } else if (x === 5) {
            counter++
            finded.push(x) //the x value =5 pushes to array .now 1 is there in array,next time it will not allow this condition
        }

        // if any counter value incresed it willl display in point 
        let point = document.createElement("h2")
        point.innerHTML = "SCORE " + counter + " OUT OF 5"
        point.style.paddingLeft = "20px"
        point.style.color = "white"
        output.appendChild(point)

    }
    //  if user find all 5 points 
    if (counter == 5) {
        let win = document.createElement("h1")
        win.innerHTML = "Congragulations " + promptContent
        win.style.fontStyle = "italic"
        win.style.color = "green"
        win.style.marginTop = "30px"
        output.appendChild(win)

        //for future use next game button which contain link
        let next = document.createElement("button")
        next.textContent = "Next Game"
        next.style.padding = "10px"
        next.style.marginLeft = "20px"
        next.style.marginTop = "50px"
        next.style.fontWeight = "bold"
        next.addEventListener("click", nextGame)
        output.appendChild(next)
    }
}

// game2 function 
function nextGame() {
    firstDiv.remove()
    let gameTwoDiv=document.createElement("div")
    gameTwoDiv.setAttribute("style","width :100%; height:707px;")
    gameTwoDiv.style.border="75px solid aqua"
    gameTwoDiv.style.backgroundColor="black"
    gameTwoDiv.style.width="90.2%"
    gameTwoDiv.style.height="560px"
    document.body.appendChild(gameTwoDiv)

    // text 
    let nextGame = document.createElement("h1")
    nextGame.innerHTML = "COMING SOON"
    nextGame.style.color="white"
    nextGame.style.margin="0"
    nextGame.style.width="90.2%"
    nextGame.style.height="560px"
    nextGame.style.marginTop="20px"
    nextGame.style.marginLeft="30px"
    gameTwoDiv.appendChild(nextGame)
}
