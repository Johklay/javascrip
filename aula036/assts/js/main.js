const bloco = document.querySelector('.bloco');
const paragrafos = bloco.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
    p.style.fontFamily = 'Arial sans-serif'
}