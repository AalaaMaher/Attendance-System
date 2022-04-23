var nametxt;

var arr_employee = [];
var flage = "true";
//   let admin  = new employee(0, 'admin', 'admin123', 'admin', 'admin', 'admin12@gmail.com', 'Damitta',40 , "true")
// let security  = new employee(1, 'security', 'security123', 'security', 'security', 'security12@gmail.com', 'Damitta',45, "true")
// arr_employee[0]=admin;
// arr_employee[1] = security;
// localStorage.setItem("Employee", JSON.stringify(arr_employee))
window.addEventListener('load', function () {
    var i;
    arr_employee_before = JSON.parse(localStorage.getItem('Employee'));
    console.log(arr_employee_before);
    if (arr_employee_before == null) {
        i = 2;
        let admin = new employee(0, 'admin', 'admin123', 'admin', 'admin', 'admin12@gmail.com', 'Damitta', 40, "true")
        let security = new employee(1, 'security', 'security123', 'security', 'security', 'security12@gmail.com', 'Damitta', 45, "true")
        arr_employee[0] = admin;
        arr_employee[1] = security;
    }
    else {
        i = arr_employee_before.length;
        arr_employee = arr_employee_before;
    }

    nametxt = document.getElementById('usernametxt');
    namelasttxt = document.getElementById('usernamelasttxt')
    msgvaild = document.getElementById('validname');
    msglastvaild = document.getElementById('validlastname');
    emailtxt = document.getElementById('user_email');
    emailerror = document.getElementById('emailerror');
    addresse = document.getElementById('addresse');
    age = document.getElementById('age');
    emailrepete = document.getElementById('emailrepete');

    // submit = document.getElementById("submit")
    nametxt.focus();
    msgvaild.style.display = "none";
    msglastvaild.style.display = "none";
    emailerror.style.display = "none";
    emailrepete.style.display = "none";
    nametxt.addEventListener('blur', function () {
        if (!(usernamevalid()))

        //alert("you should insert name ");
        {
            msgvaild.style.display = "block";
            nametxt.focus();
            nametxt.select()
        }
        else {
            msgvaild.style.display = "none";
            namelasttxt.focus();


        }

    });
    namelasttxt.addEventListener('blur', function () {
        if (!(usernamelastvalid()))

        //alert("you should insert name ");
        {
            msglastvaild.style.display = "block";
            namelasttxt.focus();
            namelasttxt.select();
        }
        else {
            msglastvaild.style.display = "none";
            emailtxt.focus();
        }

    });

    emailtxt.addEventListener('blur', function () {

        var f = repeate_email();
        if (f == "false") {
            flage = "false";
            emailerror.style.display = "none";
            emailrepete.style.display = "block";
            emailtxt.focus();
            emailtxt.select();
        }
        else {
            if ((!(emailvalid()))) {

                emailerror.style.display = "block";
                emailrepete.style.display = "none";
                emailtxt.focus();
                emailtxt.select();

            }
            else {
                flage = "true";
                emailerror.style.display = "none";
                emailrepete.style.display = "none";
            }
        }



    });


    document.getElementById('contact-form').addEventListener('submit', function (e) {


        if ((emailvalid() && usernamevalid()) && flage == "true") {

            var txt = nametxt.value;
            var user_name = random_name(txt);
            var user_password = random_password(txt);

            e.preventDefault();

            this.contact_number.value = Math.random() * 100000 | 0;
            this.message.value = `your user_name :  ${user_name} \n your Password ${user_password}`;
            // these IDs from the previous steps
            console.log("=================================")
            console.log(emailtxt.value)
            emailjs.sendForm('service_798hx9y','template_ib74pjp', this)
                .then(function () {
                    console.log('SUCCESS!');
                    alert("your username and password send to your E-mail")
                    var fname = nametxt.value;
                    var lname = namelasttxt.value;
                    var email = emailtxt.value;
                    var addr = addresse.value;
                    var aage = age.value;
                    var e = new employee(i, user_name, user_password, fname, lname, email, addr, aage, "false")
                    console.log(e);
                    arr_employee[i++] = e;
                    console.log(arr_employee);
                    localStorage.setItem("Employee", JSON.stringify(arr_employee))
                    location.href = "login.html";
                }, function (error) {
                    console.log('FAILED...', error);
                });


        }
        else {
            e.preventDefault();
            alert("invalid data");
        }


    });
    document.forms[0].addEventListener('reset', function (e) {

        if (!confirm("Are You Sure ?")) {
            location.reload();
            //  e.preventDefault();
            nametxt.focus();
            msgvaild.style.display = "none";
            msglastvaild.style.display = "none";
            emailerror.style.display = "none";
            emailrepete.style.display = "none";

        }

    });

}); //end of load
function emailvalid() {
    return emailtxt.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

}

function usernamevalid() {
    // return (nametxt.value.length==0);
    return nametxt.value.match(/^[a-zA-Z]{1,9}$/)
}
function usernamelastvalid() {
    // return (nametxt.value.length==0);
    return namelasttxt.value.match(/^[a-zA-Z]{1,9}$/)
}
function repeate_email() {
    var f = "true";
    for (var h = 0; h < arr_employee.length; h++) {
        console.log(arr_employee[h].email)
        if (arr_employee[h].email == (emailtxt.value)) {
            f = "false";

        }
    }
    return f;
}

function random_name(txt) {
    var text = txt;
    var possible = "0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function random_password(txt) {
    var text = txt;
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


