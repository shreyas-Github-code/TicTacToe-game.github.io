let trry = new Audio("try.wav")
let gameover=new Audio("gameover.mp3")
let turn = 'x'
let isgameover= false

const changeturn=()=>{
    return turn==='x'?'0':'x'
}

const checkwin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    win.forEach(e=>{

        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won! " + "\nClick on reset for new a game."
            isgameover = true
            gameover.play();
        }
    })

}



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ==='')
        {
            boxtext.innerText = turn;
            turn = changeturn();
            trry.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText ="turn for "+ turn;  
            }          
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
        isgameover = false
        turn='x'
        document.getElementsByClassName('info')[0].innerText ="turn for "+ turn;

    });
})