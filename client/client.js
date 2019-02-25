console.log("ola mundo")

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const mewsElement = document.querySelector('.mews')
const loadMoreElement = document.querySelector('#loadMoreElement')
//const API_URL = window.location.hostname ==="localhost" ? 'http://localhost:5000/mews' : 'meower-api-pedro.now.sh'
const API_URL = 'http://localhost:5000/mews' ;

let skip=0;
let limit=5;



window.addEventListener("scroll",()=>{
    console.log("scrolling...")
    const top = loadMoreElement.offsetTop;
    console.log(top)
});

function loadMore(){
    console.log("scroling...")
  //  skip +=limit;
  //  listAllMews(false);
}


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

function listAllMews(reset= true){
    if(reset){
        mewsElement.innerHTML='';
        skip =0;
    }
    //mewsElement.innerHTML='';  //when submit reloads all the mews
    fetch(`${API_URL}?skip=${skip}&limit=${limit}`)
        .then(response => response.json())
        .then(result =>{
            
            console.log(result)
            result.mews.reverse();
            result.mews.forEach(mew =>{
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
            if(!result.meta.has_more){
                loadMoreElement.style.visibility="hidden";
            }else{
                loadMoreElement.style.visibility="visible";
            }
        });
}