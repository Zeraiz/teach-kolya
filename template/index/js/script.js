//
// var contentObjHtml = document.getElementsByClassName('container');
// contentObjHtml[0].innerHTML = '';
var ui = {
    id: {
        firstValue: 'first',
        secondValue: 'second'
    }
    dsta: {
        first: 0,
        second: 0
    }

}

function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }
    if (event.which !== 0 && event.charCode !== 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }
    return null; // спец. символ
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