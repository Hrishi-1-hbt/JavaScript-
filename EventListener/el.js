// EVENT Listeners - Listen for specific eveents to create interactive web pagesw
//                   events: click ,mouseover , mouseout
//                   .addEventListener(event,arraow function);

            // const myBox = document.getElementById("myBox");
            // const Mybtn = document.getElementById("Mybtn");
            // // function changeColor(event){
            // //         event.target.style.backgroundColor ="tomato";
            // //         event.target.textContent="OUCH!😶‍🌫️";

            // // }
            // myBox.addEventListener("click",event=>{
            //         event.target.style.backgroundColor ="tomato";
            //         event.target.textContent="OUCH!😶‍🌫️";
            // });

            // myBox.addEventListener("mouseover",event=>{
            //         event.target.style.backgroundColor ="yellow";
            //         event.target.textContent="don't do it 😬";
            // });
            // myBox.addEventListener("mouseout",event=>{
            //         event.target.style.backgroundColor ="lightgreen";
            //         event.target.textContent=" Click Me😉";
            // });

//event listner - Listen for specific events to create interactive web
//                 web pages
//                  events : keydown keyup
//                  document.addEventListener(event, callback);

            // const myBox =document.getElementById("myBox") ;

            // document.addEventListener("keydown",event =>{
            //     myBox.textContent="🤖";
            //     // myBox.style.backgroundColor ="tomato"
                

            // })

            // document.addEventListener("keyup",event =>{
            //     myBox.textContent="☠️";
            //     // myBox.style.backgroundColor ="tomato"
            // })
//-------------------------EXAMPLE 2 ------------------------------------------------------------
const myBox =document.getElementById("myBox") ;
const moveAmount = 100;
let x=0;
let y =0;

document.addEventListener("keyup",event =>{
    myBox.textContent="☠️";
    // myBox.style.backgroundColor ="tomato"
})
document.addEventListener("keydown",event =>{
        myBox.textContent="🤖";
        // myBox.style.backgroundColor ="tomato"
        

    })

    


document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault()
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
              case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
         } 
         myBox.style.top =`${y}px`;
         myBox.style.left =`${x}px`;
        //  myBox.style.top =`${y}px`;
        //  myBox.style.top =`${y}px`;

    }
})
