// Laad

window.onload = function () {
    laadAPI() ;
  };


  function laadAPI() {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://valorant-api.com/v1/agents', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        let valInfo = JSON.parse(xobj.responseText);
        console.log(valInfo);

        

        for (let i = 0; i < 17; i++) {
          console.log(valInfo.data[i].displayName);
          document.getElementById('agent' + i).innerHTML = valInfo.data[i].displayName;
        }
        for (let i = 0; i < 17; i++) {
          document.getElementById('bio' + i).innerHTML = valInfo.data[i].description;
        }

        for (let i = 0; i < 17; i++) {
          document.getElementById('img' + i).src = valInfo.data[i].bustPortrait;
        }

        for (let i = 0; i < 17; i++) {
          document.getElementById('role' + i).innerHTML = valInfo.data[i].role.description;
        }

        // for (let i = 0; i < 17; i++) {
        //   document.getElementById('role' + i).innerHTML = valInfo.data[i].role.description;
        // }



        // console.log(valInfo.data[0].displayName);
        // console.log(valInfo.data[1].displayName);
        // console.log(valInfo.data[2].displayName);
        // console.log(valInfo.data[3].displayName);
        // console.log(valInfo.data[4].displayName);
        // console.log(valInfo.data[5].displayName);
        // console.log(valInfo.data[6].displayName);
        // console.log(valInfo.data[7].displayName);
        // console.log(valInfo.data[8].displayName);
        // console.log(valInfo.data[9].displayName);
        // console.log(valInfo.data[10].displayName);
        // console.log(valInfo.data[11].displayName);
        // console.log(valInfo.data[12].displayName);
        // console.log(valInfo.data[13].displayName);
        // console.log(valInfo.data[14].displayName);
        // console.log(valInfo.data[15].displayName);
        // console.log(valInfo.data[16].displayName);

        
        // document.getElementById('agent1').innerHTML = valInfo.data[0].displayName;
      }
    };
    xobj.send(null);
  }


