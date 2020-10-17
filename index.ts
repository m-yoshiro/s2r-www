import selector2Regexp from "selector-2-regexp";

document.addEventListener('DOMContentLoaded', () => {
  const result = document.querySelector('.result');
  const inputSelector = document.getElementById('selector');

  inputSelector.addEventListener('input', (evt) => {
    const { target } = evt;

    if (!(target instanceof HTMLInputElement)) {
      throw new Error("errrrrrr");
    }

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
