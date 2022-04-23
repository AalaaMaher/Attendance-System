
arr_employee = JSON.parse(localStorage.getItem('Employee'));
console.log(arr_employee)
// http://127.0.0.1:5500/load.html?username=alaaVsRPu'
var address = location.href;
inputs = address.substring(address.indexOf('?') + 1);
indeviduleInput = inputs.split('&');

name = indeviduleInput[0]
username = name.split('=')[1]
console.log(username);
window.addEventListener('load', function () {
     var notcomfirm_txt = document.getElementById("notcomfirm");
     notcomfirm_txt.style.display = "none";
     if (username == 'admin')
          location.href = "admin.html"
     else if (username == 'security')
          location.href = "security.html"
     else {
          setTimeout(function () {
               for (var p in arr_employee) {
                    if ((username == arr_employee[p].user_name) && (arr_employee[p].valid == "true")) {
                         location.href = "employee.html?username=" + username
                    }
                    else
                         notcomfirm_txt.style.display = "block";
               }
          }, 2000)
     }

}) //end of load