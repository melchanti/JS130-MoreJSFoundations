/*
Problem:
  Construct objects that represent meetup date.
  Each object takes a month(1-12) and a year (e.g. 2021)
  The object should be able to determine the exact date of the meetup.
  Descriptors given are 'first', 'second, 'third', 'fourth', 'fifth', 'last', and 'teenth'
  case insensitive.
  days are given by strings 'monday', 'tuesday', 'wednesday' ... case insensitive

From the examples:
  We need two methods
    Constructor: Takes two number arguments and returns an object
    day: Takes two string arguments and returns a Date object
  
Data Structures:
  We need two objects to translate the descriptors into numbers and the days into numbers
  Work with date objects to determine the date and day

Algorithm:
  Create a static object with month and number of days.
  {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10:31, 11: 30, 12:31}
  Create a static object with days equivalent numbers and negative numbers.
  {0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday,
   -1: Saturday, -2: Friday, -3: Thursday, -4: Wednesday, -5: Tuesday, -6: Monday,
    7: Sunday, 8: Monday, 9: Tuesday, 10: Wednesday, 11: Thursday, 12: Friday}
  Constructor: Assign the year and month to properties of the created meetup object
  day:
    Use a helper method getWeekDates to create an object called weekDates to determine the 
    dates of the first week of the month.
    if first day is Wednesday, the object should be [3, 4, 5, 6, 0, 1, 2]
    {Sunday: 5, Monday: 6, Tuesday: 7, Wednesday: 1, Thursday: 2, Friday: 3, Saturday: 4}

    Use a helper method (getDayDate) to get the date of the given day (dayDate).

    Use a helper method (validDate) to determine if the dayDate is valid.

    If the dayDate is not valid, return null

    Create a new day object with the given year, given month - 1, dayDate.
  getWeekDates:
    Determine the first day of the month 'Monday', 'Tuesday', etc.
    Create an object called weekDates that has the number equivalent of the days starting 
    from the first week of the month
  getDayDate:
    A method that takes two arguments object and string

    Set firstWeekDate to equal the date that the given day occurs at in the first week of 
    the month using the weekDates object.
    Ex: If it's Tuesday. firstWeekDate would equal 7. Continuing from the example above

    Set givenDayDate to equal firstWeekDate * the number equivalent of the descriptor. If
    the desccriptor is first, second, third, fourth or fifth.
    If the descriptor is 'last, Use a helper method to determine the last week weekDates.
    Use the new weekDates object to determine the date
    If the descriptor is 'teenth', Use a help method to determine the teenth week weekDates.
    Use the new weekDates object to determine the date
  getLastWeekDates:
    A method that takes one argument object and returns an object
    Find the number of days in the month.
    If the number of days is 28, determine if the year is leap If the year is a leap year,
    change the number to 29.
    Get the last day of the month, create the lastWeekDates object accordingly using the static
    days object.
    Example if the last day is a Tuesday and the month has 31 days.
    {Sunday: 29, Monday: 30, Tuesday: 31, Wednesday: 25, Thursday: 26, Friday: 27, Saturday: 28}
  getTeenthWeekDates:
    A method that takes one argument object and returns an object
    find the thirteenth day of the month
    Create the teenthWeekObject using the thirteenth day and the static days object
    Example if the thirteenth day is Thursday.
    {Sunday: 16, Monday: 17, Tuesday: 18, Wednesday: 19, Thursday: 13, Friday: 14, Saturday: 15}
  
  validDate:
    A method that takes one argument number
    Using the static month object, get the number of days in the month
    If the number of days is 28, determine if the year is a leap year. If it's a leap year,
    set the number of days to 29.
    Return argument <= number of days in the month.
*/

let Meetup = (function() {
  let [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday] = 
  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const DAYS_IN_MONTH = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10:31, 11: 30, 12:31
  }
  const DAYS_NUMBERS = {
    0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday,
  '-1': Saturday, '-2': Friday, '-3': Thursday, '-4': Wednesday, '-5': Tuesday, 
  '-6': Monday, 7: Sunday, 8: Monday, 9: Tuesday, 10: Wednesday, 11: Thursday, 12: Friday
  }

  return class meetup{
    constructor(year, month) {
      this.year = year;
      this.month = month;
    }
    
    static validDate(dayDate, month, year) {
      let daysInMonth = DAYS_IN_MONTH[month];
      if (daysInMonth === 28) {
        if (year % 4 === 0) {
          daysInMonth = 29;
        }
      }

      return dayDate <= daysInMonth;
    }

    day(day, descriptor) {
      this.day = this.getDayDate(day.toLowerCase(), descriptor.toLowerCase());
      if (!meetup.validDate(this.day, this.month, this.year)) {
        return null;
      }

      let date = new Date(this.year, this.month - 1, this.day);

      return date;
    }
    
    getDayDate(day, descriptor) {
      let firstWeekDate = this.getFirstWeekDates()[day];

      let givenDayDate;

      switch(descriptor) {
        case 'first':
          givenDayDate = firstWeekDate;
          break;
        case 'second':
          givenDayDate = firstWeekDate + 7;
          break;
        case 'third':
          givenDayDate = firstWeekDate + 14;
          break;
        case 'fourth':
          givenDayDate = firstWeekDate + 21;
          break;
        case 'fifth':
          givenDayDate = firstWeekDate + 28;
          break;
        case 'teenth':
          givenDayDate = this.getTeenthWeek()[day];
          break;
        case 'last':
          givenDayDate = this.getLastWeek()[day];
          break;
      }
      return givenDayDate;
    }

    getFirstWeekDates() {
      let firstDayOfMonth = new Date(this.year, this.month - 1, 1).getDay();
      let daysVariables = [];
      
      for (let index = 0; index <= 6; index += 1) {
        daysVariables[index] = DAYS_NUMBERS[firstDayOfMonth + index];
      }

      let firstWeekDates = {};
      
      daysVariables.forEach((day, index) => {
        firstWeekDates[day] = index + 1;
      });

      return firstWeekDates;
    }

    getLastWeek() {
      let numOfDaysInMonth = DAYS_IN_MONTH[this.month];
      if (numOfDaysInMonth === 28) {
        if (this.year % 4 === 0) {
          numOfDaysInMonth = 29;
        }
      }

      let lastDay = new Date(this.year, this.month - 1, numOfDaysInMonth).getDay();
      let daysVariables = [];
      for (let index = 0; index <= 6; index += 1) {
        daysVariables[index] = DAYS_NUMBERS[lastDay - index];
      }

      let lastWeekDates = {};
      daysVariables.forEach((day, index) => {
        lastWeekDates[day] = numOfDaysInMonth - index;
      });

      return lastWeekDates;
    }

    getTeenthWeek() {
      let thirteenth = new Date(this.year, this.month - 1, 13).getDay();
      let daysVariables = [];
      for (let index = 0; index <= 6; index += 1) {
        daysVariables[index] = DAYS_NUMBERS[thirteenth + index];
      }

      let teenthWeek = {};
      daysVariables.forEach((day, index) => {
        teenthWeek[day] = 13 + index;
      });

      return teenthWeek;
    }

  }
})();

let meetup = new Meetup(2016, 10);
console.log(meetup.day('Monday', 'teenth'));

module.exports = Meetup;