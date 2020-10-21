const addform =document.querySelector('.add');
const list =document.querySelector('.todos');
const search =document.querySelector('.search input');
const generateTemplate=todo=>{   //we can also take any variable in place of todo 
    const html=`
    <li class="list-group-item d-flex justify-content-between align-item-center">
<span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>    
` ;
     list.innerHTML+=html; // putting inside Html
}; //adding list
     
addform.addEventListener( 'submit',e=>{
    e.preventDefault();
    const todo = addform.add.value.trim();
    if(todo.length){
    generateTemplate(todo);
    }
    addform.reset();
}); // deleting list
list.addEventListener('click',e=>{
    e.preventDefault();
    if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();
    }
});

// searching list
  const filtertodos = (term) => {
      
      Array.from(list.children)
      .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
      .forEach((todo)=> todo.classList.add('filtered'));
     Array.from(list.children)
     .filter((todo)=> todo.textContent.toLowerCase().includes(term))
     .forEach((todo)=> todo.classList.remove('filtered')); 
  };


search.addEventListener('keyup',()=>{
    const term =search.value.toLowerCase().trim();
    filtertodos(term);
})