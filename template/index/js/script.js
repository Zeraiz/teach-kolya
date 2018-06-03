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
document.getElementById("fieldForInput").onkeypress = function (e) {
    var charCode = getChar(e);
    console.log(e);
    switch (true) {
        case(charCode === 13):
            parseString();
            return false;
        case(charCode > 47 && charCode < 58):
        case(checkSign(charCode)):
            return true;
        default:
            return false;
    }
    function getChar(event) {
        if (event.which == null) { // IE
            return event.keyCode
        }
        if (event.which !== 0 && event.charCode !== 0) { // все кроме IE
            return event.which; // остальные
        }
        return null; // спец. символ
    }
};

function checkSign(code){
    switch(true){
        case(code === 95):
        case(code === 43):
        case(code === 42):
        case(code === 47):
        case(code === 45):
            return true;
        default:
            return false;
    }
}

function parseString() {
    var el = document.getElementById("fieldForInput"),
        elValue = el.value, i = 0, isSign = false;
    while(!isNaN(elValue.charCodeAt(i))){
        if(checkSign(elValue.charCodeAt(i))){
            if(isSign !== false){
                el.value = elValue.substring(0, i)+ elValue.substring(i+1);
                i--;
            }
            isSign = true;
        }else{
            isSign = false;
        }
        i++;
        elValue = el.value
    }
}



}

function calculate(first, second, action) {
    var result;
    switch (action) {

        case ('+'):
            result = first + second;
            break;
        case ('-'):
            result = first - second;
            break;
        case ('*'):
            result = first * second;
            break;
        case ('/'):
            result = first / second;
            break;
        case ('%'):
            result = first % second;
            break;
        case ('^'):
            result = first ^ second;
            break;
        default:
            throw "нет такого действия";
    }
    return result;
}
