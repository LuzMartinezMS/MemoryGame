//to create random numbers and define variables
let random1= Math.floor((Math.random() * 100) + 1);
let random2= Math.floor((Math.random() * 100) + 1);
let random3= Math.floor((Math.random() * 100) + 1);
let random4= Math.floor((Math.random() * 100) + 1);
var randoms= [random1,random1,random2,random2,random3,random3,random4,random4]
let matchCounter = 0;
let c1;
let c2;



//to bring the cards
let cards= document.querySelectorAll(".card")



if(!location.href.includes("index.html")){
    document.getElementById("playerText").innerText= ( localStorage.getItem('name') + " you are the best player!");
}



//to mix the randoms
function mix (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

  }
mix(randoms)

  



  //API
  let images=[]
  let pokemon;

randoms.forEach((random)=>{
    fetch( `https://pokeapi.co/api/v2/pokemon/${random}/ `, {
    method: "GET" 
}).then((res) => res.json()).then(data =>{
    pokemon = data
    images.push(pokemon.sprites.front_default)
    
} )
} )


//To define the game
cards.forEach((card) => {
    card.addEventListener('click', function() {
        
        if (!c1 && !c2) {
            card.classList.add('cardfront');
            c1=images[card.id[6]]
            card.innerHTML='<img src='+images[card.id[6]]+'>'
            
            

        } else if (c1 && !c2) {
            
            card.classList.add('cardfront');
            c2=images[card.id[6]]
            card.innerHTML='<img src='+images[card.id[6]]+'>'
    
         
            if (c1 == c2) {
                listacartasabiertas = document.querySelectorAll(".cardfront")
                listacartasabiertas[0].classList.replace('cardfront','cardback');
                listacartasabiertas[1].classList.replace('cardfront','cardback');
                c1 = null;
                c2 = null;
               matchCounter++;
               if (matchCounter >= 4) setTimeout(() => alert('You Win!'), 1000 );
            } else {

                setTimeout(() => {
                    c1 = null;
                    c2 = null;
                    listacartasabiertas = document.querySelectorAll(".cardfront")
                    listacartasabiertas = document.querySelectorAll(".cardfront")
                    listacartasabiertas[0].innerText=""
                    listacartasabiertas[1].innerText=""
                    listacartasabiertas[0].classList.remove('cardfront');
                    listacartasabiertas[1].classList.remove('cardfront');
                },  1000);

            }
        }

    })
});





//to start the game
function game(){
   
    localStorage.setItem('name',document.getElementById('input').value)
    location.href="./indexGame.html"
  }


  //to reset the game
  function reset(){
    location.href="./indexGame.html"
  }



// to go home
  function Home(){
    location.href="./index.html"
  }



