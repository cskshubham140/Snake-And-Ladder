let players = new Map([
    ["A", 0],
    ["B", 0],
    ["C", 0],
    ["D", 0]
  ]);
let ladder = new Map([
    [2, 23],
    [8, 34],
    [20, 77],
    [32, 68],
    [41, 79],
    [74, 88],
    [85, 95],
    [82, 100]
  ]);
let snakes = new Map([
    [97, 25],
    [92, 70],
    [86, 54],
    [62, 37],
    [53, 33],
    [47, 5],
    [38, 15],
    [29, 9]
  ]);
  let images = ["dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg"]
    let die = document.getElementById("die")
const grid = document.querySelector('.grid')



function reload(){
  document.location.reload(true)
}
//create board
function createBoard(){
// game array with random bombs

let gameArray = []
let squares=[]
for (let i =0;i<10; i++){
gameArray[i]=[]

for(let j= 0; j < 10; j++){
    gameArray[i][j]='valid'
   
}
}



for(let i= 9; i>=0; i--){
squares[i]=[]
if(i%2==0){
    for(let j = 0; j<10; j++){
        squares[i][j] = document.createElement('div')
        adr = i.toString() + j.toString()
        squares[i][j].setAttribute('id',parseInt(adr))
        
        squares[i][j].classList.add(gameArray[i][j])
        grid.appendChild(squares[i][j])
       
    }
}
else{
    for(let j = 9; j>=0; j--){
        squares[i][j] = document.createElement('div')
        adr = i.toString() + j.toString()
        squares[i][j].setAttribute('id',parseInt(adr))
        
        squares[i][j].classList.add(gameArray[i][j])
        grid.appendChild(squares[i][j])
        
    }

}
}         
             
console.log(squares)

}

let k,v
let a=1

function roll(value, key) {
let dt=0
setTimeout(function(){
  
      die.classList.remove("shake")
 
      let dice = Math.floor(Math.random() * 6)
  
 
 
  die.setAttribute("src", images[dice])
  document.querySelector("#total").innerHTML = "Player "+key+" Your roll is " + ( (dice +1) )
    dt = players.get(key)+dice+1
console.log(dice+1)
console.log(dt)
if (dt<=100){
console.log(key + " = " + value)
   if (document.getElementsByClassName(key).length) {
      ele = document.getElementById(players.get(key)-1)
      console.log(ele)
      ele.classList.remove(key)
      //alert("exist")
    }
players.set(key,dt)

idval=players.get(key)



if(ladder.has(idval)){
  idval= ladder.get(idval)
  players.set(key,idval)
}
else if(snakes.has(idval)){
  idval= snakes.get(idval)
  players.set(key,idval)
}
el = document.getElementById(idval-1)

el.classList.add(key)
if(dt==100){
  alert("Player "+key+" won !!!")
  document.location.reload(true)

}
}
else if (dt>100){
return
}

},
1000
)



}
function doIt() {
  
die.classList.add("shake")

if (a==1){
k="A"
document.getElementById("b1").innerHTML="Player B's Turn"
v=players.get(k)
a+=1
}
else if (a==2){
k="B"
document.getElementById("b1").innerHTML="Player C's Turn"
v=players.get(k)
a+=1
}
else if (a==3){
k="C"
document.getElementById("b1").innerHTML="Player D's Turn"
v=players.get(k)
a+=1
}
else if (a==4){
  k="D"
  document.getElementById("b1").innerHTML="Player A's Turn"
  v=players.get(k)
  a=1
  }
roll(v,k)

}



