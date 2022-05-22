
var departments = [
    {
        "title":"Science",
        "campus":"Mirpurkhas",
    },
];


function putData(){
    var tbody = document.querySelector("#tbody");
    departments.forEach((department,index = 1) => {

        var tr = document.createElement('tr');

        var id = document.createElement('td');
        var title = document.createElement('td');
        var dep = document.createElement('td');


        var idVal = document.createTextNode((index + 1).toString());
        var titleVal = document.createTextNode(department.title);
        var depVal = document.createTextNode(department.campus);

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

function addDepartment(){
    var campus = document.querySelector(".dd").value;
    var title = document.querySelector(".field").value;
    departments.push({
        "title":title,
        "campus":campus
    })
    tbody.innerHTML = "";
    putData();
    document.querySelector(".background").style.display = "none";
    document.querySelector(".field").value = "";
}

putData();