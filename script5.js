//This is the loading screen to load up the website's assets

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("#loader").style.visibility = "visible";
        //document.querySelector("#loader").style.display = "none";
    } else {
        setTimeout(()=>{
            document.querySelector("#loader").style.display = "none";
    }, 3000)
    }
};