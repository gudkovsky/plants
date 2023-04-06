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


/* filter ver 1 */

// function filter() {
//   serviceList.addEventListener('click', event => {

//     const targetId = event.target.dataset.id;


//     switch(targetId) {

//       case 'garden':
//          gardenButton.classList.add('active');
//         lawnButton.classList.remove('active');
//         plantingButton.classList.remove('active');
//         items.forEach(item => {
//           if (item.classList.contains('garden')) {
//             item.classList.remove('unactive')
//             item.classList.add('active')

//           }
//            if (!item.classList.contains('garden')) {
//             item.classList.add('unactive')
//             item.classList.remove('active')
//           }
//         })
//         break;

//       case 'lawn':
//         gardenButton.classList.remove('active');
//         lawnButton.classList.add('active');
//         plantingButton.classList.remove('active');
//         items.forEach(item => {
//           if (item.classList.contains('lawn')) {
//             item.classList.remove('unactive')
//             item.classList.add('active')
//           }
//            if (!item.classList.contains('lawn')) {
//             item.classList.add('unactive')
//             item.classList.remove('active')
//           }
//         })
//         break;

//         case 'planting':
//           gardenButton.classList.remove('active');
//           lawnButton.classList.remove('active');
//           plantingButton.classList.add('active');
//           items.forEach(item => {
//             if (item.classList.contains('planting')) {
//               item.classList.remove('unactive')
//               item.classList.add('active')
//             }
//              if (!item.classList.contains('planting')) {
//               item.classList.add('unactive')
//               item.classList.remove('active')
//             }
//           })
//           break;

//     }

//     let service = document.getElementById('service');

//     service.onclick = function (e) {
//       // if (e.target === service) {
//       // gardenButton.classList.remove('active');
//       // lawnButton.classList.remove('active');
//       // plantingButton.classList.remove('active');
//       // }
//       items.forEach(item => {
//         if (item.classList.contains('unactive') && e.target === service) {
//           item.classList.remove('unactive')
//           item.classList.add('active')
//         }

//       })
// }
//   })
// }

// filter()

/* ACCORDEON */



const ACCORDEON = document.querySelector('.price__list');

// const handlePriceClick = () => {
//   ACCORDEON.addEventListener('click', (e) => {
//     if (e.target.classList.contains('price__link')) {
//       let clickedPrice = e.target;
//       clickedPrice.classList.toggle('accordeon--active')
//     }
//   })
// }

const pro = document.getElementById('pro');
const basics = document.getElementById('basics')
const standard = document.getElementById('standard')

const handlePriceClick = () => {
ACCORDEON.addEventListener('click', event => {

    const targetId = event.target.dataset.id;

    switch(targetId) {

        case 'pro':

          pro.classList.toggle('accordeon--active');
          basics.classList.remove('accordeon--active');
          standard.classList.remove('accordeon--active');
          break;

          case 'basics':

            pro.classList.remove('accordeon--active');
            basics.classList.toggle('accordeon--active');
            standard.classList.remove('accordeon--active');
            break;

            case 'standard':

              pro.classList.remove('accordeon--active');
              basics.classList.remove('accordeon--active');
              standard.classList.toggle('accordeon--active');
              break;
    }
  })
}



handlePriceClick();

/* custom drop-down
==========================
*/

const dropdown = document.querySelector('.contacts__cities')
const select = document.querySelector('.select')
const menu = document.querySelector('.cities__list')
const option = document.querySelectorAll('.cities__city')

select.addEventListener('click', () => {
  select.classList.toggle('active')
  dropdown.classList.toggle('dropdown--active')

})

option.forEach(option => {
  option.addEventListener('click', () => {
    select.innerText = option.innerText;
    select.classList.toggle('active')
    option.classList.toggle('active')
    document.querySelector('.contacts__wrapper').classList.add('active')
    dropdown.classList.remove('dropdown--active')

  })
})


const cana = document.getElementById('cana')
const yonkers = document.getElementById('yonkers')
const nyc = document.getElementById('nyc')
const sherrill = document.getElementById('sherrill')





function adress() {
  menu.addEventListener('click', event => {

    const targetId = event.target.dataset.id;

    switch(targetId) {

      case 'canandaigua':
        cana.classList.add('active');
        nyc.classList.remove('active');
        sherrill.classList.remove('active');
        yonkers.classList.remove('active');
        break;

        case 'nyc':
          cana.classList.remove('active');
          nyc.classList.add('active');
          sherrill.classList.remove('active');
          yonkers.classList.remove('active');
          break;

          case 'sherrill':
            cana.classList.remove('active');
            nyc.classList.remove('active');
            sherrill.classList.add('active');
            yonkers.classList.remove('active');
            break;

            case 'yonkers':
              cana.classList.remove('active');
              nyc.classList.remove('active');
              sherrill.classList.remove('active');
              yonkers.classList.add('active');
              break;

    }

  })
}


adress()


/* filter version 2 */

let activeCount = 0;
const buttons = document.querySelectorAll('.service__link');

for (let button of buttons) {
  button.addEventListener('click', function() {
    if (!this.classList.contains('active') && activeCount === 2) {
      buttons.forEach((btn) => btn.classList.remove('active'));
      activeCount = 0;
    }
    if (this.classList.contains('active')) {
      activeCount--;
    } else if (activeCount < 2) {
      activeCount++;
    }
    this.classList.toggle('active');
    changeBlur(activeCount);
  })
}



function changeBlur(activeCount) {
  if (activeCount > 0) {
    buttons.forEach((btns) => {

      if (btns.classList.contains('active')) {
      document.querySelectorAll(`.service__card.${btns.id}`).forEach((card) => card.classList.remove('unactive'))}
      else {
      document.querySelectorAll(`.service__card.${btns.id}`).forEach((card) => card.classList.add('unactive'))}

      })
  } else {
    document.querySelectorAll('.service__card').forEach((card) => card.classList.remove('unactive'));
  }

      let service = document.getElementById('service');

//     service.onclick = function (e) {
//       if (e.target === service) {
//       gardenButton.classList.remove('active');
//       lawnButton.classList.remove('active');~
//       plantingButton.classList.remove('active');
//       }
//       items.forEach(item => {
//         if (e.target === service) {
//           item.classList.remove('unactive')
//           item.classList.add('active')
//         }

//       })
// }
}




// buttons.forEach((btns) => {

// if (btns.classList.contains('active')) {
// document.querySelectorAll(`.service__card.${btns.id}`).forEach((card) => card.classList.remove('unactive'))}
// else {
// document.querySelectorAll(`.service__card.${btns.id}`).forEach((card) => card.classList.add('unactive'))}

// })
