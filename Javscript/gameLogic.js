let boxes =  document.querySelectorAll(".box");
let rstBtn = document.querySelector("#strtAgain");
let p = document.querySelector(".display_msg");
let prevTurn = 'O';
let winPat = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
];
let count=0;
    boxes.forEach((box) => {
    box.addEventListener("click" , () => {
            if(prevTurn === 'O'){
                box.innerText = 'X';
                prevTurn = 'X';
                box.disabled = true;
            }else{
                box.innerText = 'O';
                prevTurn = 'O';
                box.disabled = true;
            }
            count++;
      for(let pat of winPat){
            let pos1 = pat[0];
            let pos2 = pat[1];
            let pos3 = pat[2];
            if(boxes[pos1].innerText!="" && boxes[pos2].innerText!="" && boxes[pos3].innerText!=""){
                  if(boxes[pos1].innerText === boxes[pos2].innerText && boxes[pos1].innerText === boxes[pos3].innerText){
                        for(let box of boxes){
                              box.disabled = true;
                        }
                        alert(`Player ${prevTurn}  has won the game :)`);
                        alert('If you wants to play a new game reset it!');
                  }
            }
      }
    });
    if(count==10){
      alert('Game ends with a draw!');
    }
rstBtn.addEventListener("click", () => {
         for(let box of boxes){
            box.disabled = false;
            box.innerText = '';
            p.style.fontSize = "0px";
            count=0;
         }
      });
});
