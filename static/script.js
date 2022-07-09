window.onpopstate = function(event) {
    try{
        show(event.state.id)
    }
    catch{
        show('home-view')
    }
}

if (window.performance) {
  console.log("window.performance works fine on this browser");
}
console.log(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.log( "This page is reloaded" );
} else {
  console.log( "This page is not reloaded");
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