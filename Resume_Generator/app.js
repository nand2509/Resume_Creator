function addNewSKField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let weOb = document.getElementById("sk");
    let weAddButtonOb = document.getElementById("skAddButton");
    // weOb.insertBefore(newNode,weAddButtonOb);

    weOb.insertBefore(newNode,weAddButtonOb);
}


function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    // weOb.insertBefore(newNode,weAddButtonOb);

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    // weOb.insertBefore(newNode,weAddButtonOb);

    aqOb.insertBefore(newNode,aqAddButtonOb);
    

}


// Generate CV Function
 function  generateCV(){
     let nameField = document.getElementById("nameField").value;
     let nameT1 = document.getElementById("nameT");
     nameT1.innerHTML = nameField;
//direct
     document.getElementById("nameT2").innerHTML = nameField;

     //contact
     document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;

     //address

     document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;

     document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
     document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;
     document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;

     //Skills


     let wesk = document.getElementsByClassName("skField");

     let str2 = "";

     for(let e of wesk){
         str2 = str2 + `<li> ${e.value} </li>`;
     }

     document.getElementById("skT").innerHTML=str2;


     //objective

     document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

     //expereince

     let wes = document.getElementsByClassName("weField");

     let str = "";

     for(let e of wes){
         str = str+`<li> ${e.value} </li>`;
     }

     document.getElementById("weT").innerHTML=str;

     //Academic Qualification

     let aqs = document.getElementsByClassName("eqField");

     let str1 = "";

     for(let e of aqs){
         str1+=`<li> ${e.value} </li>`;
     }

     document.getElementById("aqT").innerHTML=str1;

     document.getElementById('cv-form').style.display='none';
     document.getElementById('cv-template').style.display='block';

}

// Print CV Function
 function printCV(){
     window.print();
 }