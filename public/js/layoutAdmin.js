$(document).ready(function () {
    var menuAdmin = window.document.createElement('img')
    menuAdmin.id = 'menuAdmin'
    menuAdmin.src = '/static/img/sideNav.svg'
    menuAdmin.onclick = function () {
        openSideNav()
    }
    var navBar = window.document.getElementById('navBar')
    
    var divSideNav = window.document.createElement('div')
    divSideNav.id = 'm0nSideNav'
    divSideNav.className = 'sidenav'
    
    var closeSnav = window.document.createElement('a')
    closeSnav.className = 'closebtn'
    closeSnav.href = 'javascript:void(0)'
    closeSnav.onclick = function() {
        closeSideNav()
    }
    closeSnav.innerHTML = '&times;'
    var admin = window.document.createElement('a')
    admin.href = './nomPage?r=layoutAdmin'
    admin.innerHTML = 'Adm1n'
    var ecrire = window.document.createElement('a')
    ecrire.href = './nomPage?r=m0nFormArticle'
    ecrire.innerHTML = 'Ecrire'
    var modifier = window.document.createElement('a')
    modifier.href = './pagelisteArticle'
    modifier.innerHTML = 'Modifier'
    
    navBar.appendChild(menuAdmin)
    divSideNav.appendChild(closeSnav)
    divSideNav.appendChild(admin)
    divSideNav.appendChild(ecrire)
    divSideNav.appendChild(modifier)
    navBar.appendChild(divSideNav)

    function openSideNav() {
        document.getElementById("m0nSideNav").style.width = "20%";
    }

    function closeSideNav() {
        document.getElementById("m0nSideNav").style.width = "0";
    }
})