const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated_bg')
const animated_bg_texts = document.querySelectorAll('.animated_bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="/images/laptop.png" alt="" />'
    title.innerHTML = 'I Love Coding In Visual Studio.'
    // excerpt.innerHTML = 'I Felix Kibet Rono, loves coding with Javascript, CSS and html despite being a Data Analyst.'
    profile_img.innerHTML = '<img src="/images/profile.JPG" alt="">'
    name.innerHTML = 'Kim Kibeet'
    date.innerHTML = 'Aug 22, 20222'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
