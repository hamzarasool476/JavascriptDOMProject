// DOM Selection

const title = document.getElementById("title");
const input = document.getElementById("inputBox");
const changeBtn = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const resetBtn = document.getElementById("resetBtn");
const list = document.getElementById("list");
const message = document.getElementById("message");

// Change Heading

changeBtn.addEventListener("click", () => {

    if(input.value===""){
        message.textContent="Please enter your name!";
        return;
    }

    title.textContent = "Welcome " + input.value + "!";
    message.textContent="Heading Updated Successfully";
});

// Change Background

colorBtn.addEventListener("click",()=>{

    const colors=[
        "#FDEDEC",
        "#D6EAF8",
        "#D5F5E3",
        "#FCF3CF",
        "#EBDEF0",
        "#F9E79F"
    ];

    const random=Math.floor(Math.random()*colors.length);

    document.body.style.backgroundColor=colors[random];

});

// Add List Item

addBtn.addEventListener("click",()=>{

    if(input.value===""){
        message.textContent="Type something first!";
        return;
    }

    const li=document.createElement("li");

    li.textContent=input.value;

    list.appendChild(li);

    input.value="";

    message.textContent="New Item Added";

});

// Remove Last Item

removeBtn.addEventListener("click",()=>{

    if(list.children.length>0){

        list.removeChild(list.lastElementChild);

        message.textContent="Last Item Removed";

    }

});

// Reset Page

resetBtn.addEventListener("click",()=>{

    title.textContent="JavaScript DOM Practice Set";

    input.value="";

    document.body.style.background="#f5f5f5";

    message.textContent="Page Reset";

    while(list.children.length>3){

        list.removeChild(list.lastElementChild);

    }

});

// Keyboard Event

input.addEventListener("keyup",(event)=>{

    message.textContent="You typed: " + event.target.value;

});