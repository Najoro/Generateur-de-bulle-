const h3 = document.querySelector('h3')
let compte = 0

function bulleAnimate() {
     const bulle = document.createElement('span');
     document.body.appendChild(bulle);
     bulle.classList.add('bulle')
     
     let aleatoire = Math.random() * 200 + 100 + 'px';
     bulle.style.width = aleatoire
     bulle.style.height = aleatoire
     
     bulle.style.top = Math.random() * 100 + 50 + "%"
     bulle.style.left = Math.random() * 100 + "%"   
     
     let plusMoin = Math.random() > 0.5 ? 1 : -1;
     bulle.style.setProperty('--left', Math.random() * 100 * plusMoin + "%")

     bulle.addEventListener('click', () => {
          compte++
          h3.textContent = compte
          bulle.remove()
     })
     
     h3.addEventListener('click' , ()=> {
          h3.textContent = '0'
          compte = 0
     })
     
     }

setInterval(bulleAnimate , 100);