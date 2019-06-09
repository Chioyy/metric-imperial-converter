/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    if (input.match(/[0-9]/) == null) {
      input = "1";
    }
    const regex = /[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/g;
    result = input.match(regex).join('');
    if (result.indexOf('/') > -1) {
      var doubleSlash = result.match(/[\/]/g).length;
      var decParts = result.split("/");
      result = (parseFloat(decParts[0], 10) / parseFloat(decParts[1], 10));
      result = Math.round(result * 100) / 100;
      result = result.toString();
      if (doubleSlash >= 2) {
        result = "invalid number";
      }
    }
    return result;
  };

  this.getUnit = function(input) {
    var result;
    const unit = ["gal","l","lbs","kg","mi","km","GAL","L","MI","KM","LBS","KG"];
    result = input.match(/[a-zA-Z]+/g);
    result = result.join();
    let validUnit = (a) => {
      return a == result;
    };
    let validTest = unit.some(validUnit);
    if (!validTest) {
      result = "invalid unit";
    };
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    return expect[input.indexOf(initUnit.toLowerCase())];  
  };
  
  this.spellOutUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    let expect = ['gallons', 'liters', 'miles', 'kilometers','pounds','kilograms'];
    return expect[input.indexOf(initUnit.toLowerCase())];
  };
  
  this.convert = function(initNum, initUnit) {
    let convertUnit = ['l','gal','km','mi','kg','lbs']
    let convertRates = [1/3.78541,3.78541,1/1.60934,1.60934,1/0.453592,0.453592];
    return convertRates[convertUnit.indexOf(initUnit.toLowerCase())] * initNum;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result=initNum+' '+this.spellOutUnit(initUnit)+" converts to "+returnNum.toFixed(5)+" "+this.spellOutUnit(returnUnit);
    return result;
  };
};

module.exports = ConvertHandler;
