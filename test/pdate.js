const assert = require('assert');
const pdate = require('../');


function validate(){

}

describe('pdate', function(){
  describe('#()', function(){
    it('should cunstruct pdate object with 3 args (year, month, day)', function(){
      assert.deepEqual(pdate(1364, 10, 24), {year: 1364, month: 10, day: 24});
      assert.deepEqual(pdate(1383, 7, 1), {year: 1383, month: 7, day: 1});
    });

    it('should throw err if > 31 days has been provided for first half of the year', function() {
      assert.throws(() => { pdate(1395, 1, 32) }, /invalid days for the months in the first half of the year/);
      assert.throws(() => { pdate(1395, 4, 70) }, /invalid days for the months in the first half of the year/);
    });

    it('should throw err if > 30 days has been provided for second half of the year', function(){
      assert.throws(() => { pdate(1395, 7, 31) }, /invalid days for the months in the second half of the year/);
      assert.throws(() => { pdate(1395, 7, 70) }, /invalid days for the months in the second half of the year/);
      assert.throws(() => { pdate(1395, 11, 31) }, /invalid days for the months in the second half of the year/);
    })

    it('should throw err if > 29 days has been provided for esfand of nonleap years', function(){
      assert.throws(() => { pdate(1394, 12, 30) }, /invalid days for the Esfand of a nonleap year/);
      assert.throws(() => { pdate(1369, 12, 30) }, /invalid days for the Esfand of a nonleap year/);
    });

    it('should not throw err if 30 days has been provided for esfand of leap years', function(){
      pdate(1395, 12, 30);
      pdate(1370, 12, 30);
    });
  });

  describe('#fromGregorian()', function(){
    it('should get Gregorian year, month, day and cunstruct pdate object', function(){
      assert.deepEqual(pdate.fromGregorian(2016, 5, 9), {year: 1395, month: 2, day: 20});
      assert.deepEqual(pdate.fromGregorian(1998, 12, 20), {year: 1377, month: 9, day: 29});
    });
  });

  describe('#fromDate()', function(){
    it('should get js Date object (Gregorian date) and cunstruct pdate object', function(){
      assert.deepEqual(pdate.fromDate(new Date(2016, 4, 9)), {year: 1395, month: 2, day: 20});
      assert.deepEqual(pdate.fromDate(new Date(1998, 11, 20)), {year: 1377, month: 9, day: 29});
    });
  });
});

describe('pdate instance', function(){
  describe('#toGregorian()', function(){
    it('should get return an array containing Gregorian year, month, day', function(){
      assert.deepEqual(pdate(1395, 2, 20).toGregorian(), [2016, 5, 9]);
      assert.deepEqual(pdate(1377, 9, 29).toGregorian(), [1998, 12, 20]);
    });
  });

  describe('#toDate()', function(){
    it('should return a js Date containing Gregorian year, month and day', function(){
      assert.equal(pdate(1395, 2, 20).toDate().toDateString(), 
        (new Date(2016, 4, 9)).toDateString());

      assert.equal(pdate(1377, 9, 29).toDate().toDateString(), 
        (new Date(1998, 11, 20)).toDateString());
    });
  });

  describe('#isLeapYear()', function(){
    it('is not very common', function(){
      assert.equal(pdate(1392, 1, 1).isLeapYear(), false);
      assert.equal(pdate(1393, 1, 1).isLeapYear(), false);
      assert.equal(pdate(1394, 1, 1).isLeapYear(), false);
      assert.equal(pdate(1396, 1, 1).isLeapYear(), false);
    });

    it('should return true for almost every 4 years', function(){
      assert.equal(pdate(1395, 1, 1).isLeapYear(), true);
      assert.equal(pdate(1370, 1, 1).isLeapYear(), true);
    });
  });
})