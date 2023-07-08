import data from './data.json' assert { type: 'json' } ;

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const states = element.querySelectorAll('.state');

  let firstFood = document.querySelector('.food1');
  let secondFood = document.querySelector('.food2');
  let thirthFood = document.querySelector('.food3');
  let fourthFood = document.querySelector('.food4');
  let fifthFood = document.querySelector('.food5');
  let sixthFood = document.querySelector('.food6');
  let seventhFood = document.querySelector('.food7');
  let eighthFood = document.querySelector('.food8');
  let ninethFood = document.querySelector('.food9');
  let tenthFood = document.querySelector('.food10');
  let eleventhFood = document.querySelector('.food11')

  let text = document.querySelector('.text');
  

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        info.innerHTML = [
          '<div>',
            event.target.parentNode.getAttribute('data-iladi'),
          '</div>',
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + "px"
      info.style.left = event.pageX + 8 +  "px"
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  states.forEach(function(state, i) {
    state.addEventListener('click' || 'touch', function(e) {
      let current = e.currentTarget;
      // reset all prevously clicked except the current state
      reset_colors(current);
      current.classList.toggle('on');
      let x = e.target.parentNode.getAttribute('queue');
      if (e.target.tagName === 'path' && e.target.parentNode.id !== 'guney-kibris') {

      text.innerHTML = data[x][0];

       if(data[x][1].type === "yemek") {
        firstFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][1].href}>${data[x][1].name} </a>
            <img  class="foodImg" src=${data[x][1].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][1].type === "corba") {
        firstFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][1].href}>${data[x][1].name} </a>
            <img  class="foodImg" src=${data[x][1].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][1].type === "tatli") {
        firstFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][1].href}>${data[x][1].name} </a>
            <img  class="foodImg" src=${data[x][1].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        firstFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][1].href}>${data[x][1].name} </a>
            <img  class="foodImg" src=${data[x][1].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][2].type === "yemek") {
        secondFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][2].href}>${data[x][2].name} </a>
            <img  class="foodImg" src=${data[x][2].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][2].type === "corba") {
        secondFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][2].href}>${data[x][2].name} </a>
            <img  class="foodImg" src=${data[x][2].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][2].type === "tatli") {
        secondFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][2].href}>${data[x][2].name} </a>
            <img  class="foodImg" src=${data[x][2].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        secondFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][2].href}>${data[x][2].name} </a>
            <img  class="foodImg" src=${data[x][2].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][3].type === "yemek") {
        thirthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][3].href}>${data[x][3].name} </a>
            <img  class="foodImg" src=${data[x][3].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][3].type === "corba") {
        thirthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][3].href}>${data[x][3].name} </a>
            <img  class="foodImg" src=${data[x][3].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][3].type === "tatli") {
        thirthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][3].href}>${data[x][3].name} </a>
            <img  class="foodImg" src=${data[x][3].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        thirthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][3].href}>${data[x][3].name} </a>
            <img  class="foodImg" src=${data[x][3].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][4].type === "yemek") {
        fourthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][4].href}>${data[x][4].name} </a>
            <img  class="foodImg" src=${data[x][4].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][4].type === "corba") {
        fourthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][4].href}>${data[x][4].name} </a>
            <img  class="foodImg" src=${data[x][4].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][4].type === "tatli") {
        fourthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][4].href}>${data[x][4].name} </a>
            <img  class="foodImg" src=${data[x][4].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        fourthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][4].href}>${data[x][4].name} </a>
            <img  class="foodImg" src=${data[x][4].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][5].type === "yemek") {
        fifthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][5].href}>${data[x][5].name} </a>
            <img  class="foodImg" src=${data[x][5].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][5].type === "corba") {
        fifthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][5].href}>${data[x][5].name} </a>
            <img  class="foodImg" src=${data[x][5].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][5].type === "tatli") {
        fifthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][5].href}>${data[x][5].name} </a>
            <img  class="foodImg" src=${data[x][5].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        fifthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][5].href}>${data[x][5].name} </a>
            <img  class="foodImg" src=${data[x][5].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][6].type === "yemek") {
        sixthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][6].href}>${data[x][6].name} </a>
            <img  class="foodImg" src=${data[x][6].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][6].type === "corba") {
        sixthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][6].href}>${data[x][6].name} </a>
            <img  class="foodImg" src=${data[x][6].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][6].type === "tatli") {
        sixthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][6].href}>${data[x][6].name} </a>
            <img  class="foodImg" src=${data[x][6].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        sixthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][6].href}>${data[x][6].name} </a>
            <img  class="foodImg" src=${data[x][6].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][7].type === "yemek") {
        seventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][7].href}>${data[x][7].name} </a>
            <img  class="foodImg" src=${data[x][7].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][7].type === "corba") {
        seventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][7].href}>${data[x][7].name} </a>
            <img  class="foodImg" src=${data[x][7].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][7].type === "tatli") {
        seventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][7].href}>${data[x][7].name} </a>
            <img  class="foodImg" src=${data[x][7].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        seventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][7].href}>${data[x][7].name} </a>
            <img  class="foodImg" src=${data[x][7].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][8].type === "yemek") {
        eighthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][8].href}>${data[x][8].name} </a>
            <img  class="foodImg" src=${data[x][8].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][8].type === "corba") {
        eighthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][8].href}>${data[x][8].name} </a>
            <img  class="foodImg" src=${data[x][8].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][8].type === "tatli") {
        eighthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][8].href}>${data[x][8].name} </a>
            <img  class="foodImg" src=${data[x][8].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        eighthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][8].href}>${data[x][8].name} </a>
            <img  class="foodImg" src=${data[x][8].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][9].type === "yemek") {
        ninethFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][9].href}>${data[x][9].name} </a>
            <img  class="foodImg" src=${data[x][9].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][9].type === "corba") {
        ninethFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][9].href}>${data[x][9].name} </a>
            <img  class="foodImg" src=${data[x][9].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][9].type === "tatli") {
        ninethFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][9].href}>${data[x][9].name} </a>
            <img  class="foodImg" src=${data[x][9].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        ninethFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][9].href}>${data[x][9].name} </a>
            <img  class="foodImg" src=${data[x][9].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][10].type === "yemek") {
        tenthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][10].href}>${data[x][10].name} </a>
            <img  class="foodImg" src=${data[x][10].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][10].type === "corba") {
        tenthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][10].href}>${data[x][10].name} </a>
            <img  class="foodImg" src=${data[x][10].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][10].type === "tatli") {
        tenthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][10].href}>${data[x][10].name} </a>
            <img  class="foodImg" src=${data[x][10].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        tenthFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][10].href}>${data[x][10].name} </a>
            <img  class="foodImg" src=${data[x][10].image} width="222" height="175.8.8">
          `
        ]
       };

       if(data[x][11].type === "yemek") {
        eleventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_meal/favicon-16x16.png" alt="meal">
            <a  target=_blank href=${data[x][11].href}>${data[x][11].name} </a>
            <img  class="foodImg" src=${data[x][11].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][11].type === "corba") {
        eleventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_soup/favicon-16x16.png" alt="soup">
            <a  target=_blank href=${data[x][11].href}>${data[x][11].name} </a>
            <img  class="foodImg" src=${data[x][11].image} width="222" height="175.8.8">
          `
        ]
       } else if (data[x][11].type === "tatli") {
        eleventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_dessert/favicon-16x16.png" alt="dessert"> 
            <a  target=_blank href=${data[x][11].href}>${data[x][11].name} </a>
            <img  class="foodImg" src=${data[x][11].image} width="222" height="175.8.8">
          `
        ]
       } else  {
        eleventhFood.innerHTML = [
          ` <img src="/assets/foods-icons/favicon_io_drink/favicon-16x16.png" alt="drink"> 
            <a  target=_blank href=${data[x][11].href}>${data[x][11].name} </a>
            <img  class="foodImg" src=${data[x][11].image} width="222" height="175.8.8">
          `
        ]
       };
      }
    })
  })

  function reset_colors(exclude) {
    const activeStates = element.querySelectorAll('.on');
    activeStates.forEach(function(state, i) {
      if (state !== exclude) {
        state.classList.remove('on');
      }
    });
  }
}

svgturkiyeharitasi();