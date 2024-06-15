let display=document.querySelector('.display');
display.value='';
function displayVal(a){
    if(display.value=='0'){
        display.value='';
    }
    
    display.value+=a;
    // console.log('a')
    
}


var str="Raj"

function del(){
    let d=display.value;
    display.value=d.slice(0,d.length-1);
    // console.log(typeof(d));
}

function reset(){
    display.value='0';
}

function ans(){
    let d=display.value;
    display.value=d.replace('x','*');
    try{
        display.value=eval(display.value);
    }
    catch(err){
        alert('Input invalid')
    }

}