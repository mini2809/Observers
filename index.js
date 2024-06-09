const list = document.getElementById("supply-list");
 function addInList(){
    let nextElemntId = list.children.length;
    let listItem = document.createElement('li');
    listItem.id = "item"+nextElemntId;
    listItem.innerHTML = document.getElementById("input").value;
    list.appendChild(listItem);
}

const observer = new MutationObserver((mutation)=>{
    console.log(mutation);
});
observer.observe(list,{
    childList: true
});