
var employees = [
    {
        "firstname":"Faisal Rehman",
        "lastname":"Arain",
        "email":"faisalarain737@gmail.com",
        "password":"12345",
        "gender":"Male",
        "username":"engineerfaisal",
        "role":"ADMIN",
        "address":"Mirpurkhas",
        "designation":"Junier Lecturer",
        "campus":"Mirpurkhas",
    },
];


function putData(){
    var tbody = document.querySelector("#tbody");
    employees.forEach((employee,index = 1) => {

        var tr = document.createElement('tr');

        var id = document.createElement('td');
        var fname = document.createElement('td');
        var lname = document.createElement('td');
        var email = document.createElement('td');
        var password = document.createElement('td');
        var username = document.createElement('td');
        var gender = document.createElement('td');
        var role = document.createElement('td');
        var address = document.createElement('td');
        var designation = document.createElement('td');
        var campus = document.createElement('td');

        var idVal = document.createTextNode((index + 1).toString());
        var fnameVal = document.createTextNode(employee.firstname);
        var lnameVal = document.createTextNode(employee.lastname);
        var emailVal = document.createTextNode(employee.email);
        var passwordVal = document.createTextNode(employee.password);
        var usernameVal = document.createTextNode(employee.username);
        var genderVal = document.createTextNode(employee.gender);
        var roleVal = document.createTextNode(employee.role);
        var addressVal = document.createTextNode(employee.address);
        var designationVal = document.createTextNode(employee.designation);
        var campusVal = document.createTextNode(employee.campus);


        id.appendChild(idVal);
        fname.appendChild(fnameVal);
        lname.appendChild(lnameVal);
        email.appendChild(emailVal);
        password.appendChild(passwordVal);
        username.appendChild(usernameVal);
        gender.appendChild(genderVal);
        role.appendChild(roleVal);
        address.appendChild(addressVal);
        designation.appendChild(designationVal);
        campus.appendChild(campusVal);

        id.style.fontWeight = "bold";

        tr.appendChild(id);
        tr.appendChild(fname);
        tr.appendChild(lname);
        tr.appendChild(gender);
        tr.appendChild(email);
        tr.appendChild(username);
        tr.appendChild(password);
        tr.appendChild(role);
        tr.appendChild(address);
        tr.appendChild(designation);
        tr.appendChild(campus);

        tbody.appendChild(tr);
    });
}

function addEmployee(){
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var username = document.querySelector("#username").value;
    var role = document.querySelector("#role").value;
    var address = document.querySelector("#address").value;
    var designation = document.querySelector("#desig").value;
    var campus = document.querySelector("#campus").value;
    var gender = document.querySelector("#gender").value;

    employees.push({
        "firstname":fname,
        "lastname":lname,
        "email":email,
        "password":password,
        "gender":gender,
        "username":username,
        "role":role,
        "address":address,
        "designation":designation,
        "campus": campus,
    })
    
    tbody.innerHTML = "";
    putData();
    document.querySelector(".background").style.display = "none";
    document.querySelector("#fname").value = "";
    document.querySelector("#lname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#role").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#desig").value = "";
    document.querySelector("#campus").value = "";
    document.querySelector("#gender").value = "";
}

putData();