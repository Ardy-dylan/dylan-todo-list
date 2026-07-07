const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask() {
    //i'm using trim cuz user can not add a empty task.
    if (inputBox.value.trim() === '') {
        alert("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value.trim();
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
        inputBox.value = '';
        saveData();

}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
 

localStorage.removeItem("data");