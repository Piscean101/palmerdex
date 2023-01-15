$("#submit").on('click', () => {
  document.getElementById('icon2').src = '';
  document.getElementById('ab1').innerHTML = "";
  document.getElementById('ab2').innerHTML = "";
  document.getElementById('ab3').innerHTML = "";
  document.getElementById('pls').innerHTML = "";
  var w = document.getElementById('search').value;
  var x = w.toLowerCase();
  var z = x.replace(' ', '');
  document.getElementById('species').value = z;
  var url = "https://img.pokemondb.net/sprites/sword-shield/icon/" + z + ".png";
  document.getElementById('display').src = url;
  document.getElementById('species').innerHTML = z;
  console.log(z);
  console.log(w);
  fetch("https://pokeapi.co/api/v2/pokemon/"+z)
  .then(res => {
    return res.json();
  })
  .then(data => {
    // typing 
    one = (data.types[0].type.name);
    document.getElementById('icon1').src = "https://www.serebii.net/pokedex-bw/type/"+one+".gif";
    if (data.types.length > 1) {
      two = (data.types[1].type.name)
      document.getElementById('icon2').src = "https://www.serebii.net/pokedex-bw/type/"+two+".gif";
    }
    // abilities
    document.getElementById('ab1').innerHTML = (data.abilities[0].ability.name)
    
    if (data.abilities.length == 2) {
    document.getElementById('ab3').innerHTML = (data.abilities[1].ability.name)
    }
    else if (data.abilities.length == 3) {
      document.getElementById('ab2').innerHTML = (data.abilities[1].ability.name)
      document.getElementById('ab3').innerHTML = (data.abilities[2].ability.name)
    }

  var primary = (data.abilities[0].ability.name).replace('-','')
  
  document.getElementById('primary').href = `https://www.serebii.net/abilitydex/${primary}.shtml`;
  
  if (data.abilities.length == 2) {
    var secondary = (data.abilities[1].ability.name).replace('-','')
    document.getElementById('hidden').href = `https://www.serebii.net/abilitydex/${secondary}.shtml`;
  } else if (data.abilities.length == 3) {
    var h = (data.abilities[2].ability.name).replace('-','')
    document.getElementById('secondary').href = `https://www.serebii.net/abilitydex/${secondary}.shtml`
    document.getElementById('hidden').href = `https://www.serebii.net/abilitydex/${h}.shtml`
  } 
}).catch(() => {
  document.getElementById('display').src = "https://hotemoji.com/images/dl/1/question-mark-emoji-by-twitter.png";
  document.getElementById('primary').href = ``;
  document.getElementById('ab2').innerHTML = `Please be serious`;
})
})
