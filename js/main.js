var elForm = document.querySelector('.js-form')
var elInput = document.querySelector('.js-input')
var elSelekt = document.querySelector('.js-select')
var elList = document.querySelector('.js-list');



let renderFuns = ( arrey,node) =>{
    node.innerHTML = '';
    arrey.forEach((item)=>{
        let elItem = document.createElement('li');
        elItem.setAttribute('class','text-center col-3 ms-5 lg-col-3 border  p-0 g-5 border rounded bg-dark')
        let elImg = document.createElement('img');

        elImg.src = item.flags.svg
        elImg.setAttribute('width','100%')
        elImg.setAttribute('class','rounded-top')


     

        let elTitle = document.createElement('h2');
        elTitle.textContent = item.name.common
        let elTitle2 = document.createElement('h6');
        elTitle2.textContent = `Region: ${item.region}`

        let elTitle3 = document.createElement('h6');
        elTitle3.textContent = `Capital: ${item.capital}`

        let elTitl4 = document.createElement('h6');
        elTitl4.textContent = `languages = ${item.languages.eng}`

        elItem.appendChild(elImg)
        elItem.appendChild(elTitle)
        elItem.appendChild(elTitle2);
        elItem.appendChild(elTitle3);
        elItem.appendChild(elTitl4);

        node.appendChild(elItem)
        elInput.value = '';

    })
};


async function genratr (){


    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    renderFuns(data,elList)

    
}
genratr()
console.log(elSelekt);


elSelekt.addEventListener('change',()=>{
    if(elSelekt.value == 'all'){
        async function genratr (){


            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            renderFuns(data,elList)
            
        }
        genratr()
    }
  
    if (elSelekt.value == 'Afrca') {
        async function genratr (){


            const response = await fetch('https://restcountries.com/v3.1/region/africa');
            const data = await response.json();
            renderFuns(data,elList)
            
        }
        genratr()
         
      }
      
    if (elSelekt.value == 'asia') {
        async function genratr (){


            const response = await fetch('https://restcountries.com/v3.1/region/asia');
            const data = await response.json();
            renderFuns(data,elList)
            
        }
        genratr()
         
      }
      if (elSelekt.value == 'Europa') {
        async function genratr (){


            const response = await fetch('https://restcountries.com/v3.1/region/europe');
            const data = await response.json();
            renderFuns(data,elList)
            
        }
        genratr()
         
      }


})

elForm.addEventListener('submit',function(evt){
    evt.preventDefault();

    elList.innerHTML = ''

if(elInput.value !== ''){
    async function genratr (){


        const response = await fetch(`https://restcountries.com/v3.1/name/${elInput.value}`);
        const data = await response.json();
        renderFuns(data,elList)
        
    }
    genratr()
}
   


    if(elInput.value == ''){
        async function genratr (){
    
    
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            renderFuns(data,elList)
            
        }
        genratr()
       
    }
     

})