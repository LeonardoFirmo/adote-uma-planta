const searchImg = document.querySelector('#searchImg');
const search = document.querySelector('#search');
const nav = document.querySelector('nav');
const body  = document.body;




searchImg.addEventListener('click',()=>{
  nav.style.display='none'
  search.style.display='flex'
  search.focus()
})




body.addEventListener('click', e=>{
  if(e.target.id !== 'searchImg' && e.target.id !== 'search'){
    search.style.display='none'
    nav.style.display='flex'
    search.value=''
  }
})