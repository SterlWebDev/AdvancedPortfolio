// template_w3buace
// service_h3r5k6n
// X64Xks_suD5sHdzgp
let isModalOpen = false;
let contractToggle = false;
const scaleFactor = 1/20;

function toggleContrast() {
    contractToggle = !contractToggle;
    if (contractToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_h3r5k6n',
            'template_w3buace',
            event.target,
            'X64Xks_suD5sHdzgp'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
            "The email service is temporarily unavailable. Please contact me directly on email@email.com"
            );
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }

    isModalOpen = true;
    document.body.classList += " modal--open"; 
}