let output = document.getElementById('out');
let first = '';
let second ='';
let _sign ='';
function char(a){
    if (first != '' && _sign !='')
        second += a.value;
    output.value += a.value;

}

function sign(temp){
    first = document.getElementById('out').value;
    output.value += temp.value;
    _sign = temp.value;
    document.getElementById('out').style.color = 'gray';
}

function cl(){
    output.value = '';
    first ='';
    second ='';
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
        second = first * second;
    else if (_sign === '/') 
        second = first / second;
    else if (_sign === '+')
        second = Number(first) + Number(second);
    else if (_sign === '-')
        second = first - second;

    output.value = second;
        
    first = second;
    second ='';
}