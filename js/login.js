arr_employee = JSON.parse(localStorage.getItem('Employee'));
console.log(arr_employee)
var f = false;
window.addEventListener('load', function () {
    var usernameinput = document.getElementById("username");
    var passwordinput = document.getElementById("password");
    var invalid_text = document.getElementById("invalid");
    var invalid_text_user = document.getElementById("invalid_user");
    var invalid_text_password = document.getElementById("invalid_password");
    invalid_text.style.display = "none";
    invalid_text_user.style.display = "none";
    invalid_text_password.style.display = "none";
    document.getElementById('regist').addEventListener('click', function () {
        location.href = 'register.html';

    })//regist

    document.getElementById('login').addEventListener('submit', function (e) {
        invalid_text.style.display = "none";
        invalid_text_user.style.display = "none";
        invalid_text_password.style.display = "none";
        if (($("#username").val() == "") && ($("#password").val() == "")) {
            invalid_text.style.display = "block";
            e.preventDefault();
        }
        else if ($("#username").val() == "") {
            invalid_text_user.style.display = "block";
            e.preventDefault();

        }
        else if ($("#password").val() == "") {
            invalid_text_password.style.display = "block";
            e.preventDefault();

        }

        else {
            for (var p in arr_employee) {
                console.log(p + ':' + arr_employee[p].user_name + '|' + arr_employee[p].email);
                console.log($("#username").val())
                if (($("#username").val() == arr_employee[p].user_name) && ($("#password").val() == arr_employee[p].password)) {
                    //  alert("Logged in successfully");
                    invalid_text.style.display = "none";
                    location.href = 'employee.html';
                    e.action = location.assign('employee.html')
                    f = true;

                }
            }
            console.log(f)
            if (f == false) {
                invalid_text.style.display = "block";
                e.preventDefault();
                console.log(f);
            }

        }

    })//end of sumbit 


})//end of load