/*var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
})
*/
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className === 'delete') {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
})

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    deleteBtn.className = 'delete';
    bookName.className = 'name';

    document.forms['add-book'].querySelector('input[type="text"]').value = null;

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});

// search box code//
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})

//Tabbed Content//
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel'); 
tabs.addEventListener('click', function(e){
    if(e.target.tagName = 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel== targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})
var arr = [Ass, Raghav, Kalaage, Kalicharan, Sambhog, Vahir];

