/* NOTE: 
  XMLHttpRequest is part of client-side/browser-oriented Javascript Web API.
  NOT RUNNING AJAX
*/

var data = [];
  
  function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        data = JSON.parse(this.responseText);
        console.log(data);

        let flags = '';
        let start = "<ul class='country-flags'>";
        data.forEach(function(d) {
          flags += "<li><div class='country-flag'><img src='" + d.countryInfo.flag + "' width='86px' height='50px' title='" + d.country 
          // + "' &#13;Today's Cases: '" 
          // + d.todayCases 
          // + "' &#13;Today's Deaths: '" 
          // + d.todayDeaths 
          + "'></div></li>";
        });
        
        // data.forEach(function(d) {
        //   flags += "<li><div class='country-flag'><img src='" + d.countryInfo.flag + "' width='172px' height='100px' title='" + d.country + "'></div></li>";
        // });
        let end = "</ul>";

        // console.log(flags);
        document.getElementById("flags").innerHTML = start + flags + end;           

      }
    };

    xhttp.open("GET", "https://corona.lmao.ninja/v2/countries", true);
    xhttp.send();

  }