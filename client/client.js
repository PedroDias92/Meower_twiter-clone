console.log("ola mundo")

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const mewsElement = document.querySelector('.mews')
const API_URL = 'http://localhost:5000/mews';

//showing all mews
loadingElement.style.display = ''
listAllMews();
loadingElement.style.display = 'none'

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const mew ={
        name,
        content
    }
    console.log(mew)
    form.style.display = 'none'
    loadingElement.style.display = ''

    fetch(API_URL,{
        method: 'POST',
        body: JSON.stringify(mew),  //transform to json
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(createdMew => {
          console.log(createdMew)
          form.reset();
          //hides the form for 30 sec
          setTimeout(()=>{
            form.style.display = '';
          },30000);
          loadingElement.style.display = 'none';
          listAllMews();
          
      })
})

function listAllMews(){
    mewsElement.innerHTML='';  //when submit reloads all the mews
    fetch(API_URL)
        .then(response => response.json())
        .then(mews =>{
            console.log(mews)
            mews.reverse();
            mews.forEach(mew =>{
                const div = document.createElement('div');
                
                const header = document.createElement('h3');
                header.classList.add("header");
                header.textContent = mew.name;
                
                const contents = document.createElement('p');
                contents.classList.add("contents");
                contents.textContent = mew.content; 

                const date = document.createElement('small');
                date.classList.add("date");
                date.textContent = new Date(mew.created).toUTCString(); 

                div.appendChild(header);
                div.appendChild(contents);
                div.appendChild(date);
                div.appendChild(document.createElement("hr"));
                mewsElement.appendChild(div);
            });
        });
}