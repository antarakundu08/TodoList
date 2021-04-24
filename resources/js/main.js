//const list=document.getElementById("todo");
let data = localStorage.getItem("TODO");
window.onload=function(){
    const list=document.getElementById("todo");
    var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
        todo: []};
    document.getElementById("add").addEventListener('click',function(){
        var value=document.getElementById("item").value;
        if(value){
         //   console.log(value);
            document.getElementById("item").value="";
           // var list=document.getElementById("todo");            
             addItemTodo(value);
        } 
        else{
            alert("You must write something!");
        }
    });
    function loadList(array){
        array.forEach(function(item){
            addToDo(item.name, item.id, item.done, item.trash);
        });
    }
    
    // clear the local storage
    // clear.addEventListener("click", function(){
    //     localStorage.clear();
    //     location.reload();
    // });

    function addToDo(toDo, id, done, trash){
    
        if(trash){ return; }
        
        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";
        
        const item = `<ul class="item">
                        <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                      </ul>
                    `;
        
        const position = "beforeend";
        
        list.insertAdjacentHTML(position, item);
    }
    function addItemTodo(text){
       
        
        var item=document.createElement("ul");
        item.appendChild(document.createElement("center"))
        item.innerText=text;
         var remove = document.createElement("button");
         remove.classList.add("remove");
         remove.onclick = function() {//console.log(this.parentNode);
        this.parentNode.parentNode.removeChild(this.parentNode);}
         item.appendChild(remove);
         if(text!=null || text!="" ||text!=" " ){
            list.insertBefore(item, list.childNodes[0]);
           // console.log(item);
         }
        
        else
        console.log(document.getElementById("todo"));
    }
    
    
  };//window.onload=()=>{
    
// }
