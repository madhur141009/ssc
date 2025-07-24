const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 760px)")

media.addEventListener('changa', (e) => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches
    console.log(isMobile)
    if(isMobile){
        navbar.setAttribute('inert', '')
    }
    else{
        navbar.setAttribute('inert')
    }
}

function openSidebar(){
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.setAttribute('inert')
}
function closeSidebar(){
    navbar.classList.remove('show') 
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}

updateNavbar(media)