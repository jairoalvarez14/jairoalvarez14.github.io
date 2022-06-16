const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {

    const todoList = document.getElementById('to-do-list');
    const todosTempleate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTempleate.join('');
    const elementos = document.querySelectorAll('#to-do-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizaTodos(todos);
            render();
        })
    })
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

window.onload = () => {
    render();
    const form = document.getElementById('to-do-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('to-do');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos);
        render();
    }
}