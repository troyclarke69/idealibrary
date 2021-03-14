function onLoad() {
    document.getElementById("root").innerHTML = "<h1>Here</h1>";
    color();
}

function color() {
    var root = document.getElementById("root");

    for (var r = 0; r < 256; r++) {
        for (var g = 0; g < 256; g++) {
            for (var b = 0; b < 256; b++) {
                console.log('loop')
                root.style.backgroundColor = "rgba(" + r +"," + g + "," + b + ", 1)";
            }
        }
    }
}

function myFunction() {
    var x = document.getElementById("root");
    x.style.color = "red";
  }