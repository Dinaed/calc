let firstNum = '';
let secocndNum = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];
const plusMinus = '+/-';
const percent = '%';
const out = document.querySelector('.calc__screen p');

function clearAll() {
  firstNum = '';
  secocndNum = '';
  sign = '';
  finish = false;
  out.textContent = '0';
}

document.querySelector('.ac').addEventListener('click', clearAll);
document.querySelector('.calc__buttons').addEventListener('click', (event) => {
  if(!event.target.classList.contains('calc__buttons-btn')) return;
  if(event.target.classList.contains('ac')) return;
  out.textContent = '';
  
  const key = event.target.textContent;
  if(digit.includes(key)){
    if( secocndNum === '' && sign === ''){
      firstNum+=key;
      out.textContent = firstNum;
    }
    else if (firstNum !== '' && secocndNum !== '' && finish){
      secocndNum = key;
      finish = false;
      out.textContent = secocndNum;
    }
    else {
      secocndNum+= key;
      out.textContent = secocndNum;
    }
    return;
  }
  if(action.includes(key)){
    sign = key;
    out.textContent = sign;
    return;
  }
  if(key === plusMinus){
    if(firstNum !== '' && secocndNum === ''){
      firstNum = -firstNum;
      out.textContent = firstNum;
    }
    else if(firstNum !== ''){
      secocndNum = -secocndNum;
      out.textContent = secocndNum;
    }
    return;
  }
  if(key === percent){
    if(firstNum !== '' && secocndNum !== ''){
      secocndNum = firstNum * secocndNum / 100;
      out.textContent = secocndNum;
      console.log(firstNum, sign, secocndNum);
    }
  }
  if(key === '=') {
    if(secocndNum === ''){
      secocndNum = firstNum;
    }
    switch(sign){
      case '+':
        firstNum = (+firstNum) + (+secocndNum);
        break;
      case '-':
        firstNum = firstNum - (secocndNum);
        break;
      case '*':
        firstNum = firstNum * (secocndNum);
        break;
      case '/':
        if(secocndNum == '0'){
          out.textContent = 'Error!'
          firstNum = '';
          secocndNum = '';
          sign = '';
          return
        }
        firstNum = firstNum / (secocndNum);
        break;
    }
    finish = true;
    out.textContent = String(firstNum).slice(0, 9);
    console.log(firstNum, sign, secocndNum);
  }
});

