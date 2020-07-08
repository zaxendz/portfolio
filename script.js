const about = document.querySelectorAll(".link")[0];
const projects = document.querySelectorAll(".link")[1];
const contact = document.querySelectorAll(".link")[2];
const span1 = document.querySelector(".center").querySelectorAll("span")[0];
const span2 = document.querySelector(".center").querySelectorAll("span")[1];
const center = document.querySelector(".center");
const p = center.querySelector("p");

about.addEventListener("click", visitedAbout);
projects.addEventListener("click", visitedProjects);
contact.addEventListener("click", visitedcontact);
center.addEventListener("mouseover", opacity);
center.addEventListener("mouseout", opacityfade);




function visitedAbout() {
    remove();
    about.style.cssText = "background-color: var(--main-orange);";
    setTimeout(opacityno, 3000);
    
}

function visitedProjects() {
    remove();
    projects.style.cssText = "background-color: var(--main-orange);";
}
function visitedcontact() {
    remove();
    contact.style.cssText = "background-color: var(--main-orange);";
}
function remove() {
    about.style.cssText = "background-color: ;";
    projects.style.cssText = "background-color: ;";
    contact.style.cssText = "background-color: ;";
}
// hover
function opacity() {
    span1.style.cssText = "animation-name:opa;animation-duration:1.5s;animation-fill-mode:forwards;"
    span2.style.cssText = "animation-name:opa;animation-duration:1.5s;animation-fill-mode:forwards;"
    p.style.cssText = "animation-name:opa;animation-duration:1.5s;animation-fill-mode:forwards;"
}
function opacityfade() {
    span1.style.cssText = "animation-name:opa1;animation-duration:1.5s;animation-fill-mode:forwards;"
    span2.style.cssText = "animation-name:opa1;animation-duration:1.5s;animation-fill-mode:forwards;"
    p.style.cssText = "animation-name:opa1;animation-duration:1.5s;animation-fill-mode:forwards;"
}
// click
function clickopa() {
    span1.style.cssText = "animation-name:opa3;animation-duration:3s;animation-fill-mode:forwards;"
    span2.style.cssText = "animation-name:opa3;animation-duration:3s;animation-fill-mode:forwards;"
    p.style.cssText = "animation-name:opa3;animation-duration:3s;animation-fill-mode:forwards;"
}
function opacityno() {
    span1.style.cssText = "animation-name: ;"
    span2.style.cssText = "animation-name: ;"
    p.style.cssText = "animation-name: ;"
}