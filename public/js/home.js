const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;


    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth / 2;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth / 2;
    })
})

const urlParams = new URLSearchParams(window.location.search);
const successMessage = urlParams.get('success');

if (successMessage == "signin") {
  showSuccess("Signed in successfully");
}
if (successMessage == "signup") {
    showSuccess("Please verify your email");
}
if (successMessage == "delete"){
    showSuccess("Account deleted")
}

function showSuccess(message) {
    const successBox = document.querySelector('.success-box');
    const successMsg = successBox.querySelector('.success-msg');
  
    successMsg.textContent = message;
    successBox.classList.add('show');
  
    setTimeout(() => {
      successBox.classList.remove('show');
    }, 2500);
}
  
