var click = document.querySelector('.skillHead')
var bar = document.querySelector('.skill2')
var btn  = document.querySelector('.btn')


click.addEventListener('click', () => {
    bar.style.opacity = 1
    

})
btn.addEventListener('click',()=>{
    bar.style.opacity = 0
})