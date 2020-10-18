import selector2Regexp from "selector-2-regexp";
import Prism from "prismjs";

document.addEventListener('DOMContentLoaded', () => {
  const result = document.getElementById('result');
  const inputSelector = document.getElementById('selector');
  const copyButton = document.querySelector('.copy');

  inputSelector.addEventListener('input', (evt) => {
    const { target } = evt;

    if (!(target instanceof HTMLInputElement)) {
      throw new Error("errrrrrr");
    }

    let output = '';
    if(target.value) {
      
      try {
        const code = selector2Regexp(target.value);
        const html = Prism.highlight(code, Prism.languages.javascript, 'regex');
        output = html;
      } catch (error) {
        console.error(error);
      }
    }
    result.innerHTML = output;
  });

  copyButton.addEventListener('click', (evt) => {
    const { target } = evt;

    if (!(target instanceof HTMLButtonElement)) {
      throw new Error("butttttttt");
    }

    if (!target.dataset.target) {
      throw new Error("butttttttt");
    }

    const targetId = target.dataset.target;
    const resource = document.getElementById(targetId);

    if (!resource) {
      throw new Error("butttttttt");
    }
    
    navigator.clipboard.writeText(resource.textContent).then(
      () => { console.log('copied!!')},
      () => {}
    );
  })
})
