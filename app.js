let savedList = ()=>{
    localStorage.setItem("myStore", listContainer.innerHTML);
}

let forms = document.forms;

//Add TASK
forms[0].addEventListener("submit", (e)=>{
    e.preventDefault();
    let add = forms[0].querySelector("input");
    let list = document.createElement("li");
    let title = document.createElement("span");
    let dlt = document.createElement("span");
    list.appendChild(title);
    list.appendChild(dlt);
    title.classList.add("name");
    dlt.classList.add("delete");
    dlt.textContent = "delete"
    let listContainer = document.querySelector("#book-list ul");
   ;

    if(add.value === ""){
        alert("Add a task");
    }else{
        listContainer.appendChild(list);
    title.textContent = add.value ;
    add.value = "";
    savedList();
    };
})

//Remove TASK

let listContainer = document.querySelector("#book-list ul");
listContainer.addEventListener("click", (e)=>{
    if(e.target.className === "delete"){
        let list = e.target.parentNode;
        listContainer.removeChild(list);
        savedList();
    }
});

//Hide Task
forms[1].querySelector("#hide").addEventListener("change", (e)=>{
    if(e.target.checked){
        listContainer.style.display = "none";
    }else{
        listContainer.style.display = "block";
    }
});

let retrieveList = ()=>{
    listContainer.innerHTML = localStorage.getItem("myStore");
}

retrieveList();