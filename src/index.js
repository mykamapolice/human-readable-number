module.exports = function toReadable (number) {

    var numb = ['one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight',
   'nine', 'ten', 'eleven', 'twelve',
   'thirteen', 'fourteen', 'fifteen', 
   'sixteen', 'seventeen', 'eighteen', 
   'nineteen', 'twetnty' ];

   var numbtens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   var tens = Math.trunc([number / 10]);
   var first = number % 10;
   var h = ' hundred ';
   var hh = ' hundred';
   var thirnd = Math.trunc([number / 100]);
   var second = ((Math.trunc(number / 10)) % 10 );
   var x = number % 100

    if (number === 0) {
        return 'zero';
    };


    if (number >= 0 && number < 20) {
        return numb[number - 1];
    } else if (number >= 20 && number <100) {
        if (first !== 0) {
            return numbtens[tens - 2] + ' ' +  numb[first - 1];
        } else {
            return numbtens[tens - 2];
        }  
    };


    if (number >= 100) {
        if (first !== 0) {
            if (second === 0) {
                return numb[thirnd - 1]  + h +  numb[first - 1];
            } else if (second === 1) {
                return numb[thirnd - 1]  + h +  numb[x - 1];
            } else {
                return numb[thirnd - 1]  + h +  numbtens[second - 2] + " " + numb[first - 1];
            }
        } else if (first === 0) {
            if (second === 0) {
                return numb[thirnd - 1] + hh;
            } else if (second === 1) {
                return numb[thirnd - 1]  + h + numb[x - 1];
            } else {
                return numb[thirnd - 1]  + h +  numbtens[second - 2];
            }
        }
    };
}