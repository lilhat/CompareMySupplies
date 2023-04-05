<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Contact</title>
    <meta name="Description" content="Find and compare the best deals on building materials and supplies. 
    Compare prices from top UK suppliers to find the right products for your project. Save time and money with our easy-to-use platform.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <!-- <link href="/vendor/twbs/bootstrap/dist/css/bootstrap.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="/vendor/mdbootstrap/css/mdb.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
    <?php include_once("analyticstracking.php") ?>
    <header class="mobile-header"></header>
    <div class="overlay"></div>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="top-navbar"></nav>
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="logo-navbar"></nav>
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="main-navbar"></nav>
    </header>

    <div class="bg-light" id="main-content">
        <!-- Wrapper container -->
        <div class="container py-4">
            <div class="d-flex justify-content-center align-items-center">
                <h2 class="mb-4" id="title">Contact Us</h2>
            </div>
            <!-- Bootstrap 5 starter form -->
            <form id="contactForm" action="send-email.php" method="post">

                <!-- Name input -->
                <div class="mb-3">
                    <label class="form-label" for="name">Name</label>
                    <input class="form-control" id="name" name="name" type="text" placeholder="Name" data-sb-validations="required" />
                    <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                </div>

                <!-- Email address input -->
                <div class="mb-3">
                    <label class="form-label" for="email">Email Address</label>
                    <input class="form-control" id="email" name="email" type="email" placeholder="Email Address" data-sb-validations="required, email" />
                    <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                    <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                </div>

                <!-- Message input -->
                <div class="mb-3">
                    <label class="form-label" for="message">Message</label>
                    <textarea class="form-control" id="message" name="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required"></textarea>
                    <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                </div>

                <!-- Form submissions success message -->
                <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center mb-3">Form submission successful!</div>
                </div>

                <!-- Form submissions error message -->
                <div class="d-none" id="submitErrorMessage">
                    <div class="text-center text-danger mb-3">Error sending message!</div>
                </div>

                <!-- Form submit button -->
                <div class="d-grid">
                    <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                </div>

            </form>

        </div>

        <!-- SB Forms JS -->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </div>

    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top"></footer>
    </div>

    <!-- <script src="/vendor/twbs/bootstrap/dist/js/bootstrap.js"></script> -->
    <!-- MDB -->
    <script type="text/javascript" src="/vendor/mdbootstrap/js/mdb.min.js"></script>
    <script src="/js/nav.js"></script>
    <script src="/js/sidenav.js"></script>
    <script src="/js/footer.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></script>

    <!-- <script src="/js/search.js"></script> -->
</body>

</html>