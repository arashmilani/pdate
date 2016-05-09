# pdate
A tiny Persian calender convertor from/to Gregorian calendar

### Install 

    npm install pdate

### Usage
You can cunstruct a pdate and use the `toGregorian` and `toDate` methods to convert a Persian date to Gregorian date:
```javascript
var pd = pdate(1391, 2, 25);

pd.toGregorian() // -> [ 2012, 5, 14 ]

var date = pd.toDate() // Will return a JavaScript native Date object in Gregorian calender
date.constructor.name // -> 'Date'
date.getFullYear() // -> 2012
date.getMonth() // -> 4 (Note: JavaScript Date Object monthes are zero-based values)
date.getDate() // -> 14
```

You can convert a Gregorian date or a Javascriot `Date` Object to pdate by `fromGregorian` and `fromDate` methods:
```javascript
var pd = pdate.fromGregorian(2012, 5, 14);
var pd = pdate.fromDate(new Date(2012, 4, 14));  // The same as above line just using fromDate instead of fromGregorian
pd.year // -> 1391
pd.month // -> 2
pd.day // -> 25
```

You can also check of a pdate is in a Hijri Shamsi leap year or not.
```javascript
pdate(1391, 7, 21).isLeapYear() // -> true
pdate(1392, 1, 12).isLeapYear() // -> false
```
## License
This software is released under the [MIT License](http://arashmilani.mit-license.org/).  

    Copyright © 2016 Arash Milani <me@arashmilani.com>
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the “Software”), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
