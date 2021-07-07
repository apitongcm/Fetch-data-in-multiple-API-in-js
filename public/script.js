

console.log('Your script is working !!! ');



document.querySelector('#btnLoad').addEventListener('click',() => {
    getPokemonName();
    getPokeImg();
});


async function getPokemonName(){ //fetching  pokemon name from the backend
    const response = await fetch('/pokemon');
    const data = await response.json();
    let length = 0; 
    for(let key in data){
        if(data.hasOwnProperty(key)){
            length++;
        }
    }
    let num = Math.floor(Math.random() * 890);
    let pokeName = data[num].name;
    console.log(pokeName);
    var caption = document.querySelector('#caption');
    caption.innerHTML = pokeName;
    document.body.appendChild(caption);
    
    
    
    
    
}

async function getPokeImg() {  // fetching pokemon image from the backend
    const response = await fetch('/pokeImage');
    const data = await response.json()
    let pokeImg = data.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl;
    console.log(pokeImg);
    document.getElementById("image").src = pokeImg;
    
}


