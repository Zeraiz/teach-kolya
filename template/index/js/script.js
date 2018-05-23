//
// var contentObjHtml = document.getElementsByClassName('container');
// contentObjHtml[0].innerHTML = '';
var ui = {
    id: {
        firstValue: 'first',
        secondValue: 'second'
    },
    data: {
        first: 0,
        second: 0
    }

};
document.getElementById("fieldForInput").onkeypress=function (e) {
    var charCode = getChar(e);

    if (charCode >47 && charCode < 58 || charCode >93 && charCode < 112 || charCode == 13   ){
        return true;
    }else{
        return false;
    }
    function getChar(event) {
        if (event.which == null) { // IE
            if (event.keyCode < 32) return null; // спец. символ
            return event.keyCode
        }
        if (event.which !== 0 && event.charCode !== 0) { // все кроме IE
            if (event.which < 32) return null; // спец. символ
            return event.which; // остальные
        }
        return null; // спец. символ
    }
}



function calculate(first, second, action) {
    var result;
    switch (action){

        case ('+'):
            result=first + second;
            break;
        case ('-'):
            result=first - second;
            break;
        case ('*'):
            result=first * second;
            break;
        case ('/'):
            result=first / second;
            break;
        case ('%'):
            result=first % second;
            break;
        case ('^'):
            result=first ^ second;
            break;
        default:
            throw "нет такого действия";
    }
    return result;
}
