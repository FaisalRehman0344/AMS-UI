
var designations = [
    {
        "title":"Junier Lecturer",
        "department":"Science",
    },
];


function putData(){
    var tbody = document.querySelector("#tbody");
    designations.forEach((designation,index = 1) => {

        var tr = document.createElement('tr');

        var id = document.createElement('td');
        var title = document.createElement('td');
        var dep = document.createElement('td');


        var idVal = document.createTextNode((index + 1).toString());
        var titleVal = document.createTextNode(designation.title);
        var depVal = document.createTextNode(designation.department);

        id.appendChild(idVal);
        title.appendChild(titleVal);
        dep.appendChild(depVal);

        id.style.fontWeight = "bold";

        tr.appendChild(id);
        tr.appendChild(title);
        tr.appendChild(dep);

        tbody.appendChild(tr);
    });
}

function addDesignation(){
    var dep = document.querySelector(".dd").value;
    var title = document.querySelector(".field").value;
    designations.push({
        "title":title,
        "department":dep
    })
    tbody.innerHTML = "";
    putData();
    document.querySelector(".background").style.display = "none";
    document.querySelector(".field").value = "";
}

putData();