function addAQ(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addProject(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Here");

    let projectOb = document.getElementById("project");
    let projectAddButtonOb = document.getElementById("projectAddButton");

    projectOb.insertBefore(newNode, projectAddButtonOb);
}

function addHobby(){
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("hobbiesField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Here");

    let hobbiesOb = document.getElementById("hobbies");
    let hobbyAddButtonOb = document.getElementById("hobbiesAddButton");

    hobbiesOb.insertBefore(newNode, hobbyAddButtonOb);
}

function addSkill(){
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Here");

    let skillsOb = document.getElementById("skills");
    let skillAddButtonOb = document.getElementById("skillsAddButton");

    skillsOb.insertBefore(newNode, skillAddButtonOb);
}

function generateCV(){

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function(){
        document.getElementById("profile").src = reader.result;
    };

    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
      document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let hob = document.getElementsByClassName("hobbiesField");
    let str = "";
    for(let e of hob){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("hobbiesT").innerHTML = str;


    let aq = document.getElementsByClassName("aqField");
    let str1="";
    for(let e of aq){
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById("aqT").innerHTML = str1;


    let sk = document.getElementsByClassName("skillsField");
    let str2="";
    for(let e of sk){
        str2 = str2 + `<li> ${e.value} </li>`
    }
    document.getElementById("skillsT").innerHTML = str2;


    let pr = document.getElementsByClassName("projectField");
    let str3="";
    for(let e of pr){
        str3 = str3 + `<li> ${e.value} </li>`
    }
    document.getElementById("projectT").innerHTML = str3;


    document.getElementById("cvForm").style.display = "none";
    document.getElementById("cvTemplate").style.display = "block";
}

function printCV(){
    window.print();
    print();
}
