const h2 = document.querySelector('.main h2')
console.log(h2)
const text = 'Aimable'

let i = 0;
const timer = setInterval(() => {
    if (i == text.length) {
        clearInterval(timer)
    }
    else {
        h2.textContent += text[i]
    }
    i++;
}, 120);

const p = document.querySelector('.animated-text p')
const text1 = 'A junior software enginner';
let m = 0;
const timer1 = setInterval(() => {
    if (m == text1.length) {
        clearInterval(timer1);
    } else {
        p.textContent += text1[m]
    }
    m++;
}, 100);