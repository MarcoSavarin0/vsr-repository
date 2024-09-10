window.addEventListener("load", function () {
    const hamburguer = document.getElementById("hamburguer");
    hamburguer.addEventListener("click", function () {
        document.querySelector('.nav-container').classList.toggle('active');
        hamburguer.classList.toggle("fa-bars");
        hamburguer.classList.toggle("fa-xmark");
    });

    document.querySelector('.references').addEventListener('click', function () {
        let referencias = document.getElementById('referencias');
        referencias.classList.toggle('show');
    
        let icon = this.querySelector('#toggle-icon i');
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
            if (window.scrollY > 30) {
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
    document.querySelector('#button-pdf').addEventListener('click', function () {
        const loader = document.createElement("span");
        loader.classList.add("loader");
        const svg = this.querySelector("svg");        
        svg.style.display = 'none';
        this.querySelector('.button__pdf').appendChild(loader);
        loader.style.display = 'inline-block';
    
        setTimeout(() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/VSR-Preguntas.pdf";
            link.download = "VSR-Preguntas.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    
            loader.remove();
            svg.style.display = 'inline-block';
        }, 1000); 
    });

});
