document.addEventListener("keypress", function(event) {
    if (event.key === "+") {
        var x = document.createElement("script");
        x.src = "/js/dtscript.js";
        x.onload = function() {
            alert("Loaded Developer Console!");
        };
        document.head.appendChild(x);
    }
});