<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title><?php echo $id ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/contact.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ce98f0dc47.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

</head>

<body>
    <nav class="navbar"></nav>
    <div class="overlay"></div>
    <div class="container">
        <div class="content-wrapper">
            <div class="two-column-wrapper">
                <div class="profile-image-wrapper">
                    <img src="images/thumbs.jpg">
                </div>
                <div class="profile-content-wrapper">
                    <h1>Contact Us</h1>
                    <div class="contact-wrapper">
                        <div id="contact-form">

                            <form id="contact-form-id" class="contact-form-class" method="post" action="contact-form-process.php">

                                <div class="contact-form-group">
                                    <label for="Name" class="contact-label">Your name</label>
                                    <div class="contact-input-group">
                                        <input type="text" id="Name" name="Name" class="contact-form-control" required>
                                    </div>
                                </div>

                                <div class="contact-form-group">
                                    <label for="Email" class="contact-label">Your email address</label>
                                    <div class="contact-input-group">
                                        <input type="email" id="Email" name="Email" class="contact-form-control" required>
                                    </div>
                                </div>

                                <div class="contact-form-group">
                                    <label for="Message" class="contact-label">Your message</label>
                                    <div class="contact-input-group">
                                        <textarea id="Message" name="Message" class="contact-form-control" rows="6" maxlength="3000" required></textarea>
                                    </div>
                                </div>

                                <div class="contact-form-group">
                                    <button type="submit" id="contact-button" class="contact-button-primary">Send Message</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    </div>
    <footer></footer>
    <script src="js/nav.js"></script>
    <script src="js/overlay.js"></script>
    <script src="js/footer.js"></script>
</body>

</html>