window.addEventListener("load", function () {
    const hamburguer = document.getElementById("hamburguer");
    hamburguer.addEventListener("click", function () {
        document.querySelector('.nav-container').classList.toggle('active');
        hamburguer.classList.toggle("fa-bars");
        hamburguer.classList.toggle("fa-xmark");
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
    const thumbsIcons = document.querySelectorAll(".container-thumbs i");
    const thankYouMessage = document.getElementById("thankYouMessage");
    thumbsIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            thumbsIcons.forEach(icon => icon.classList.remove("selected"));

            icon.classList.add("selected");

            thankYouMessage.style.display = "block";
        });
    });
    const modal = document.getElementById('modal');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const modalTimeout = 3600000; 
    function showModal() {
        const currentTime = new Date().getTime();
        
        const lastModalHideTime = sessionStorage.getItem('modalHideTime');
    
        if (!lastModalHideTime || (currentTime - lastModalHideTime > modalTimeout)) {
            modal.style.display = 'flex';
        } else {
            console.log("El modal ya fue mostrado en esta sesión y no ha pasado el tiempo suficiente.");
        }
    }

    function hideModal() {
        const currentTime = new Date().getTime();
        sessionStorage.setItem('modalHideTime', currentTime);
        modal.style.display = 'none';
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 700) {
            showModal();
        }
    });

    yesBtn.addEventListener('click', function () {
        hideModal();
    });

    noBtn.addEventListener('click', function () {
        hideModal();
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
