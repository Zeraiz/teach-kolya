/* var obj = {
    lowRegard: '200',
    middleRegard: '300',
    higherRegard: '400'
};

var contentObjHtml = document.getElementsByClassName('container');
contentObjHtml[0].innerHTML = '';

for (var key in obj) {
    var newElement = "<div><span id='regard'>Зарплата: " + key + "</span> <span id='volume'>" + obj[key] + " - долларов</span></div>";
    contentObjHtml[0].innerHTML += newElement;
} */

// /**
//  * Получение контейнера для элементов
//  * @type {HTMLCollectionOf<Element>}
//  */
// var contentObjHtml = document.getElementsByClassName('container');
// /**
//  * Обнуляем значение в доме (которое там было)
//  * @type {string}
//  */
// contentObjHtml[0].innerHTML = '';
//
// var arr = [2, 5, 9, 15, 0, 4], i = 0;
// /**
//  * Цикл для вывода значений из массива, котороые больше 3 и меньше 10
//  */
// for (i ; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         var newElement = "<div><span id='volume'>" + arr[i] + " - значение точно больше 3 и меньше 10</span></div>";
//         contentObjHtml[0].innerHTML += newElement;
//     }
// }

/*
var contentObjHtml = document.getElementsByClassName('container');
contentObjHtml[0].innerHTML = '';

var string = '';
var arr = [10, 20, 30, 534, 923123213];
for(var i = 0; i < arr.length; i++){
    var resultString = (arr[i] + string);
    resultString = resultString.charAt(0);
    if(resultString === '1' || resultString === '2' ||  resultString === '3'){
        var newElement = "<div><span id='volume'>" + arr[i] + " - значение</span></div>";
        contentObjHtml[0].innerHTML += newElement;
    }
}*/
/*
var date = new Date(),
valDay = date.getDay();
var arDayWeek = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
var contentObjHtml = document.getElementsByClassName('container');
contentObjHtml[0].innerHTML = '';
for(var i = 0; i < arDayWeek.length; i++){
        var style = '';
        if(i === valDay){
            style = 'font-style: italic;';
        }
        var newElement = "<div><span id='volume' style='" + style +"'>" + arDayWeek[i] + "</span></div>";
        contentObjHtml[0].innerHTML += newElement;

}*/
var n = 1000, counterIteration = 0, lastValue = 0;

while (n > 50) {
    n /= 2;
    counterIteration++;
    lastValue = n;
}

var contentObjHtml = document.getElementsByClassName('container');
contentObjHtml[0].innerHTML = '';
var newElement = "<div>" +
    "<span id='lastValue'>" + lastValue + " - последнее значение</span> " +
    "<span id='counterIteration'>" + counterIteration + " -  всего итераций</span>" +
    "</div>";
contentObjHtml[0].innerHTML += newElement;