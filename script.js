// ===============================
// LOADING SCREEN
// ===============================

const progressBar = document.getElementById("progressBar");


setTimeout(() => {

    progressBar.style.width = "100%";

},100);



setTimeout(() => {

    changeScene("introScene");

},3500);





// ===============================
// SCENE SWITCHER
// ===============================

function changeScene(sceneID){

    document.querySelectorAll(".scene")
    .forEach(scene=>{

        scene.classList.remove("active");

    });


    document.getElementById(sceneID)
    .classList.add("active");

}






// ===============================
// REPLAY BUTTON
// ===============================

document.getElementById("replayBtn").onclick = ()=>{

    location.reload();

};







// ===============================
// BACKGROUND HEARTS
// ===============================

function createBackgroundHeart(){

    const heart=document.createElement("div");

    heart.className="bgHeart";

    heart.innerHTML =
    ["❤️","💕","💖","💗","💘"]
    [Math.floor(Math.random()*5)];


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createBackgroundHeart,700);








// ===============================
// ENVELOPE + TYPING
// ===============================

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letter");

const typingText=document.getElementById("typingText");



envelope.onclick=()=>{


    envelope.style.display="none";


    letter.classList.remove("hidden");


    typeWriter(
    "I made this little surprise just for you... 😊\n\nI hope this makes you smile ❤️\n\nI have something to ask..."
    );


};






function typeWriter(text){

    let i=0;


    let timer=setInterval(()=>{


        if(text[i]=="\n"){

            typingText.innerHTML+="<br>";

        }

        else{

            typingText.innerHTML+=text[i];

        }


        i++;


        if(i>=text.length){

            clearInterval(timer);

        }


    },50);

}







// ===============================
// CONTINUE BUTTON
// ===============================

document.getElementById("continueBtn").onclick=()=>{

    changeScene("questionScene");

};









// ===============================
// NO BUTTON ESCAPE
// ===============================

const noBtn=document.getElementById("noBtn");

const yesBtn=document.getElementById("yesBtn");


let yesScale=1;



function escapeNo(){


    let x=Math.random()*220-100;

    let y=Math.random()*80-40;


    noBtn.style.transform=
    `translate(${x}px,${y}px)`;


    yesScale+=0.08;


    if(yesScale<1.8){

        yesBtn.style.transform=
        `scale(${yesScale})`;

    }

}



noBtn.addEventListener(
"mouseover",
escapeNo
);



noBtn.addEventListener(
"touchstart",
escapeNo
);








// ===============================
// YES CLICK
// ===============================


yesBtn.onclick=()=>{


    changeScene("celebrateScene");


    startGallery();


    celebrateEffects();




    // AUTOPLAY SONG ❤️

    const song=document.getElementById("song");


    song.volume=0.8;


    song.play();

document.getElementById("floatingCountdown")
.style.display="block";



    setTimeout(()=>{


        document.getElementById("countdownPopup")
        .style.display="flex";
    },5000);


   startCountdown();



};


// ===============================
// GALLERY
// ===============================

let images=document.querySelectorAll(".galleryImage");


let currentImage=0;



function startGallery(){


    setInterval(()=>{


        images[currentImage]
        .classList.remove("activeImage");



        currentImage++;



        if(currentImage>=images.length){

            currentImage=0;

        }



        images[currentImage]
        .classList.add("activeImage");



    },3000);


}









// ===============================
// COUNTDOWN
// ===============================

let countdownStarted = false;

function startCountdown(){

    if(countdownStarted) return;

    countdownStarted = true;


    // Meeting time: July 15, 1:00 PM
    const target = new Date("July 15, 2026 13:00:00");



    setInterval(()=>{


        const now = new Date();


        const difference = target - now;



        if(difference <= 0){

            document.getElementById("cornerTimer")
            .innerHTML = "It's time ❤️";

            document.getElementById("countdown")
            .innerHTML = "It's time ❤️";

            return;

        }



        const days = Math.floor(
            difference / (1000*60*60*24)
        );


        const hours = Math.floor(
            (difference % (1000*60*60*24))
            /
            (1000*60*60)
        );


        const minutes = Math.floor(
            (difference % (1000*60*60))
            /
            (1000*60)
        );


        const seconds = Math.floor(
            (difference % (1000*60))
            /
            1000
        );



        const time =
        days + "d "
        +
        hours + "h "
        +
        minutes + "m "
        +
        seconds + "s";



        document.getElementById("cornerTimer")
        .innerHTML = time;


        document.getElementById("countdown")
        .innerHTML = time;



    },1000);

}

// ===============================
// POPUP CLOSE BUTTONS
// ===============================


document.getElementById("closeCountdown")
.onclick=()=>{

    document.getElementById("countdownPopup")
    .style.display="none";

};



document.getElementById("closeSecret")
.onclick=()=>{

    document.getElementById("secretPopup")
    .style.display="none";

};

// MESSAGE BUTTON

const messageBtn = document.getElementById("messageBtn");

const secretPopup = document.getElementById("secretPopup");


messageBtn.onclick = () => {

    secretPopup.style.display = "flex";

};



// CLOSE MESSAGE

const closeSecret = document.getElementById("closeSecret");


closeSecret.onclick = () => {

    secretPopup.style.display = "none";

};





// ===============================
// EXTRA HEARTS AFTER YES
// ===============================

function createHeart(){


    let heart=document.createElement("div");


    heart.className="bgHeart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"vw";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },8000);


}




function openMessage(){

    document.getElementById("secretPopup")
    .style.display = "flex";

}

function closeMessage(){

    document.getElementById("secretPopup")
    .style.display = "none";

}



// ===============================
// CONFETTI + SPARKLES
// ===============================

function celebrateEffects(){


    for(let i=0;i<100;i++){


        let c=document.createElement("div");


        c.className="confetti";


        c.style.background=
        `hsl(${Math.random()*360},100%,70%)`;



        c.style.left="50%";

        c.style.top="50%";



        document.body.appendChild(c);



        let x=(Math.random()-0.5)*600;

        let y=(Math.random()-0.5)*600;



        c.animate([

        {
            transform:"translate(0,0)",
            opacity:1
        },

        {
            transform:`translate(${x}px,${y}px)`,
            opacity:0
        }

        ],

        {

            duration:1500

        });



        setTimeout(()=>{

            c.remove();

        },1500);


    }





    for(let i=0;i<40;i++){


        let s=document.createElement("div");


        s.className="sparkle";


        s.innerHTML="✨";


        s.style.left=
        Math.random()*100+"vw";


        s.style.top=
        Math.random()*100+"vh";


        document.body.appendChild(s);



        setTimeout(()=>{

            s.remove();

        },2000);


    }



}