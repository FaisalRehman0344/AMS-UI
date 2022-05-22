

var attendances = [
    {
        "name":"Faisal Rehman",
        "date": new Date().toLocaleDateString()
    },
];


function putData(){
    var tbody = document.querySelector("#tbody");
    attendances.forEach((attendance,index = 1) => {

        var tr = document.createElement('tr');

        var id = document.createElement('td');
        var name = document.createElement('td');
        var date = document.createElement('td');


        var idVal = document.createTextNode((index + 1).toString());
        var titleVal = document.createTextNode(attendance.name);
        var dateVal = document.createTextNode(attendance.date);

        id.appendChild(idVal);
        name.appendChild(titleVal);
        date.appendChild(dateVal);

        id.style.fontWeight = "bold";

        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(date);

        tbody.appendChild(tr);
    });
}

function addAttendance(){
    var date = document.querySelector("#dd").value;
    var title = document.querySelector("#field").value;
    attendances.push({
        "name":title,
        "date":date
    })
    tbody.innerHTML = "";
    putData();
    document.querySelector(".background").style.display = "none";
}

putData();