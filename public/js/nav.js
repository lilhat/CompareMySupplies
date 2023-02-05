const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav-top"> 
            <ul class="nav-top-links">
                <li class="nav-top-item"><a href="products.php">Our Story</a>| </li>
                <li class="nav-top-item"><a href="about.php">FAQ</a>| </li>
                <li class="nav-top-item"><a href="contact.php">Contact Us</a></li>
            </ul>
        </div>
        <div class="nav-border">
        </div>
        <div class="nav-wrapper">
            <div class="main-logo">
                <a href="index.php">
                    <img src="images/main-logo2.png" class="brand-logo" alt="">
                </a>
            </div>
            <form action="search.php" method="get">
                <div class="search-box">
                    <input type="text" class="tbox" placeholder="Search..." />
                    <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
            <div class="top-menu">
            <ul class="top-links-container">
                <li class="top-link-item"><a href="products.php">All Categories</a></li>
            </ul>
            </div>
            <div class="sign-in">
                <a>
                    <img src="images/user.png" id="user-pic" class="user-pic">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Logged in as, name</p>
                        <button class="btn" id="user-btn">Log Out</button>
                    </div>
                </a>

            </div>

        </div>
        <div class="menu">
            <ul class="links-container">
                <li class="link-item">
                    <a href="categories.php?product=plaster">Building & <br> Hardware</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Building Supplies</a></li>
                            <li><a href="#">Aggregates & Sand</a></li>
                            <li><a href="#">Bricks & Blocks</a></li>
                            <li><a href="#">Concrete & Cement</a></li>
                            <li><a href="#">Additives & Chemicals</a></li>
                            <li><a href="#">Guttering & Drainage</a></li>
                            <li><a href="#">Insulation & Damp</a></li>
                            <li><a href="#">Plasterboard</a></li>
                            <li><a href="#">Plastering supplies</a></li>
                            <li><a href="#">Coving</a></li>
                            <li><a href="#">Roofing supplies</a></li>
                            <li><a href="#">Builder's metalwork</a></li>
                            <li><a href="#">Sealants</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Timber & Sheet Materials</a></li>
                            <li><a href="#">Architrave</a></li>
                            <li><a href="#">Constructional timber</a></li>
                            <li><a href="#">Decorate mouldings</a></li>
                            <li><a href="#">Additives & Chemicals</a></li>
                            <li><a href="#">Furniture boards</a></li>
                            <li><a href="#">Scaffold boards</a></li>
                            <li><a href="#">Sheet materials</a></li>
                            <li><a href="#">Stairs & stair parts</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Hardware</a></li>
                            <li><a href="#">Screws</a></li>
                            <li><a href="#">Handles & knobs</a></li>
                            <li><a href="#">Hinges</a></li>
                            <li><a href="#">Bolts, nuts & washers</a></li>
                            <li><a href="#">Locks & padlocks</a></li>
                            <li><a href="#">Brackets</a></li>
                            <li><a href="#">Hooks</a></li>
                            <li><a href="#">Furniture hardware</a></li>
                            <li><a href="#">Fixings & wall plugs</a></li>
                            <li><a href="#">Nails</a></li>
                            <li><a href="#">Ropes, bungees & chains</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Doors & windows</a></li>
                            <li><a href="#">Internal doors</a></li>
                            <li><a href="#">External doors</a></li>
                            <li><a href="#">Garage doors</a></li>
                            <li><a href="#">Windows</a></li>
                            <li><a href="#">Door locks & latches</a></li>
                            <li><a href="#">Door frames & fixtures</a></li>
                            <li><a href="#">Porches</a></li>
                            <li><a href="#">Loft doors & hatches</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=concrete">Heating & <br> Plumbing</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Radiators</a></li>
                            <li><a href="#">Double panel radiators</a></li>
                            <li><a href="#">Towel radiators</a></li>
                            <li><a href="#">Column radiators</a></li>
                            <li><a href="#">Designer radiators</a></li>
                            <li><a href="#">Oil filled radiators</a></li>
                            <li><a href="#">Vertical radiators</a></li>
                            <li><a href="#">Radiator valves</a></li>
                            <li><a href="#">Radiator covers</a></li>
                            <li><a href="#">Cast iron radiators</a></li>
                            <li><a href="#">Heating elements</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Fires, stoves & heaters</a></li>
                            <li><a href="#">Electric fires</a></li>
                            <li><a href="#">Stoves</a></li>
                            <li><a href="#">Fireplace suites</a></li>
                            <li><a href="#">Heaters</a></li>
                            <li><a href="#">Gas fires</a></li>
                            <li><a href="#">Fire surrounds</a></li>
                            <li><a href="#">Fireplace accessories</a></li>
                            <li><a href="#">Logs & charcoal</a></li>
                            <li><a href="#">Fireplace hearths</a></li>
                            <li><a href="#">All fires</a></li>
                            <li><a href="#">Chimney sweeping</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Plumbing</a></li>
                            <li><a href="#">Pipe fittings</a></li>
                            <li><a href="#">Wastes & traps</a></li>
                            <li><a href="#">Pipes</a></li>
                            <li><a href="#">Bathroom fittings</a></li>
                            <li><a href="#">Valves</a></li>
                            <li><a href="#">Connectors</a></li>
                            <li><a href="#">Plumbing tools</a></li>
                            <li><a href="#">Elbows</a></li>
                            <li><a href="#">Pipe insulation</a></li>
                            <li><a href="#">Stopcocks</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Central heating</a></li>
                            <li><a href="#">Thermostats</a></li>
                            <li><a href="#">Underfloor heating</a></li>
                            <li><a href="#">Water heaters</a></li>
                            <li><a href="#">Heating treatments</a></li>
                            <li><a href="#">Boilers</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Air treatment</a></li>
                            <li><a href="#">Dehumidifiers</a></li>
                            <li><a href="#">Extractor fans</a></li>
                            <li><a href="#">Ducting</a></li>
                            <li><a href="#">Vents</a></li>
                            <li><a href="#">Air purifiers</a></li>
                            <li><a href="#">Air conditioners</a></li>
                            <li><a href="#">Ceiling fans</a></li>
                            <li><a href="#">Fans</a></li>
                            <li><a href="#">Humidifiers</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=concrete"><span class="first-line">Home & </span><br> Furniture</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Furniture</a></li>
                            <li><a href="#">Bedroom furniture</a></li>
                            <li><a href="#">Wardrobes</a></li>
                            <li><a href="#">Sliding wardrobe doors</a></li>
                            <li><a href="#">Beds</a></li>
                            <li><a href="#">Chairs</a></li>
                            <li><a href="#">Bedside tables</a></li>
                            <li><a href="#">Chest of drawers</a></li>
                            <li><a href="#">Mattresses</a></li>
                            <li><a href="#">Desks</a></li>
                            <li><a href="#">Tables</a></li>
                            <li><a href="#">Sideboards</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Home furnishings</a></li>
                            <li><a href="#">Home decor trends</a></li>
                            <li><a href="#">Blinds</a></li>
                            <li><a href="#">Curtains</a></li>
                            <li><a href="#">Curtain poles</a></li>
                            <li><a href="#">Curtain tracks</a></li>
                            <li><a href="#">Curtain accessories</a></li>
                            <li><a href="#">Cushions</a></li>
                            <li><a href="#">Rugs</a></li>
                            <li><a href="#">Door mats</a></li>
                            <li><a href="#">Bedding</a></li>
                            <li><a href="#">Throws & blankets</a></li>
                            <li><a href="#">Bean bags</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Home accessories</a></li>
                            <li><a href="#">Cooking & dining</a></li>
                            <li><a href="#">Mirrors</a></li>
                            <li><a href="#">Wall art</a></li>
                            <li><a href="#">Picture frames</a></li>
                            <li><a href="#">Ornaments</a></li>
                            <li><a href="#">Artificial flowers</a></li>
                            <li><a href="#">Bottles, vases & jars</a></li>
                            <li><a href="#">Clocks</a></li>
                            <li><a href="#">Candles</a></li>
                            <li><a href="#">Candle holders</a></li>
                            <li><a href="#">Children's decor</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Storage & shelving</a></li>
                            <li><a href="#">Shelves</a></li>
                            <li><a href="#">Shelf brackets</a></li>
                            <li><a href="#">Shelving systems</a></li>
                            <li><a href="#">Shelving units</a></li>
                            <li><a href="#">Storage baskets</a></li>
                            <li><a href="#">Storage trunks</a></li>
                            <li><a href="#">Storage boxes</a></li>
                            <li><a href="#">Storage cubes</a></li>
                            <li><a href="#">Storage cabinets</a></li>
                            <li><a href="#">Storage drawers</a></li>
                            <li><a href="#">Packaging</a></li>
                            <li><a href="#">Garage storage</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Laundry & utility</a></li>
                            <li><a href="#">Laundry baskets</a></li>
                            <li><a href="#">Irons</a></li>
                            <li><a href="#">Ironing boards</a></li>
                            <li><a href="#">Clothes airers</a></li>
                            <li><a href="#">Washing lines</a></li>
                            <li><a href="#">Household cleaning</a></li>
                            <li><a href="#">Bins</a></li>
                            <li><a href="#">Carpet shampoo</a></li>
                            <li><a href="#">Vacuum cleaners</a></li>
                            <li><a href="#">Steam cleaners</a></li>
                            <li><a href="#">Window vacuums</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=timber"><span class="first-line-2">Kitchen & </span><br> Bathroom</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Kitchen</a></li>
                            <li><a href="#">Bar stools</a></li>
                            <li><a href="#">Cabinets</a></li>
                            <li><a href="#">Kitchen bins</a></li>
                            <li><a href="#">Kitchen doors</a></li>
                            <li><a href="#">Kitchen sinks</a></li>
                            <li><a href="#">Kitchen storage & accessories</a></li>
                            <li><a href="#">Kitchen taps</a></li>
                            <li><a href="#">Kitchen worktops</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Appliances</a></li>
                            <li><a href="#">Cooker hoods</a></li>
                            <li><a href="#">Cookers</a></li>
                            <li><a href="#">Fridge freezers</a></li>
                            <li><a href="#">Hobs</a></li>
                            <li><a href="#">Kettles</a></li>
                            <li><a href="#">Microwaves</a></li>
                            <li><a href="#">Ovens</a></li>
                            <li><a href="#">Washing machines</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Bathrooms</a></li>
                            <li><a href="#">Baths</a></li>
                            <li><a href="#">Bath panels</a></li>
                            <li><a href="#">Bathroom suites</a></li>
                            <li><a href="#">Bathroom wall panels</a></li>
                            <li><a href="#">Taps</a></li>
                            <li><a href="#">Toilet seats</a></li>
                            <li><a href="#">Toilets</a></li>
                            <li><a href="#">Basins</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Showering</a></li>
                            <li><a href="#">Bath shower screens</a></li>
                            <li><a href="#">Curtain rails & rods</a></li>
                            <li><a href="#">Riser rails</a></li>
                            <li><a href="#">Shower curtains</a></li>
                            <li><a href="#">Shower heads</a></li>
                            <li><a href="#">Shower hoses</a></li>
                            <li><a href="#">Shower kits</a></li>
                            <li><a href="#">Shower trays</a></li>
                            <li><a href="#">Showers</a></li>
                            <li><a href="#">Wet rooms</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=adhesives">Lighting & <br><span class="first-line-3"> Electrical </span></a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Indoor lights</a></li>
                            <li><a href="#">Ceiling lights</a></li>
                            <li><a href="#">Floor lamps</a></li>
                            <li><a href="#">Light bulbs</a></li>
                            <li><a href="#">Table lamps</a></li>
                            <li><a href="#">Chandeliers</a></li>
                            <li><a href="#">Lamp shades</a></li>
                            <li><a href="#">Wall lights</a></li>
                            <li><a href="#">Spotlights & downlights</a></li>
                            <li><a href="#">Pendant lights</a></li>
                            <li><a href="#">Light fixtures & fittings</a></li>
                            <li><a href="#">Children's lights</a></li>
                            <li><a href="#">Cabinet lights</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Outdoor lights</a></li>
                            <li><a href="#">Wall lights</a></li>
                            <li><a href="#">Security lights</a></li>
                            <li><a href="#">Garden string lights</a></li>
                            <li><a href="#">Spike lights</a></li>
                            <li><a href="#">Lanterns</a></li>
                            <li><a href="#">Post lights</a></li>
                            <li><a href="#">Decking lights</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Electrical</a></li>
                            <li><a href="#">Switches & sockets</a></li>
                            <li><a href="#">Extensions leads & reels</a></li>
                            <li><a href="#">Wiring cables</a></li>
                            <li><a href="#">Cable management</a></li>
                            <li><a href="#">Junction boxes & connectors</a></li>
                            <li><a href="#">Consumer units & breakers</a></li>
                            <li><a href="#">Door bells</a></li>
                            <li><a href="#">Networking & broadband</a></li>
                            <li><a href="#">TV aerials</a></li>
                            <li><a href="#">Electricians tools & supplies</a></li>
                            <li><a href="#">Batteries & chargers</a></li>
                            <li><a href="#">EV charging</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Safety & security</a></li>
                            <li><a href="#">CCTV cameras</a></li>
                            <li><a href="#">Burglar alarms</a></li>
                            <li><a href="#">Smoke alarms</a></li>
                            <li><a href="#">Carbon monoxide alarms</a></li>
                            <li><a href="#">Door locks & latches</a></li>
                            <li><a href="#">Safes</a></li>
                            <li><a href="#">Key safes & cash boxes</a></li>
                            <li><a href="#">Bike locks</a></li>
                            <li><a href="#">Fire extinguishers</a></li>
                            <li><a href="#">Padlocks</a></li>
                            <li><a href="#">Gate locks</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Smart home</a></li>
                            <li><a href="#">Smart light bulbs</a></li>
                            <li><a href="#">Smart alarms</a></li>
                            <li><a href="#">Smart cameras</a></li>
                            <li><a href="#">Smart heating</a></li>
                            <li><a href="#">Smart door locks</a></li>
                            <li><a href="#">Smart door bells</a></li>
                            <li><a href="#">Smart plugs</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical">Outdoor & <br><span class="first-line-4"> Garden </span></a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Garden tools</a></li>
                            <li><a href="#">Pressure washers</a></li>
                            <li><a href="#">Lawnmowers</a></li>
                            <li><a href="#">Garden hand tools</a></li>
                            <li><a href="#">Garden power tools</a></li>
                            <li><a href="#">Wheelbarrows & trolleys</a></li>
                            <li><a href="#">Incinerators</a></li>
                            <li><a href="#">Shovels & spades</a></li>
                            <li><a href="#">Composters</a></li>
                            <li><a href="#">Garden waste bags & sacks</a></li>
                            <li><a href="#">Watering cans</a></li>
                            <li><a href="#">Gardening gloves</a></li>
                            <li><a href="#">Garden kneelers</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Growing & planting</a></li>
                            <li><a href="#">Plants, seeds & bulbs</a></li>
                            <li><a href="#">Pots, planters & baskets</a></li>
                            <li><a href="#">Compost, manure & soil</a></li>
                            <li><a href="#">Fertilisers & plant food</a></li>
                            <li><a href="#">Pest control</a></li>
                            <li><a href="#">Hoses, pumps & irrigation</a></li>
                            <li><a href="#">Lawn care</a></li>
                            <li><a href="#">Weed killers</a></li>
                            <li><a href="#">Plant protection & support</a></li>
                            <li><a href="#">Propagators</a></li>
                            <li><a href="#">Garden cloches</a></li>
                            <li><a href="#">Plant trays</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Landscaping</a></li>
                            <li><a href="#">Fencing</a></li>
                            <li><a href="#">Paving & walling</a></li>
                            <li><a href="#">Trellis & screening</a></li>
                            <li><a href="#">Stone, gravel & chippings</a></li>
                            <li><a href="#">Decking</a></li>
                            <li><a href="#">Garden gates</a></li>
                            <li><a href="#">Artificial grass</a></li>
                            <li><a href="#">Lawn turf</a></li>
                            <li><a href="#">Timber sleepers</a></li>
                            <li><a href="#">Lawn edging</a></li>
                            <li><a href="#">Garden railings</a></li>
                            <li><a href="#">Ponds & water features</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Garden buildings & storage</a></li>
                            <li><a href="#">Sheds</a></li>
                            <li><a href="#">Garden storage boxes</a></li>
                            <li><a href="#">Summerhouses</a></li>
                            <li><a href="#">Greenhouses & growhouses</a></li>
                            <li><a href="#">Pergolas</a></li>
                            <li><a href="#">Gazebos</a></li>
                            <li><a href="#">Arches</a></li>
                            <li><a href="#">Arbours</a></li>
                            <li><a href="#">Log cabins & garden offices</a></li>
                            <li><a href="#">Shed bases</a></li>
                            <li><a href="#">Awnings</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Outdoor living</a></li>
                            <li><a href="#">Garden furniture</a></li>
                            <li><a href="#">Hot tubs & saunas</a></li>
                            <li><a href="#">BBQs & BBQ tools</a></li>
                            <li><a href="#">Chimineas & fire pits</a></li>
                            <li><a href="#">Sunloungers</a></li>
                            <li><a href="#">Home bars</a></li>
                            <li><a href="#">Parasols & bases</a></li>
                            <li><a href="#">Pizza ovens</a></li>
                            <li><a href="#">Pools & accessories</a></li>
                            <li><a href="#">Hammocks</a></li>
                            <li><a href="#">Garden furniture covers</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical"><span class="first-line-3">Painting & </span><br> Decorating</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Interior paint</a></li>
                            <li><a href="#">Emulsion paint</a></li>
                            <li><a href="#">Metal & wood paint</a></li>
                            <li><a href="#">Paint mixing</a></li>
                            <li><a href="#">Furniture paint</a></li>
                            <li><a href="#">Primers & undercoats</a></li>
                            <li><a href="#">Damp & anti-mould paint</a></li>
                            <li><a href="#">Tile paint</a></li>
                            <li><a href="#">Radiator paint</a></li>
                            <li><a href="#">Spray paint</a></li>
                            <li><a href="#">Floor paint</a></li>
                            <li><a href="#">Chalkboard paint</a></li>
                            <li><a href="#">Paint samples</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Exterior paint</a></li>
                            <li><a href="#">Metal & wood paint</a></li>
                            <li><a href="#">Masonry paint</a></li>
                            <li><a href="#">Fence paint</a></li>
                            <li><a href="#">Paint mixing</a></li>
                            <li><a href="#">Door paint</a></li>
                            <li><a href="#">Decking paint</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Woodcare</a></li>
                            <li><a href="#">Wood stain</a></li>
                            <li><a href="#">Wood varnish</a></li>
                            <li><a href="#">Wood preservatives</a></li>
                            <li><a href="#">Wood oil</a></li>
                            <li><a href="#">Wood wax</a></li>
                            <li><a href="#">Exterior woodcare</a></li>
                            <li><a href="#">Interior woodcare</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Decorating supplies</a></li>
                            <li><a href="#">Paint rollers</a></li>
                            <li><a href="#">Paint brushes</a></li>
                            <li><a href="#">Paint trays</a></li>
                            <li><a href="#">Paint pads</a></li>
                            <li><a href="#">Dust sheets</a></li>
                            <li><a href="#">Fillers</a></li>
                            <li><a href="#">Tapes</a></li>
                            <li><a href="#">Sandpaper</a></li>
                            <li><a href="#">Glues & adhesives</a></li>
                            <li><a href="#">Sealants</a></li>
                            <li><a href="#">Paint stripper</a></li>
                            <li><a href="#">Expanding foam</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Wallpaper & coverings</a></li>
                            <li><a href="#">Wallpaper</a></li>
                            <li><a href="#">Murals</a></li>
                            <li><a href="#">Wall stickers</a></li>
                            <li><a href="#">Sticky back plastic & window film</a></li>
                            <li><a href="#">Wallpaper tools</a></li>
                            <li><a href="#">Lining paper</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical"><span class="first-line-3">Tiling & </span><br> Flooring</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Flooring</a></li>
                            <li><a href="#">Laminate</a></li>
                            <li><a href="#">Luxury vinyl click</a></li>
                            <li><a href="#">Sheet vinyl</a></li>
                            <li><a href="#">Adhesive vinyl tiles</a></li>
                            <li><a href="#">Solid wood</a></li>
                            <li><a href="#">Engineered wood</a></li>
                            <li><a href="#">Adhesive vinyl planks</a></li>
                            <li><a href="#">Carpet</a></li>
                            <li><a href="#">Flooring samples</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Tiles</a></li>
                            <li><a href="#">Floor tiles</a></li>
                            <li><a href="#">Wall tiles</a></li>
                            <li><a href="#">Bathroom tiles</a></li>
                            <li><a href="#">Kitchen tiles</a></li>
                            <li><a href="#">Mosaic & border tiles</a></li>
                            <li><a href="#">Outdoor tiles</a></li>
                            <li><a href="#">Sample tiles</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Flooring tools</a></li>
                            <li><a href="#">Underlay</a></li>
                            <li><a href="#">Scotias & floor trims</a></li>
                            <li><a href="#">Thresholds, t-bars & reducers</a></li>
                            <li><a href="#">Skirting & architrave</a></li>
                            <li><a href="#">Underfloor heating</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Tiling tools</a></li>
                            <li><a href="#">Tile trims</a></li>
                            <li><a href="#">Grout</a></li>
                            <li><a href="#">Adhesive</a></li>
                            <li><a href="#">Tiling trowels</a></li>
                            <li><a href="#">Tile cutters</a></li>
                            <li><a href="#">Tile spacers</a></li>
                            <li><a href="#">Tile scribes</a></li>
                            <li><a href="#">Grouting tools</a></li>
                            <li><a href="#">Tile kits</a></li>
                            <li><a href="#">Sealant</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="categories.php?product=electrical"><span class="first-line-5">Tools & </span><br> Equipment</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Power tools</a></li>
                            <li><a href="#">Drills</a></li>
                            <li><a href="#">Saws</a></li>
                            <li><a href="#">Sanders</a></li>
                            <li><a href="#">Multi tools & hobby tools</a></li>
                            <li><a href="#">Angle grinders</a></li>
                            <li><a href="#">Kits & twinpacks</a></li>
                            <li><a href="#">Impact drivers & wrenches</a></li>
                            <li><a href="#">Screwdrivers</a></li>
                            <li><a href="#">Nail guns</a></li>
                            <li><a href="#">Routers</a></li>
                            <li><a href="#">Planers</a></li>
                            <li><a href="#">Workshop machinery</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Power tool accessories</a></li>
                            <li><a href="#">Sawing & blades</a></li>
                            <li><a href="#">Drill bits</a></li>
                            <li><a href="#">Sanding</a></li>
                            <li><a href="#">Mixed drill bit sets</a></li>
                            <li><a href="#">Multi tool accessories</a></li>
                            <li><a href="#">Holesaws</a></li>
                            <li><a href="#">Angle grinder discs</a></li>
                            <li><a href="#">Screwdriver bits</a></li>
                            <li><a href="#">Batteries & chargers</a></li>
                            <li><a href="#">Routing</a></li>
                            <li><a href="#">Chucks, keys & holders</a></li>
                            <li><a href="#">Cleaning & preparation</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Hand tools</a></li>
                            <li><a href="#">Hand saws</a></li>
                            <li><a href="#">Measures & levels</a></li>
                            <li><a href="#">Spanners & wrenches</a></li>
                            <li><a href="#">Screwdrivers & keys</a></li>
                            <li><a href="#">Tool kits</a></li>
                            <li><a href="#">Demolition</a></li>
                            <li><a href="#">Cutting tools</a></li>
                            <li><a href="#">Plastering tools</a></li>
                            <li><a href="#">Woodworking tools</a></li>
                            <li><a href="#">Pliers</a></li>
                            <li><a href="#">Bricklaying tools</a></li>
                            <li><a href="#">Cable tools</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Safety & workwear</a></li>
                            <li><a href="#">Workwear</a></li>
                            <li><a href="#">Work trousers</a></li>
                            <li><a href="#">Overalls & coveralls</a></li>
                            <li><a href="#">Work jackets</a></li>
                            <li><a href="#">Hoodies & sweatshirts</a></li>
                            <li><a href="#">Work shorts</a></li>
                            <li><a href="#">Footwear</a></li>
                            <li><a href="#">Safety boots</a></li>
                            <li><a href="#">Safety trainers</a></li>
                            <li><a href="#">Gloves</a></li>
                            <li><a href="#">Dust masks & filters</a></li>
                            <li><a href="#">Goggles & glasses</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="#">Equipment</a></li>
                            <li><a href="#">Tool storage</a></li>
                            <li><a href="#">Ladders & steps</a></li>
                            <li><a href="#">Workbenches & trestles</a></li>
                            <li><a href="#">Trolleys & carts</a></li>
                            <li><a href="#">Cement mixers</a></li>
                            <li><a href="#">Vacuum cleaners</a></li>
                            <li><a href="#">Car care & maintenance</a></li>
                            <li><a href="#">Workshop machinery</a></li>
                            <li><a href="#">Air compressors</a></li>
                            <li><a href="#">Torches & worklights</a></li>
                            <li><a href="#">Tarpaulins, sheets & sacks</a></li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </div>
    `;

    
}

createNav();

// nav popup

const userImageButton = document.querySelector('#user-pic');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `Signed in as ${user.name}`;
        actionBtn.innerHTML = 'Sign out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'Not logged in';
        actionBtn.innerHTML = 'Sign in';
        actionBtn.addEventListener('click', () => {
            location.href = '/signin';
        })
    }
}

window.onload = () => {
    // auto set the grid columns based on the amount of lists inside each dropdown
    let containerList = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < containerList.length; i++) {
        let selectedContainer = containerList[i];
        let lists = selectedContainer.querySelectorAll('.content');
        let numLists = lists.length;
        selectedContainer.style.gridTemplateColumns = 'repeat(' + numLists + ', 1fr)';
    }


    let headerList = document.querySelectorAll('.dropdown-header-a');
    for (let i = 0; i < headerList.length; i++) {
        let textContainer = headerList[i];
        if (textContainer.scrollHeight > textContainer.offsetHeight) {
            textContainer.style.paddingBottom = "20px";
        }
    }


}



// const linkItems = document.querySelectorAll('.link-item');
// const linksContainer = document.querySelector('.links-container');
// linkItems.forEach(item => {
//     item.addEventListener('mouseenter', function() {
//         linkItems.forEach(linkItem => {
//             if (linkItem !== item) {
//                 linksContainer.style.backgroundColor = 'grey';
//             }
//             else{
//                 linkItem.style.backgroundColor = 'white'
//             }
//         });
//     });

//     item.addEventListener('mouseleave', function() {
//         linkItems.forEach(linkItem => {
//             if (linkItem !== item) {
//                 linkItem.style.backgroundColor = '';
//                 linksContainer.style.backgroundColor = '';
//             }
//             else{
//                 linkItem.style.backgroundColor = 'white'
//             }
//         });
//     });
// });

