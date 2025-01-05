document.querySelector('#add').addEventListener('click', function () {
    let temp=document.querySelector('#task').value;
    if(temp=="") {alert("please enter a task");return;}
    let li = document.createElement('li');
    li.style.border = "2px solid white";
    li.style.borderRadius = "10px"
    li.style.padding = "10px";
    li.style.textAlign = "center";
    li.style.margin = "5px auto";
    li.style.width = "200px"; 
    li.style.display = "block"; 

    li.appendChild(document.createTextNode(document.querySelector('#task').value));
    let ol = document.querySelector('.ol')
    ol.appendChild(li);
    document.querySelector('#task').value = '';
})

document.querySelector('#remove').addEventListener('click', function () {
    const task = document.querySelector('#task').value.trim().toLowerCase();

    const ol = document.querySelector('.ol')

    const items = document.querySelectorAll('li');

    let found = false;
    items.forEach((item) => {
        if (item.textContent.trim().toLowerCase() === task) {
            ol.removeChild(item);
            found = true;
        }
    });
    if (!found) {
        alert('task not found in the list.');
    }
    document.querySelector('#task').value = '';
})

//edit a task by double click

document.querySelector('.ol').addEventListener('dblclick', function (event) {
    if (event.target.tagName === 'LI') {
        const newText = prompt('Edit your task:', event.target.textContent);
        if (newText) {
            event.target.textContent = newText;
        }
    }
});