/*
Problem:
  Create a clock object with hours and minutes no dates
  The object should have 6 methods:
  static at(hour)
    returns a clock at a specified hour
  static at(hour, minute)
    returns a clock at a specified hour and minute
  instance toString()
    returns a string representation of the time on the clock
  instance add(minutes)
    adds the number of minutes to the clock
    the number of minutes could be hours or days
  instance subtract(minutes)
    subtract the number of minutes from the clock
    the number of minutes could be hours or days
  instance isEqual(clock object)
    returns true if the time on both clocks are equal
Examples:
  the examples clarify the problem farther
Data Structures:
  need to hold the hours and the minutes in two numbers
Algorithm:
  at methods
    use a constructor method to set the hours and minutes of the created object
    return the created object
  toString method
    return a string with the hours and minutes together separated by a colon
  add
    find out if the number of minutes is hours or days
      if days, convert it to hours accordingly
      if hours, add the number of hours to the hours and the
      remaining minutes to minutes
  subtract
    same as add
  isEqual
    compare the hours of both objects and the minutes
    if they are equal return true
*/

class Clock {
  static MINUTESINHOUR = 60;
  static HOURSINDAYS = 24;

  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute ? minute : 0;
  }

  static at() {
    let newClock = new Clock(...arguments);
    return newClock;
  }

  toString() {
    let string = '';
    if (this.hour < 10) {
      string += '0' + this.hour;
    } else {
      string += this.hour;
    }

    string += ':';

    if (this.minute < 10) {
      string += '0' + this.minute;
    } else {
      string += this.minute;
    }

    return string;
  }

  add(minutes) {
    this.minute += minutes;
    let addedHours = 0;
    if (this.minute > 60) {
      addedHours = Math.floor(this.minute / 60);
      this.minute %= 60;
    }

    this.hour += addedHours;

    if (this.hour >= 24) {
      this.hour %= 24;
    }

    return this;
  }

  subtract(minutes) {
    this.minute -= minutes;
    let subtractedHours = 0;
    if (this.minute < 0) {
      subtractedHours = Math.floor(this.minute / 60);
      this.minute = 60 + (this.minute % 60);
    }
    this.hour += subtractedHours;

    if (this.hour < 0) {
      this.hour = 24 + (this.hour % 24);
    }

    return this;
  }

  isEqual(clock) {
    return this.hour === clock.hour && this.minute === clock.minute;
  }
}

module.exports = Clock;