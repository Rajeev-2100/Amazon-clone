let  images = document.querySelectorAll('.carousel-bar ul img')
let prev_btn = document.querySelector('.control_prev')
let next_btn = document.querySelector('.control_next')

let n = 0

function changeImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    return images[n].style.display = 'block'
}


prev_btn.addEventListener('click',()=>{
    if (n > 0) {
        n--
    }else{
        n = images.length - 1
    }
    changeImages()
})

next_btn.addEventListener('click', ()=>{
    if (n < images.length - 1) {
        n++
    }else{
        n = 0
    }
    changeImages()
})


const scrollContainer = document.querySelectorAll('.products')

for (const item of scrollContainer) {
    item.addEventListener('wheel', (e)=>{
        e.preventDefault()
        item.scrollLeft += e.deltaY;
    })
}
