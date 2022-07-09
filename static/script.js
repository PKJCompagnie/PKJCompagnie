window.onpopstate = function(event) {
    show(event.state.id)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.onclick = () => {
            show(button.dataset.id);
            history.pushState({id: button.dataset.id}, '', `${button.dataset.id}`)
        }
    })
})

function show(id) {
    document.querySelectorAll('.main-view').forEach(view => {
        view.style.display = 'none';
    })

    document.querySelector(`#${id}`).style.display = 'block';
}