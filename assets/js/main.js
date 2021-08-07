//Если бы был дизайн выпадающего списка, реализовал анимацию и выбор города

const choiceCity = document.querySelector('.choice');
const listOfCity = document.querySelector('.list_of-cities ul');
const allCity = document.querySelectorAll('.list_of-cities ul li')
let selectedCity = document.querySelector('.choose_city');
let tl = gsap.timeline()
function animateList(){
    tl.to(listOfCity, 1, {  ease: 'power1.inOut', filter: "blur(120px)"})
    tl.to(listOfCity, 1, {  ease: 'power1.inOut', top:'-1000px'})
}
choiceCity.addEventListener('click', ()=>{
    if(!listOfCity.classList.contains('active')){
        listOfCity.classList.add('active')
        listOfCity.style.filter = ""
        gsap.to(listOfCity, 1, {  ease: 'power1.inOut', top:'0px'})
    }else{
        listOfCity.classList.remove('active')
        animateList()
    }
})

allCity.forEach(city =>{
    city.addEventListener('click', ()=>{
        selectedCity.innerHTML = city.innerHTML;
        listOfCity.classList.remove('active')
        animateList()
    })
})

