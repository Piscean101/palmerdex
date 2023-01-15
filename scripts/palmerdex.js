

// api-key: E9CKeW2KIYsljTQtrZIYco4K0SHqCtq8zNMUfiAyCWbiX0aYQs secret-key: UcKewmRN8eTucsM3iEiT8LYSpey1ZpgVnBpjij9G7gORmF2kax
/* var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'E9CKeW2KIYsljTQtrZIYco4K0SHqCtq8zNMUfiAyCWbiX0aYQs',
  consumer_secret: 'UcKewmRN8eTucsM3iEiT8LYSpey1ZpgVnBpjij9G7gORmF2kax',
  token: 'ZH06ysHE7ZNSdsAR2koC8Btvv6QYUkGCwQJ1A0AuihaRCyQ2xj',
  token_secret: '2DAZKtWpqUljDHEeuOnL1y5t7YuSjQVj3BQUnbvLrDZTSsWVMV'
});

client.blogPosts('drepalmz.tumblr.com', { type: 'photo' }, function (err, data) {
    
}); */ 

$("#submit").on('click', () => {
  document.getElementById('icon2').src = '';
  document.getElementById('ab1').innerHTML = "";
  document.getElementById('ab2').innerHTML = "";
  document.getElementById('ab3').innerHTML = "";
  document.getElementById('pls').innerHTML = "";
  var w = document.getElementById('search').value;
  var x = w.toLowerCase();
  document.getElementById('species').value = x;
  var url = "https://img.pokemondb.net/sprites/sword-shield/icon/" + x + ".png";
  document.getElementById('display').src = url;
  document.getElementById('species').innerHTML = x;
  fetch("https://pokeapi.co/api/v2/pokemon/"+x)
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
  var secondary = (data.abilities[1].ability.name).replace('-','')
  
  document.getElementById('primary').href = `https://www.serebii.net/abilitydex/${primary}.shtml`;
  
  if (data.abilities.length == 2) {
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
