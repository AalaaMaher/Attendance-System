
arr_employee = JSON.parse(localStorage.getItem('Employee'));
console.log(arr_employee);
var arr_report = [];
let flag = false;

//looooaaaad
$(function () {
    let u = new Date();
    h = 15 - u.getHours();
    if (h < 0)
        h = h + 24;
    m = 30 - u.getMinutes();
    if (m < 0)
        m = m + 60;
    var milisec = (h * 60 * 60 + m * 60) * 1000

    setTimeout(function () {
        arr_report_depature = JSON.parse(localStorage.getItem('Report'));
        for (let i = 0; i < arr_report_depature.length; i++) {
            if (arr_report_depature[i].departure_time == 0) {
                let r = new Date();
                let x = r.toLocaleTimeString()
                let departure = x;
                arr_report_depature[i].departure_time = departure;
                localStorage.setItem("Report", JSON.stringify(arr_report_depature))
              //  console.log("from set time")
            }
        }

    }, milisec)
    var m
    arr_report_before = JSON.parse(localStorage.getItem('Report'));
    console.log(arr_report_before);
    if (arr_report_before == null)
        m = 0;
    else {
        m = arr_report_before.length;
        arr_report = arr_report_before;
    }  //end of new + old 
    //  $("#attandance").toggleClass('att');
    $("#attandance").click(function () {
        let user = $("#user_name").val();
        if (user == "") {
            alert("plz enter user name ");
            $("#user_name").focus();
            $("#user_name").select();

        }
        else {
            var time = $("#attandance").val();
            let id;

            for (let i = 0; i < arr_employee.length; i++) {
                if (arr_employee[i].user_name == user) {
                    flag = true;
                    id = arr_employee[i].id;

                }
            }  //end of for employee
            console.log(flag)
            if (flag == false)
                alert("user not found in employee")
            else {
                var user_report = [];
                let o = 0;
                for (let i = 0; i < arr_report.length; i++) {
                    if (user == arr_report[i].user_name) {
                        user_report[o++] = arr_report[i];
                    }
                }


            } //end of else to get user_report 

            if (time == "confirm attandance" && flag == true) {
                //  $("#attandance").toggleClass('att');
                if (user_report.length == 0) {
                    console.log("user reoprt 0");
                    let id = m;
                    let r = new Date();
                    let x = r.toLocaleTimeString()
                    let attandance_time = x;
                    let departure = 0;
                    var s = r.toLocaleString();
                    let date = s;
                    let excuse = "No";

                    let late;
                    if (r.getHours() == 8) {
                        if (r.getMinutes > 30)
                            late = "yes";
                        else
                            late = "No";
                    }
                    else if (r.getHours() > 8) {
                        late = "Yes";
                    }
                    else
                        late = "No";
                    let breif = `Day ${date} : late ${late} : execuse :${excuse}.`;
                    var rep = new report_attandance(id, user, date, attandance_time, late, departure, excuse, breif);
                    console.log(rep);
                    arr_report[m++] = rep;
                    console.log("m");
                    console.log(m);
                    console.log(arr_report);
                    localStorage.setItem("Report", JSON.stringify(arr_report))
                    alert(`your attandance confirm at ${attandance_time}`)
                    $("#attandance").val("confirm departure");
                    // $("#attandance").toggleClass('att');
                }
                else {
                    let f = true
                    for (let i = 0; i < user_report.length; i++) {
                        if (user_report[i].departure_time == 0)
                            f = false;
                    }
                    if (f == false) {
                        alert("you should insert departure time first");
                        $("#attandance").val("confirm departure");
                        // $("#attandance").toggleClass('de');
                    }
                    else {
                        let id = m;
                        let r = new Date();
                        console.log(r.getHours());
                        console.log(r.getMinutes())
                        let late;
                        if (r.getHours() == 8) {
                            if (r.getMinutes > 30)
                                late = "yes";
                            else
                                late = "No";
                        }
                        else if (r.getHours() > 8) {
                            late = "Yes";
                        }
                        else
                            late = "No";


                        let x = r.toLocaleTimeString()
                        let attandance_time = x;
                        let departure = 0;
                        var s = r.toLocaleString();
                        let date = s;
                        let excuse = "No";
                        let breif = `Day ${date} ,late: ${late},execuse:${excuse}`;

                        var rep = new report_attandance(id, user, date, attandance_time, late, departure, excuse, breif);
                        console.log(rep);
                        arr_report[m++] = rep;
                        console.log("m");
                        console.log(m);
                        console.log(arr_report);
                        localStorage.setItem("Report", JSON.stringify(arr_report))
                        alert(`your attandance confirm at ${attandance_time}`)
                        $("#attandance").val("confirm departure");
                        // $("#attandance").toggleClass('de');

                    }
                }

            } //end of comfirm attandance
            else if (time == "comfirm departure" && flag == true) {
                $("#attandance").toggleClass('de');
                if (user_report.length == 0) {
                    alert(" you should insert attandance first ");
                    // $("#attandance").toggleClass('att');
                    $("#attandance").val("confirm attandance");
                }
                else {
                    let l = false;
                    for (let i = 0; i < user_report.length; i++) {
                        if (user_report[i].departure_time == 0) {
                            l = true;
                            let r = new Date();
                            let x = r.toLocaleTimeString()
                            let departure = x;
                            let excuse;
                            if (r.getHours() == 15) {
                                if (r.getMinutes < 30)
                                    excuse = "yes";
                                else
                                    excuse = "No";
                            }
                            else if (r.getHours() < 15) {
                                excuse = "Yes";
                            }
                            else
                                excuse = "No";
                            // user_report[i].departure=departure;
                            let s = user_report[i].id;
                            console.log(s);
                            arr_report[s].departure_time = departure;
                            arr_report[s].excuse = excuse;
                            arr_report[s].breif = `Day ${arr_report[s].date} , late:${arr_report[s].late},execuse:${excuse}`;
                            localStorage.setItem("Report", JSON.stringify(arr_report))
                            alert(`your depature confirm at  ${departure}`)
                            //   $("#attandance").toggleClass('att');
                            console.log("trr");
                            $("#attandance").val("confirm attandance");

                        }
                    }
                    if (l == false) {
                        alert(" you should insert attandance first ");
                        //  $("#attandance").toggleClass('att');
                        $("#attandance").val("confirm attandance");

                    }
                }



            }//end of confirm departure 


        }
        //   location.reload();
    })//end of click


});//end of load
