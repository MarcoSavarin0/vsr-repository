window.addEventListener("load", function () {
    const hamburguer = document.getElementById("hamburguer");
    hamburguer.addEventListener("click", function () {
        document.querySelector('.nav-container').classList.toggle('active');
        hamburguer.classList.toggle("fa-bars");
        hamburguer.classList.toggle("fa-xmark");
    });


    document.getElementById('toggle-icon').addEventListener('click', function () {
        let referencias = document.getElementById('referencias');
        referencias.classList.toggle('show');

        let icon = this.querySelector('i');
        if (referencias.classList.contains('show')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
    const menuList = document.getElementById('menu');
    const navContainer = document.querySelector('.nav-container');

    window.addEventListener('scroll', function () {
        if (window.innerWidth > 770) {
            if (window.scrollY > 50) {
                navContainer.classList.add('efecto-menu-conatainer');
                menuList.classList.add('menu-list-padding');
            } else {
                navContainer.classList.remove('efecto-menu-conatainer');
                menuList.classList.remove('menu-list-padding');
            }
        } else {
            navContainer.classList.remove('efecto-menu-conatainer');
            menuList.classList.remove('menu-list-padding');
        }
    });
    
});