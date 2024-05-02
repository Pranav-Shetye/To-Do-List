let task = document.querySelector("#task");
let tasklist = document.querySelector("#tasklist");

task.addEventListener(
    "keypress",function(e){
        if(e.key == "Enter"){
            addTask(this.value);
            this.value = "";
        }
    }
)

let addTask = (task)=>{
    let listtask = document.createElement("li");
    listtask.innerHTML=`${task}  <span>✖</span>`;
    tasklist.appendChild(listtask);

    listtask.querySelector("span").addEventListener(
        "click",function(){
            listtask.remove();
        }
    )
}