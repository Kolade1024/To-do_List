let listContainer = document.querySelector("#book-list ul");

let savedList = ()=>{
    localStorage.setItem("myStore", listContainer.innerHTML);
};



let forms = document.forms;
let mainCont = document.querySelector(".app");
let nameText = document.querySelector(".app h1 span");

//NAME PROMPT
const textBox = prompt("Enter Your Name");
nameText.textContent = document.cookie.split("=")[1];

if (nameText.textContent===""){
    textBox;
    nameText.textContent = textBox;
}
/* const name = "cookiename";
const value = nameText.textContent;
const expires = "expires= 23 Nov 2023 12:00:00 UTC";
document.cookie = name + "=" + value + ";" + expires + ";path=/"; */



// ADDING CATEGORIES

// PERSONAL
let per = forms[0].querySelector(".personal");
per.addEventListener("click", (e)=>{
    e.preventDefault();
    e.target.setAttribute("id","cform");
    bus.removeAttribute("id");
});

//BUSINESS
let bus = forms[0].querySelector(".business");
bus.addEventListener("click", (e)=>{
    e.preventDefault();
    e.target.setAttribute("id","cform");
    per.removeAttribute("id");
});


//Add TASK
forms[1].addEventListener("submit", (e)=>{
    e.preventDefault();
    let add = forms[1].querySelector("input");
    let list = document.createElement("li");

    
/*     if(per.attributes.id.value==="cform"){
    list.classList.add("Per");
}else if(bus.attributes.id.value==="cform") {
    list.classList.add("Biz");
}; */

    let title = document.createElement("span");
    let editor = document.createElement("span");
    let edt = document.createElement("i");
    let dlt = document.createElement("i");
    list.appendChild(title);
    editor.appendChild(edt);
    editor.appendChild(dlt);
    list.appendChild(editor);
    title.classList.add("name");
    editor.classList.add("editor");
    dlt.setAttribute("class", "fa")
    dlt.setAttribute("id", "delete");
    dlt.classList.add("fa-trash")
    dlt.setAttribute("aria-hidden", "true")
    edt.setAttribute("class", "fa")
    edt.setAttribute("id", "et");
    edt.classList.add("fa-pencil")
    edt.setAttribute("aria-hidden", "true")
   
    

    if(add.value === "" ){
        alert("Add a task");
    }else if(add.value !== "" && !(per.hasAttribute("id")||bus.hasAttribute("id"))){
        alert("Add Category");
    }else if(per.hasAttribute("id")){
        list.classList.add("Per");
        listContainer.appendChild(list);
    title.textContent = add.value ;
    add.value = "";
    per.removeAttribute("id");
    savedList();
    

    }else if(bus.hasAttribute("id")){
        list.classList.add("Biz");
        listContainer.appendChild(list);
    title.textContent = add.value ;
    add.value = "";
    bus.removeAttribute("id");
    savedList();
    
    }
})




//Remove TASK
listContainer.addEventListener("click", (e)=>{
    if(e.target.getAttribute("id") === "delete"){
        let list2 = e.target.parentNode.parentNode;
        listContainer.removeChild(list2);
        savedList();
    }
}); 

// Edit Task
 listContainer.addEventListener("click", (e)=>{
    if(e.target.getAttribute("id") === "et"){
        let list3 = e.target.parentNode.previousSibling;
        list3.classList.toggle("editTsk");
        list3.contentEditable = true ;
        savedList();
    }
}); 

//Hide Task
forms[2].querySelector("#hide").addEventListener("change", (e)=>{
    if(e.target.checked){
        listContainer.style.display = "none";
    }else{
        listContainer.style.display = "block";
    }
});



let retrieveList = ()=>{
    listContainer.innerHTML = localStorage.getItem("myStore");
};


retrieveList();