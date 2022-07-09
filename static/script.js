// User undo the page
window.onpopstate = function(event) {
    try{
        show(event.state.id)
    }
    catch{
        show('home-view')
    }
}


// Main DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.onclick = () => {
            show(button.dataset.id);
            console.log("Changed 2")
            history.pushState({id: button.dataset.id}, '', '')
        }
    })
})


// Show div function
function show(id) {
    document.querySelectorAll('.main-view').forEach(view => {
        view.style.display = 'none';
    })

    document.querySelector(`#${id}`).style.display = 'block';
}