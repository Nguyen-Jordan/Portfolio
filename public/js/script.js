let menuVisible = false;
// function show or hide menu
function showHideMenu(){
    if (menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    // Hide after selection
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Function that applies skills animations
function skillEffect(){
    var skills = document.getElementById("skills");
    var skill_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skill_distance >= 300){
        let ability = document.getElementsByClassName("progress");
        ability[0].classList.add("javascript");
        ability[1].classList.add("htmlcss");
        ability[2].classList.add("php");
        ability[3].classList.add("wordpress");
        ability[4].classList.add("react");
        ability[5].classList.add("symfony");
        ability[6].classList.add("sql");
        ability[7].classList.add("github");
        ability[8].classList.add("photoshop");
        ability[9].classList.add("communication");
        ability[10].classList.add("team");
        ability[11].classList.add("creativity");
        ability[12].classList.add("curiosity");
        ability[13].classList.add("independence");
        ability[14].classList.add("stiff");
        ability[15].classList.add("patient");
        ability[16].classList.add("organised");
        ability[17].classList.add("versatile");
    }
}
//  detect the scrolling to apply the animation of the skills bar
window.onscroll = function (){
    skillEffect();
}