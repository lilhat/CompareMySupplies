const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-border">
        <div class="footer-content">
            <img src="images/main-lightlogo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Business</li>
                    <li><a href="#" class="footer-link">Compare My Supplies Ltd</a></li>
                    <li><a href="#" class="footer-link">Advertising</a></li>
                    <li><a href="#" class="footer-link">Media</a></li>
                    <li><a href="#" class="footer-link">Careers</a></li>
                    <li><a href="#" class="footer-link">Affiliate Program</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Services</li>
                    <li><a href="#" class="footer-link">Loyalty</a></li>
                    <li><a href="#" class="footer-link">Finance</a></li>
                    <li><a href="#" class="footer-link">Gift Cards</a></li>
                    <li><a href="#" class="footer-link">Appointments</a></li>
                    <li><a href="#" class="footer-link">Approved Marketer</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Products</li>
                    <li><a href="#" class="footer-link">Ratings & Reviews</a></li>
                    <li><a href="#" class="footer-link">Apps</a></li>
                    <li><a href="#" class="footer-link">Product Information</a></li>
                    <li><a href="#" class="footer-link">Safety Notices</a></li>
                    <li><a href="#" class="footer-link">Approved Supplier</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Help & Support</li>
                    <li><a href="#" class="footer-link">Advice</a></li>
                    <li><a href="#" class="footer-link">Customer Support</a></li>
                    <li><a href="#" class="footer-link">Brochures</a></li>
                    <li><a href="#" class="footer-link">Ideas</a></li>
                    <li><a href="#" class="footer-link">Affiliate Help</a></li>
                </ul>
                <div class="contact-info">
                    <p class="info">Customer Support Email: <p class="info-details">contact@comparemysupplies.com</p></p>
                    <p class="info">Telephone: <p class="info-details">01793 882282</p></p>
                </div>
            </div>
            </div>
            <div class="footer-social-container" style="display:flex">
                <div class="footer-info-container">
                    <span>@ CompareMySupplies 2023</span>
                    <a href="#" class="social-link">Terms & Services</a>
                    <a href="#" class="social-link">Privacy Page</a>
                </div>
                <div>
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