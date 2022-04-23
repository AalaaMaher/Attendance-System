arr_employee = JSON.parse(localStorage.getItem('Employee'));
arr_report = JSON.parse(localStorage.getItem('Report'));
var checkarr = [];
console.log(arr_employee);
console.log(arr_report)
//looooad
window.addEventListener('load', function () {
  document.getElementsByTagName('table')[0].style.display = "none";
  document.getElementById('chlid').style.display = "none";

  Comfirm = document.getElementById('Comfirm');
  Comfirm.addEventListener('click', Comfirmm);
  display_all = document.getElementById('display');
  display_all.addEventListener('click', display);
  all_report = document.getElementById('report');
  all_report.addEventListener('click', allReport);
  all_late = document.getElementById('late');
  all_late.addEventListener('click', late);
  all_excue = document.getElementById('excuce');
  all_excue.addEventListener('click', excuse);
  all_brief = document.getElementById('breif');
  all_brief.addEventListener('click', breif);

  function late() {
    if (arr_report == null) { alert("NO Report Yet") }
    document.getElementById('chlid').style.display = "block";
    document.getElementsByTagName('table')[0].innerHTML = "";
    document.getElementsByTagName('table')[0].style.display = "block";
    var createdtr = document.createElement('tr');
    createdtr.classList.add("head");
    var createdtd = document.createElement('td');
    createdtd.innerText = "id"
    createdtr.appendChild(createdtd);
    createdtd = document.createElement('td');
    createdtd.innerText = "user name"
    createdtr.appendChild(createdtd);
    createdtd = document.createElement('td');
    createdtd.innerText = "Late Report"
    createdtr.appendChild(createdtd);
    document.getElementsByTagName('table')[0].appendChild(createdtr);
    for (let i = 0; i < arr_report.length; i++) {
      var createdtr = document.createElement('tr');
      var createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].id;
      createdtr.appendChild(createdtd);
      createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].user_name;
      createdtr.appendChild(createdtd);
      createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].late;
      createdtr.appendChild(createdtd);

      document.getElementsByTagName('table')[0].appendChild(createdtr);
    }

  } //end of late 
  function excuse() {
    if (arr_report == null) { alert("NO Report Yet") }
    document.getElementById('chlid').style.display = "block";
    document.getElementsByTagName('table')[0].innerHTML = "";
    document.getElementsByTagName('table')[0].style.display = "block";
    var createdtr = document.createElement('tr');
    createdtr.classList.add("head");
    var createdtd = document.createElement('td');
    createdtd.innerText = "id"
    createdtr.appendChild(createdtd);
    createdtd = document.createElement('td');
    createdtd.innerText = "user name"
    createdtr.appendChild(createdtd);
    createdtd = document.createElement('td');
    createdtd.innerText = "Excuce Report"
    createdtr.appendChild(createdtd);
    document.getElementsByTagName('table')[0].appendChild(createdtr);
    for (let i = 0; i < arr_report.length; i++) {
      var createdtr = document.createElement('tr');
      var createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].id;
      createdtr.appendChild(createdtd);
      createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].user_name;
      createdtr.appendChild(createdtd);
      createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].excuse;
      createdtr.appendChild(createdtd);

      document.getElementsByTagName('table')[0].appendChild(createdtr);
    }

  } //end of excuce
  function breif() {
    if (arr_report == null) { alert("NO Report Yet") }
    document.getElementById('chlid').style.display = "block";
    document.getElementsByTagName('table')[0].innerHTML = "";
    document.getElementsByTagName('table')[0].style.display = "block";
    var createdtr = document.createElement('tr');
    createdtr.classList.add("head");
    var createdtd = document.createElement('td');
    createdtd.innerText = "id"
    createdtr.appendChild(createdtd);
    createdtd = document.createElement('td');
    createdtd.innerText = "user name"
    createdtr.appendChild(createdtd);
    createdtd = document.createElement('td');
    createdtd.innerText = "Employee Brief"
    createdtr.appendChild(createdtd);
    document.getElementsByTagName('table')[0].appendChild(createdtr);
    for (let i = 0; i < arr_report.length; i++) {
      var createdtr = document.createElement('tr');
      var createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].id;
      createdtr.appendChild(createdtd);
      createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].user_name;
      createdtr.appendChild(createdtd);
      createdtd = document.createElement('td');
      createdtd.innerText = arr_report[i].breif;
      createdtr.appendChild(createdtd);

      document.getElementsByTagName('table')[0].appendChild(createdtr);
    }


  } // end of brief 
  function allReport() {
    if (arr_report == null) { alert("NO Report Yet") }
    document.getElementById('chlid').style.display = "block";
    document.getElementsByTagName('table')[0].innerHTML = "";
    document.getElementsByTagName('table')[0].style.display = "block";
    var createdtr = document.createElement('tr');
    createdtr.classList.add("head");
    var key = Object.keys(arr_report[0])
    for (p in key) {
      var createdtd = document.createElement('td');
      createdtd.innerText = key[p];
      createdtr.appendChild(createdtd);
    }
    document.getElementsByTagName('table')[0].appendChild(createdtr);
    for (let i = 0; i < arr_report.length; i++) {
      var createdtr = document.createElement('tr');
      for (let j in arr_report[i]) {
        var createdtd = document.createElement('td');
        createdtd.innerText = arr_report[i][j]
        createdtr.appendChild(createdtd);
      } document.getElementsByTagName('table')[0].appendChild(createdtr);
    }
  } // end of all report 
  function display() {
    document.getElementById('chlid').style.display = "block";
    document.getElementsByTagName('table')[0].innerHTML = "";
    document.getElementsByTagName('table')[0].style.display = "block";
    var createdtr = document.createElement('tr');
    createdtr.classList.add("head");
    var key = Object.keys(arr_employee[0])
    for (p in key) {
      var createdtd = document.createElement('td');
      createdtd.innerText = key[p];
      createdtr.appendChild(createdtd);
    }
    document.getElementsByTagName('table')[0].appendChild(createdtr);
    for (let i = 2; i < arr_employee.length; i++) {
      var createdtr = document.createElement('tr');
      for (let p = 0; p < Object.keys(arr_employee[i]).length; p++) {
        if (p == 0) {

          for (var j in arr_employee[i]) {


            var createdtd = document.createElement('td');

            createdtd.innerText = arr_employee[i][j];
            console.log(arr_employee[i][j]);
            createdtr.appendChild(createdtd);

          }
        } document.getElementsByTagName('table')[0].appendChild(createdtr);
      }//data table 
    }
  }//end of display


  function Comfirmm() {
    document.getElementById('chlid').style.display = "block";
    document.getElementsByTagName('table')[0].innerHTML = "";
    document.getElementsByTagName('table')[0].style.display = "block";

    var createdtr = document.createElement('tr');
    createdtr.classList.add("head");
    var key = Object.keys(arr_employee[0])
    for (p in key) {
      var createdtd = document.createElement('td');
      createdtd.innerText = key[p];
      createdtr.appendChild(createdtd);
    }
    document.getElementsByTagName('table')[0].appendChild(createdtr);
    for (let i = 2; i < arr_employee.length; i++) {
      var createdtr = document.createElement('tr');
      for (let p = 0; p < Object.keys(arr_employee[i]).length + 1; p++) {
        if (p == 0) {

          for (var j in arr_employee[i]) {

            if (arr_employee[i][j] == arr_employee[i].valid)
              break;
            else {
              var createdtd = document.createElement('td');
              //   console.log(Object.keys(allusersobject[i]).length)

              createdtd.innerText = arr_employee[i][j];
              console.log(arr_employee[i][j]);
              createdtr.appendChild(createdtd);
            }
          }
        }//data table 

        if (p == Object.keys(arr_employee[i]).length) {

          console.log("check")

          var createdtd = document.createElement('td');
          var check_valid = document.createElement('input');
          check_valid.setAttribute("type", "checkbox");
          check_valid.setAttribute("value", arr_employee[i].id);
          check_valid.setAttribute("name", "checkbox");
          if (arr_employee[i].valid == "true")
            check_valid.setAttribute("checked", "true");
          checkarr[arr_employee[i].id] = myclick(arr_employee[i].id);
          check_valid.onchange = checkarr[arr_employee[i].id];
          function myclick(v) {
            return function () {
              if (this.checked == true) {
                console.log(v)
                arr_employee[v].valid = "true";
                console.log("valid true");
                localStorage.setItem("Employee", JSON.stringify(arr_employee));


              }
              else { // var  x= check_valid.value;
                console.log(v)
                arr_employee[v].valid = "false";
                console.log("valid false");
                localStorage.setItem("Employee", JSON.stringify(arr_employee))


              }
            };
          }


          //end of click
          createdtd.appendChild(check_valid);
          createdtr.appendChild(createdtd);

        }//end of check valid
      }
      document.getElementsByTagName('table')[0].appendChild(createdtr);

    }


    //  createdtr.appendChild(createdtd);



  } //end of display 


}); //end of load