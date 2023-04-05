const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        
    <div class="col-md-4 d-flex align-items-center" id="footer-left">
        <span class="mb-3 mb-md-0 text-muted">© 2023 CompareMySupplies Ltd</span>
        <span class="mb-3 mb-md-0 text-muted" id="footer-tos"><a href="/tos">Terms of Service</a></span>
        <span class="mb-3 mb-md-0 text-muted" id="footer-mid"><i class="fa-regular fa-circle fa-2xs"></i></span>
        <span class="mb-3 mb-md-0 text-muted" id="footer-privacy"><a href="/privacy">Privacy Policy</a></span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><!-- Facebook -->
            <a class="btn text-white btn-floating m-1" style="background-color: #3b5998;" href="https://www.facebook.com/CompareMySupplies/" role="button" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li class="ms-3"><!-- Twitter -->
            <a class="btn text-white btn-floating m-1" style="background-color: #55acee;" href="https://twitter.com/CompareMySupply" role="button" target="_blank"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="ms-3"> <!-- Instagram -->
            <a class="btn text-white btn-floating m-1" style="background-color: #ac2bac;" href="https://www.instagram.com/comparemysupplies/" role="button" target="_blank"><i class="fab fa-instagram"></i></a>
        </li>

    </ul>
      
    `;

}

createFooter();
