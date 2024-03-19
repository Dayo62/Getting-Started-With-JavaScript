class CalendarDay {
    //private fields
    #month;
    #day;
    #year;
    //constructor
    constructor(month, day, year) {
        this.#month = month;
        this.#day = day;
        this.#year = year;
    }
    //public method
    toString() {
        return `${this.year}-${this.month+1}-${this.#day}`;
    }
}

//using the class
let day1 = new CalendarDay(2023, 0, 1);
console.log(day1.toString());