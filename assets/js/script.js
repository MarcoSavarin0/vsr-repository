window.addEventListener("load", function () {
    console.log("load");
    const hamburguer = document.getElementById("hamburguer");
    hamburguer.addEventListener("click", function () {
        document.querySelector('.nav-container').classList.toggle('active');
        hamburguer.classList.toggle("fa-bars");
        hamburguer.classList.toggle("fa-xmark");
    });
    const siBox = document.querySelector('.main-container__content__section-question__box-answer_si');
    const noBox = document.querySelector('.main-container__content__section-question__box-answer_no');

    siBox.addEventListener('click', function () {
        siBox.classList.add('active');
        noBox.classList.remove('active');
    });

    noBox.addEventListener('click', function () {
        noBox.classList.add('active');
        siBox.classList.remove('active');
    });
    document.getElementById('toggle-icon').addEventListener('click', function() {
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
    

});
