window.addEventListener('load', function () {

    arr_employee_before = JSON.parse(localStorage.getItem('Employee'));
    console.log(arr_employee_before);
    if (arr_employee_before == null) {
        var arr_employee_before = [];
        let admin = new employee(0, 'admin', 'admin123', 'admin', 'admin', 'admin12@gmail.com', 'Damitta', 40, "true")
        let security = new employee(1, 'security', 'security123', 'security', 'security', 'security12@gmail.com', 'Damitta', 45, "true")
        console.log(admin)
        arr_employee_before[0] = admin;
        arr_employee_before[1] = security;
        localStorage.setItem("Employee", JSON.stringify(arr_employee_before))

    }
    document.getElementById("login").addEventListener('click', function () {
        location.href = "login.html"
    });
    document.getElementById("regist").addEventListener('click', function () {
        location.href = " register.html"
    });



});//endof load