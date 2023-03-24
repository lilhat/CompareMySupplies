const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-border">
        <div class="footer-content">
            <div class="footer-social-container">
                <div class="footer-info-container">
                    <span>@ CompareMySupplies 2023</span>
                    <a href="/tos" class="social-link">Terms of Services</a>
                    <a href="/privacy" class="social-link">Privacy Page</a>
                </div>
                <div class="social-links">
                    <a href="https://www.instagram.com/comparemysupplies/" class="social-link" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/CompareMySupplies/" class="social-link" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/CompareMySupply" class="social-link" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
}

createFooter();
