const teamList = document.querySelector("table");

fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let teamArray = json.teams;
    displayData(teamArray);
    console.log(teamArray);
    
    
    // console.log(json);

})
.catch(function(error){
    console.log(error);
});
function displayData(teamArray) {
    for(i=0; i<teamArray.length; i++) {
        let heading = document.createElement('tr');
        let teamName = document.createElement('td');
        let teamCity = document.createElement('td');
        let teamLogo = document.createElement('td');
        let img = document.createElement('img');


        teamName.innerText = teamArray[i].strSport;
        teamCity.innerText = teamArray[i].strStadiumLocation;
        img.src= teamArray[i].strTeamLogo;
        img.height=200;
        img.width=200;
        console.log(teamList);

        teamLogo.appendChild(img);
        heading.appendChild(teamName);
        heading.appendChild(teamCity);
        heading.appendChild(teamLogo);
        teamList.appendChild(heading);
    }
};
