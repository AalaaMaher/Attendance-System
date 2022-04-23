arr_employee = JSON.parse(localStorage.getItem('Employee'));
arr_report = JSON.parse(localStorage.getItem('Report'));
console.log(arr_employee)
console.log(arr_report)
arr_user_report = [];
// http://127.0.0.1:5500/load.html?username=alaaVsRPu'
var address = location.href;
inputs = address.substring(address.indexOf('?') + 1);
indeviduleInput = inputs.split('&');
name = indeviduleInput[0]
username = name.split('=')[1]
console.log(username);
let first_name;

window.addEventListener('load', function () {
  document.getElementsByTagName('table')[0].style.display = "none";
  document.getElementsByTagName('table')[1].style.display = "none";
  for (p in arr_employee) {
    if (arr_employee[p].user_name == username)
      first_name = arr_employee[p].first_name

  }
  wel = document.getElementById('wel')
  wel.innerText = `Welcome ${first_name}`
  for (p in arr_report) {
    if (arr_report[p].user_name == username)
      arr_user_report.push(arr_report[p])

  }
  console.log(arr_user_report);
  var dflage = false;
  document.getElementById('day').addEventListener('click', Daily_Report)
  document.getElementById('month').addEventListener('click', Monthly_Report)


})//end of load 
function Daily_Report() {
  if (arr_report == null) { alert("NO Report Yet") }

  document.getElementsByTagName('table')[1].style.display = "none";
  document.getElementsByTagName('table')[0].style.display = "block";
  document.getElementsByTagName('table')[0].innerHTML = "";
  var createdtr = document.createElement('tr');
  createdtr.classList.add("head");
  var key = Object.keys(arr_report[0])
  for (p in key) {
    var createdtd = document.createElement('td');
    createdtd.innerText = key[p];
    createdtr.appendChild(createdtd);
  }
  document.getElementsByTagName('table')[0].appendChild(createdtr);
  let r = new Date()
  d = r.getDay();
  console.log(d)
  for (var d in arr_user_report) {

    t = new Date(arr_user_report[d].date)
    day = t.getDay();
    console.log(day)
    var user = arr_user_report[d]
    if (d = day) {
      console.log(day)

      console.log(user)
      var createdtr = document.createElement('tr');
      console.log("tr")
      for (s in user) {
        //  console.log(arr_user_report[d][s])
        var createdtd = document.createElement('td');
        createdtd.innerText = user[s];
        //  console.log(arr_user_report[d][s])
        createdtr.appendChild(createdtd);
        console.log("td")
      } document.getElementsByTagName('table')[0].appendChild(createdtr);

      console.log("tttt")

    }



  }


  console.log("daily")


}//end of daily
function Monthly_Report() {
  if (arr_report == null) { alert("NO Report Yet") }
  document.getElementsByTagName('table')[0].style.display = "none";
  document.getElementsByTagName('table')[1].style.display = "block";
  document.getElementsByTagName('table')[1].innerHTML = "";
  var createdtr = document.createElement('tr');
  createdtr.classList.add("head");
  var key = Object.keys(arr_report[0])
  for (p in key) {
    var createdtd = document.createElement('td');
    createdtd.innerText = key[p];
    createdtr.appendChild(createdtd);
  }
  console.log("monthly")


  document.getElementsByTagName('table')[1].appendChild(createdtr);
  let r = new Date()
  m = r.getMonth();
  console.log(m)
  for (var d in arr_user_report) {

    t = new Date(arr_user_report[d].date)
    month = t.getMonth();
    console.log(month)
    var user_m = arr_user_report[d]
    if (m == month) {
      console.log(month)

      console.log(user_m)
      var createdtr = document.createElement('tr');
      console.log("tr")
      for (s in user_m) {
        //  console.log(arr_user_report[d][s])
        var createdtd = document.createElement('td');
        createdtd.innerText = user_m[s];
        //  console.log(arr_user_report[d][s])
        createdtr.appendChild(createdtd);
        console.log("td")
      } document.getElementsByTagName('table')[1].appendChild(createdtr);

      console.log("tttt")

    }



  }

  //   e.preventDefault()




}

