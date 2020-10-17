import selector2Regexp from "selector-2-regexp";

document.addEventListener('DOMContentLoaded', () => {
  const result = document.querySelector('.result');
  const inputSelector = document.getElementById('selector');
  
  inputSelector.addEventListener('input', (evt) => {
    console.log(evt.target.value);
    console.log(selector2Regexp('.button'));
    const { target } = evt;

    let output = '';
    if(target.value) {
      
      try {
        output = selector2Regexp(target.value);
      } catch (error) {
        console.error(error);
      }
    }

    result.textContent = output;
  })
})
