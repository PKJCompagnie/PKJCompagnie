// Const
const IMAGES = ['basket.JPG', 'foo.jpg', 'bar.jpg', 'baz.jpg']
let image_index = 0

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
    // Default home-view set up
    bullets(IMAGES.length)
    show('home-view')
    
    // Giving function to navigation button
    document.querySelectorAll('.nav-button').forEach(button => {
        button.onclick = () => {
            show(button.dataset.id);
            history.pushState({id: button.dataset.id}, '', '')
        }
    })

    // Giving the left right arrow function
    document.querySelector('#arrow-left').onclick = () => {
        image_index--;
        if (image_index < 0) {
            image_index = IMAGES.length - 1
        }
        changeImg(image_index)
    }
    document.querySelector('#arrow-right').onclick = () => {
        image_index++;
        image_index = image_index % (IMAGES.length)
        changeImg(image_index)
    }
})


// Show div function
function show(id) {
    document.querySelectorAll('.main-view').forEach(view => {
        view.style.display = 'none';
    })

    if (id == 'home-view'){
        image_index = 0;
        changeImg(image_index);
    }

    document.querySelector(`#${id}`).style.display = 'block';
}


// Make bullets
function bullets(num){
    document.querySelector('.bullets').innerHTML = '';
    for (let i = 0; i< num; i++){
        bullet_div = document.createElement('div');
        bullet_div.classList.add('silver-bullet')
        bullet_div.style.height = '8px';
        bullet_div.style.width = '8px';
        bullet_div.style.backgroundColor = '#19B5FE';
        bullet_div.style.borderRadius = '25px';
        bullet_div.style.margin = '5px';
        document.querySelector('.bullets').append(bullet_div)
    }
}



// Change main-img src
function changeImg(index){
    document.querySelector('.picture').src = `images/${IMAGES[index]}`;
    changeBulletColor(index);
}
// Change Bullet Color
function changeBulletColor(index){
    let counter = 0;
    document.querySelectorAll('.silver-bullet').forEach(bullet => {
        bullet.style.backgroundColor = '#19B5FE'
        if (counter == index){
            bullet.style.backgroundColor = '#1F4788';
        }
        counter++;
    })
}

