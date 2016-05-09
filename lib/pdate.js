/*!
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Arash Milani
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var jalali = require('./jalali');

function pdate(year, month, day){
  var pd = Object.create(pdateProto);
  Object.assign(pd, {year: year, month: month, day: day});
  validatePdate(pd);
  return pd;
}

var pdateProto = {
  toGregorian: function toGregorian() {
    return jalali.jalaliToGregorian([this.year, this.month, this.day]);    
  },

  toDate: function toDate() {
    var gDate = this.toGregorian();
    return new Date(gDate[0], gDate[1] - 1, gDate[2]);
  },

  /* Based on the work of Reza Babakhani <babakahni.reza@gmail.com> */
  isLeapYear: function isLeapYear() {
    return ((((((this.year - ((this.year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
  },
}

pdate.fromDate = function fromDate(jsDate){
  return pdate.fromGregorian(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}

pdate.fromGregorian = function fromGregorian(year, month, day) {
  var jdate = jalali.gregorianToJalali([year, month, day]);
  return pdate(jdate[0], jdate[1], jdate[2]);
}

function validatePdate(pdate){
  if(pdate.month <= 6 && pdate.day > 31) {
    throw new Error('invalid days for the months in the first half of the year');
  }

  if(pdate.month >= 7 && pdate.month <= 12 && pdate.day > 30) {
    throw new Error('invalid days for the months in the second half of the year');
  }

  if(pdate.month === 12 && !pdate.isLeapYear() && pdate.day > 29) {
    throw new Error('invalid days for the Esfand of a nonleap year');
  }
}

module.exports = pdate;