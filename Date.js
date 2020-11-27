function Date(day,month,year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (newDay) {
        this.day = newDay;
    }
    this.setMonth = function (newMonth) {
        this.month = newMonth;
    }
    this.setYear = function (newYear) {
        this.year = newYear;
    }
}