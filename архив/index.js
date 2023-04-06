let list = document.getElementById('nav');
let toggle = document.getElementById('toggle');

toggle.onclick = function() {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
}

document.onclick = function(e){
  if(e.target.id !== 'nav' && e.target.id !== 'toggle') {
    toggle.classList.remove('active');
    nav.classList.remove('active');
  }
}

/* ПРИ КЛИКЕ НА service__link им проставляется класс active, если нажато сразу 3 - фильтр снимается */

let serviceList = document.querySelector('.service__list');
let items = document.querySelectorAll('.service__card')

let gardenButton = document.getElementById('garden');
let lawnButton = document.getElementById('lawn');
let plantingButton = document.getElementById('planting');




function filter() {
  serviceList.addEventListener('click', event => {

    const targetId = event.target.dataset.id;


    switch(targetId) {

      case 'garden':
        gardenButton.classList.toggle('active');
        lawnButton.classList.remove('active');
        plantingButton.classList.remove('active');
        items.forEach(item => {
          if (item.classList.contains('garden')) {
            item.classList.remove('unactive')
            item.classList.add('active')

          }
           if (!item.classList.contains('garden')) {
            item.classList.add('unactive')
            item.classList.remove('active')
          }
        })
        break;

      case 'lawn':
        gardenButton.classList.remove('active');
        lawnButton.classList.toggle('active');
        plantingButton.classList.remove('active');
        items.forEach(item => {
          if (item.classList.contains('lawn')) {
            item.classList.remove('unactive')
            item.classList.add('active')
          }
           if (!item.classList.contains('lawn')) {
            item.classList.add('unactive')
            item.classList.remove('active')
          }
        })
        break;

        case 'planting':
          gardenButton.classList.remove('active');
          lawnButton.classList.remove('active');
          plantingButton.classList.toggle('active');
          items.forEach(item => {
            if (item.classList.contains('planting')) {
              item.classList.remove('unactive')
              item.classList.add('active')
            }
             if (!item.classList.contains('planting')) {
              item.classList.add('unactive')
              item.classList.remove('active')
            }
          })
          break;



    }

    let service = document.getElementById('service');

    service.onclick = function (e) {
      // if (e.target === service) {
      // gardenButton.classList.remove('active');
      // lawnButton.classList.remove('active');
      // plantingButton.classList.remove('active');
      // }
      items.forEach(item => {
        if (item.classList.contains('unactive') && e.target === service) {
          item.classList.remove('unactive')
          item.classList.add('active')
        }

      })
}
  })
}



filter()

