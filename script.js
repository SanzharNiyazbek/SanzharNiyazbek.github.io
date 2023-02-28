let Teams = [
{
  name: 'Dallas Mavericks',
  favPlayer: 'Luka Doncic',
  titles: 0,
  
},
{
  name: 'Los Angeles Lakers',
  favPlayer: 'LeBron James',
  titles: 4,
}, 
{
  name: 'Chicago Bulls',
  favPlayer: 'Michel Jordan',
  titles: 6,
}
]



for (let i = 0; i < Teams.length; i++) {
  document.write("<h5>Team: " + Teams[i]["name"] + "</h5>");
  document.write("<h5>Favourite player: " + Teams[i]["favPlayer"] + "</h5>");
  document.write("<h5>Titles: " + Teams[i]["titles"] + "</h5>");
  document.writeln("")
}

function most_s(Teams) {
    s = 0;
    for(let i = 0; i < 4; i++){
        s += Teams[i]['titles'];
    }
    return s;
}

function best_team(Teams){
    return Teams[0]
}

document.write("<h5>most_s: " + most_s(Teams) / 4 + " gold</h5>")



