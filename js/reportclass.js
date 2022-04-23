class report_attandance {
    id;
    user_name;
    date;
    attandance_time;
    late;
    departure_time;
    excuse;
    breif;
    constructor(_id, _user_name, _date, _attandance_time, _late, _departure_time, _excuse, _breif) {
        this.id = _id;
        this.user_name = _user_name;
        this.attandance_time = _attandance_time;
        this.departure_time = _departure_time;
        this.date = _date;
        this.late = _late;
        this.excuse = _excuse;
        this.breif = _breif;
    }
} // end of class report 