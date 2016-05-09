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
var pd = pdate.fromDate(new Date(2012, 5, 14));  // The same as above line just using fromDate instead of fromGregorian
pd.year // -> 1391
pd.month // -> 2
pd.day // -> 25
```

You can also check of a pdate is in a Hijri Shamsi leap year or not.
```javascript
pdate(1391, 7, 21).isLeapYear() // -> true
pdate(1392, 1, 12).isLeapYear() // -> false
```
