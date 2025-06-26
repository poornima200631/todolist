var i = 0;
var completed = 0;

function addlist() {
    i++;
    const val = document.getElementById("b").value;
    const li = document.createElement("li");
    li.textContent = val;

    li.classList.add("js");
    document.getElementById("task").appendChild(li);

    const tick = document.createElement("input");
    tick.type = "checkbox";
    li.appendChild(tick);

    document.getElementById("b").value = "";


    count(); 

    tick.addEventListener("change", () => {
        if (tick.checked) {
            completed++;
        } else {
            completed--;
        }
        count(); 
    });
}

function count() {
    document.getElementById("d").innerHTML = `Total Task: ${i} &nbsp;&nbsp;&nbsp; Completed Task: ${completed}`;
}