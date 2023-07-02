let lis =document.querySelectorAll('ul li');
let div =document.querySelector('div');
if(window.localStorage.getItem('color'))
{
    // store the current color on the div after reload the page
    div.style.backgroundColor=window.localStorage.getItem('color');
 // remove active class form all lis
    lis.forEach((li)=>{
        li.classList.remove('active');
    })
    // add the color in the local-storage in the active class
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active');
}
else
{
    div.style.backgroundColor='#eee';
}
lis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        // remove active class form all lis
        lis.forEach((li)=>{
            li.classList.remove('active');
        })
        // add active class which i clicked on 
        e.target.classList.add('active');
        // add the current color into the div
        div.style.backgroundColor=e.target.dataset.color;
        // store the current color in the local-storage
        window.localStorage.color=e.target.dataset.color;
    })
})

