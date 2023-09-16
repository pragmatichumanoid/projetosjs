addEventListener('DOMContentLoaded',() => {
    let squares = document.querySelectorAll(".square")
 squares.forEach((square) => { square.addEventListener('click', handleClick)
    
 })

})

  function handleClick(event){
    let square = event.target //o target do evento é o elemento que sofreu evento
    let position = square.id // o elemento id que for clicado será a position
    
    if(handleMove(position)){
      setTimeout(() => {
         alert("fim de jogo - player " + playerTime + " venceu a partida")
      },10)
    };
    
    updateSquares();
   
  } 
  
   function updateSquares(){
    let squares = document.querySelectorAll(".square")
 squares.forEach((square) => {
    let position = square.id;
    let symbl = board[position];
    if(symbl != ""){
        square.innerHTML = `<div class='${symbl}'></div>`
    }
 })
   }