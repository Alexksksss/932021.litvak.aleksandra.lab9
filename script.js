let output = document.getElementById('out');
let first = '';
let second ='';
let _sign ='';
function char(a){
    if (first != '' && _sign !='') {
        if (a.value === '.' && second.includes('.')) {
            alert('Ошибка ввода: нельзя использовать несколько точек подряд');
            return;
        }
        if (a.value === '.' && second.indexOf('.') !== second.lastIndexOf('.')) {
            alert('Ошибка ввода: нельзя ввести число с несколькими точками');
            return;
        }
        second += a.value;
    } else {
        if (a.value === '.' && output.value.endsWith('.')) {
            alert('Ошибка ввода: нельзя использовать несколько точек подряд');
            return;
        }
        if (a.value === '.' && first.indexOf('.') !== first.lastIndexOf('.')) {
            alert('Ошибка ввода: нельзя ввести число с несколькими точками');
            return;
        }
        first += a.value;
    }
    output.value += a.value;
}


function sign(temp){
    if (_sign != '' && second=='') {
        alert('Ошибка ввода: повторение арифметического знака');
        return;
    } 
    else {
        first = output.value;
        output.value += temp.value;
        _sign = temp.value;
    }
    document.getElementById('out').style.color = 'gray';
}

function cl(){
    output.value = '';
    first ='';
    second ='';
    _sign = '';
}

function del(){
    let text = document.getElementById('out');
    let d = text.value;
    let temp = d.slice(0, -1);
    if(second != '')
        second = second.slice(0,-1);
    else
        _sign='';
    output.value = temp;
}


function equal(){
    let text = document.getElementById('out').value;
    document.getElementById('out').style.color = 'black';


    if (_sign === '*') 
        second = parseFloat(first) * parseFloat(second);
    else if (_sign === '/') 
        second = parseFloat(first) / parseFloat(second);
    else if (_sign === '+')
        second = parseFloat(first) + parseFloat(second);
    else if (_sign === '-')
        second = parseFloat(first) - parseFloat(second);

    output.value = second;
        
    first = second;
    second ='';
    _sign = '';
}