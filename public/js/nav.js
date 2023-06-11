const createTopNav = () => {
    let topnav = document.getElementById('top-navbar');

    topnav.innerHTML = `
        <div class="container">
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="/about" class="nav-link">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="/faq" class="nav-link">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a href="/contact" class="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    `
}



const createLogoNav = () => {
    let logonav = document.getElementById('logo-navbar');

    logonav.innerHTML = `

    <!--Main Navigation-->

    <div class="container">
        <a href="/home" class="navbar-brand">
        <img src="/images/main-logo2.png" class="brand-logo" alt="">
        </a>
        <form class="d-flex ms-auto" id="nav-form" action="/search/" method="get">
            <div class="input-group" id="nav-search">
                <input class="form-control border-0 mr-2" name="query" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-primary border-0" type="submit">Search</button>
            </div>
        </form>
    </div>
    `
}

const createNav = () => {
    let nav = document.getElementById('main-navbar');

    nav.innerHTML = `
        <div class="container" id="mega-menu">
        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarExampleOnHover">
            <!-- Left links -->
            <ul class="navbar-nav me-auto ps-lg-0" style="padding-left: 0.15rem">
                <!-- Navbar dropdown -->
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/building_hardware" id="navbarDropdown" role="button" aria-expanded="false">
                        Building & Hardware<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/building_hardware/building_supplies">Building Supplies</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Aggregates_+_sand">Aggregates & Sand</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Bricks_+_blocks">Bricks & Blocks</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Chemicals,_concrete_+_cement">Concrete & Cement</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Additives_+_chemicals">Additives & Chemicals</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Guttering_+_drainage">Guttering & Drainage</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Insulation_+_damp">Insulation & Damp</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Plasterboard">Plasterboard</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Plastering_supplies">Plastering supplies</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Coving">Coving</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Roofing_supplies">Roofing supplies</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Builder%27%27s_metalwork">Builder's metalwork</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/building_supplies/Sealants">Sealants</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/building_hardware/timber_sheet">Timber & Sheet Materials</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Architrave">Architrave</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Trims">Trims</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Constructional_timber">Constructional timber</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Decorate_mouldings">Decorate mouldings</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Furniture_boards">Furniture boards</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Scaffold_boards">Scaffold boards</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Sheet_materials">Sheet materials</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/timber_sheet/Stairs_+_stair_parts">Stairs & stair parts</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/building_hardware/hardware">Hardware</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Screws">Screws</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Handles_+_knobs">Handles & knobs</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Hinges">Hinges</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Bolts,_nuts_+_washers">Bolts, nuts & washers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Locks_+_padlocks">Locks & padlocks</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Brackets">Brackets</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Hooks">Hooks</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Furniture_hardware">Furniture hardware</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Fixings_+_wall_plugs">Fixings & wall plugs</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Nails">Nails</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/hardware/Ropes,_bungees_+_chains">Ropes, bungees & chains</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/building_hardware/doors_windows">Doors & windows</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Internal_doors">Internal doors</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/External_doors">External doors</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Garage_doors">Garage doors</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Windows">Windows</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Doors_locks_+_latches">Door locks & latches</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Door_frames_+_fixtures">Door frames & fixtures</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Porches">Porches</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/building_hardware/doors_windows/Loft_doors_+_hatches">Loft doors & hatches</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/heating_plumbing" id="navbarDropdown" role="button" aria-expanded="false">
                        Heating & Plumbing<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/heating_plumbing/fires_stoves_heaters">Fires, stoves & heaters</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Electric_Fires">Electric fires</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Stoves">Stoves</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_suites">Fireplace suites</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Heaters">Heaters</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Gas_Fires">Gas fires</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Fire_surrounds">Fire surrounds</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_accessories">Fireplace accessories</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Logs_charcoal">Logs & charcoal</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_hearths">Fireplace hearths</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/All_fires">All fires</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/fires_stoves_heaters/Chimney_sweeping">Chimney sweeping</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/heating_plumbing/plumbing">Plumbing</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Pipe_fittings">Pipe fittings</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Wastes_traps">Wastes & traps</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Pipes">Pipes</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Bathroom_fittings">Bathroom fittings</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Valves">Valves</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Connectors">Connectors</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Plumbing_tools">Plumbing tools</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Elbows">Elbows</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Pipe_insulation">Pipe insulation</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/plumbing/Stopcocks">Stopcocks</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/heating_plumbing/central_heating">Central heating</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/central_heating/Thermostats">Thermostats</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/central_heating/Underfloor_heating">Underfloor heating</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/central_heating/Water_heaters">Water heaters</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/central_heating/Heating_treatments">Heating treatments</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/central_heating/Boilers">Boilers</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/heating_plumbing/air_treatment">Air treatment</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Dehumidifiers">Dehumidifiers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Extractor_fans">Extractor fans</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Ducting">Ducting</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Vents">Vents</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Air_purifiers">Air purifiers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Air_conditioners">Air conditioners</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Ceiling_fans">Ceiling fans</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Fans">Fans</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/heating_plumbing/air_treatment/Humidifiers">Humidifiers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/home_furniture" id="navbarDropdown" role="button" aria-expanded="false">
                    Home & Furniture<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/home_furniture/home_furnishings">Home furnishings</a>
                                        </p>
                                        <a href="/categories/home_furniture/home_furnishings/Home_decor_trends" class="list-group-item list-group-item-action">Home decor trends</a>
                                        <a href="/categories/home_furniture/home_furnishings/Blinds" class="list-group-item list-group-item-action">Blinds</a>
                                        <a href="/categories/home_furniture/home_furnishings/Curtains" class="list-group-item list-group-item-action">Curtains</a>
                                        <a href="/categories/home_furniture/home_furnishings/Curtain_poles" class="list-group-item list-group-item-action">Curtain poles</a>
                                        <a href="/categories/home_furniture/home_furnishings/Curtain_tracks" class="list-group-item list-group-item-action">Curtain tracks</a>
                                        <a href="/categories/home_furniture/home_furnishings/Curtain_accessories" class="list-group-item list-group-item-action">Curtain accessories</a>
                                        <a href="/categories/home_furniture/home_furnishings/Cushions" class="list-group-item list-group-item-action">Cushions</a>
                                        <a href="/categories/home_furniture/home_furnishings/Rugs" class="list-group-item list-group-item-action">Rugs</a>
                                        <a href="/categories/home_furniture/home_furnishings/Door_mats" class="list-group-item list-group-item-action">Door mats</a>
                                        <a href="/categories/home_furniture/home_furnishings/Bedding" class="list-group-item list-group-item-action">Bedding</a>
                                        <a href="/categories/home_furniture/home_furnishings/Throws_+_blankets" class="list-group-item list-group-item-action">Throws & blankets</a>
                                        <a href="/categories/home_furniture/home_furnishings/Bean_bags" class="list-group-item list-group-item-action">Bean bags</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/home_furniture/home_accessories">Home accessories</a>
                                        </p>
                                        <a href="/categories/home_furniture/home_accessories/Cooking_+_dining" class="list-group-item list-group-item-action">Cooking & dining</a>
                                        <a href="/categories/home_furniture/home_accessories/Mirrors" class="list-group-item list-group-item-action">Mirrors</a>
                                        <a href="/categories/home_furniture/home_accessories/Wall_art" class="list-group-item list-group-item-action">Wall art</a>
                                        <a href="/categories/home_furniture/home_accessories/Picture_frames" class="list-group-item list-group-item-action">Picture frames</a>
                                        <a href="/categories/home_furniture/home_accessories/Ornaments" class="list-group-item list-group-item-action">Ornaments</a>
                                        <a href="/categories/home_furniture/home_accessories/Artificial_flowers" class="list-group-item list-group-item-action">Artificial flowers</a>
                                        <a href="/categories/home_furniture/home_accessories/Bottles,_vases_+_jars" class="list-group-item list-group-item-action">Bottles, vases & jars</a>
                                        <a href="/categories/home_furniture/home_accessories/Clocks" class="list-group-item list-group-item-action">Clocks</a>
                                        <a href="/categories/home_furniture/home_accessories/Candles" class="list-group-item list-group-item-action">Candles</a>
                                        <a href="/categories/home_furniture/home_accessories/Candle_holders" class="list-group-item list-group-item-action">Candle holders</a>
                                        <a href="/categories/home_furniture/home_accessories/Children%27%27s_decor" class="list-group-item list-group-item-action">Children's decor</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/home_furniture/storage_shelving">Storage & shelving</a>
                                        </p>
                                        <a href="/categories/home_furniture/storage_shelving/Bookcases" class="list-group-item list-group-item-action">Bookcases</a>
                                        <a href="/categories/home_furniture/storage_shelving/Cabinets" class="list-group-item list-group-item-action">Cabinets</a>
                                        <a href="/categories/home_furniture/storage_shelving/Shelves" class="list-group-item list-group-item-action">Shelves</a>
                                        <a href="/categories/home_furniture/storage_shelving/Shelf_brackets" class="list-group-item list-group-item-action">Shelf brackets</a>
                                        <a href="/categories/home_furniture/storage_shelving/Shelving_systems" class="list-group-item list-group-item-action">Shelving systems</a>
                                        <a href="/categories/home_furniture/storage_shelving/Shelving_units" class="list-group-item list-group-item-action">Shelving units</a>
                                        <a href="/categories/home_furniture/storage_shelving/Storage_baskets" class="list-group-item list-group-item-action">Storage baskets</a>
                                        <a href="/categories/home_furniture/storage_shelving/Storage_trunks" class="list-group-item list-group-item-action">Storage trunks</a>
                                        <a href="/categories/home_furniture/storage_shelving/Storage_boxes" class="list-group-item list-group-item-action">Storage boxes</a>
                                        <a href="/categories/home_furniture/storage_shelving/Storage_cubes" class="list-group-item list-group-item-action">Storage cubes</a>
                                        <a href="/categories/home_furniture/storage_shelving/Storage_cabinets" class="list-group-item list-group-item-action">Storage cabinets</a>
                                        <a href="/categories/home_furniture/storage_shelving/Storage_drawers" class="list-group-item list-group-item-action">Storage drawers</a>
                                        <a href="/categories/home_furniture/storage_shelving/Packaging" class="list-group-item list-group-item-action">Packaging</a>
                                        <a href="/categories/home_furniture/storage_shelving/Garage_storage" class="list-group-item list-group-item-action">Garage storage</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/home_furniture/laundry_utility">Laundry & utility</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Washing_machines">Washing machines</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Tumble_dryers">Tumble dryers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Washer_dryers">Washer dryers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Laundry_accessories">Laundry accessories</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Laundry_baskets">Laundry baskets</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Irons">Irons</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Ironing_boards">Ironing boards</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Clothes_airers">Clothes airers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Washing_lines">Washing lines</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Household_cleaning">Household cleaning</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Bins">Bins</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Carpet_shampoo">Carpet shampoo</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Vacuum_cleaners">Vacuum cleaners</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Steam_cleaners">Steam cleaners</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/home_furniture/laundry_utility/Window_vacuums">Window vacuums</a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/kitchen_bathroom" id="navbarDropdown" role="button" aria-expanded="false">
                        Kitchen & Bathroom<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/kitchen_bathroom/kitchen">Kitchen</a>
                                        </p>
                                        <a href="/categories/kitchen_bathroom/kitchen/Bar_stools" class="list-group-item list-group-item-action">Bar stools</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Cabinets" class="list-group-item list-group-item-action">Cabinets</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Kitchen_bins" class="list-group-item list-group-item-action">Kitchen bins</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Kitchen_doors" class="list-group-item list-group-item-action">Kitchen doors</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Kitchen_sinks" class="list-group-item list-group-item-action">Kitchen sinks</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Kitchen_storage_+_accessories" class="list-group-item list-group-item-action">Kitchen storage & accessories</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Kitchen_taps" class="list-group-item list-group-item-action">Kitchen taps</a>
                                        <a href="/categories/kitchen_bathroom/kitchen/Kitchen_worktops" class="list-group-item list-group-item-action">Kitchen worktops</a>                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/kitchen_bathroom/appliances">Appliances</a>
                                        </p>
                                        <a href="/categories/kitchen_bathroom/appliances/Cooker_hoods" class="list-group-item list-group-item-action">Cooker hoods</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Cookers" class="list-group-item list-group-item-action">Cookers</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Fridge_freezers" class="list-group-item list-group-item-action">Fridge freezers</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Hobs" class="list-group-item list-group-item-action">Hobs</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Kettles" class="list-group-item list-group-item-action">Kettles</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Microwaves" class="list-group-item list-group-item-action">Microwaves</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Ovens" class="list-group-item list-group-item-action">Ovens</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Washing_machines" class="list-group-item list-group-item-action">Washing machines</a>
                                        <a href="/categories/kitchen_bathroom/appliances/Dishwashers" class="list-group-item list-group-item-action">Dishwashers</a>                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/kitchen_bathroom/bathrooms">Bathrooms</a>
                                        </p>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Baths" class="list-group-item list-group-item-action">Baths</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Bath_panels" class="list-group-item list-group-item-action">Bath panels</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Bathroom_suites" class="list-group-item list-group-item-action">Bathroom suites</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Bathroom_wall_panels" class="list-group-item list-group-item-action">Bathroom wall panels</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Taps" class="list-group-item list-group-item-action">Taps</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Toilet_seats" class="list-group-item list-group-item-action">Toilet seats</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Toilets" class="list-group-item list-group-item-action">Toilets</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Basins" class="list-group-item list-group-item-action">Basins</a>
                                        <a href="/categories/kitchen_bathroom/bathrooms/Accessories" class="list-group-item list-group-item-action">Accessories</a>                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/kitchen_bathroom/showering">Showering</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Bath_shower_screens">Bath shower screens</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Curtain_rails_+_rods">Curtain rails & rods</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Riser_rails">Riser rails</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Shower_curtains">Shower curtains</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Shower_heads">Shower heads</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Shower_hoses">Shower hoses</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Shower_kits">Shower kits</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Shower_trays">Shower trays</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Showers">Showers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/kitchen_bathroom/showering/Wet_rooms">Wet rooms</a>                                                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/lighting_electrical" id="navbarDropdown" role="button" aria-expanded="false">
                        Lighting & Electrical<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/lighting_electrical/indoor_lights">Indoor Lights</a>
                                        </p>
                                        <a href="/categories/lighting_electrical/indoor_lights/Ceiling_lights" class="list-group-item list-group-item-action">Ceiling lights</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Floor_lamps" class="list-group-item list-group-item-action">Floor lamps</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Light_bulbs" class="list-group-item list-group-item-action">Light bulbs</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Table_lamps" class="list-group-item list-group-item-action">Table lamps</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Chandeliers" class="list-group-item list-group-item-action">Chandeliers</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Lamp_shades" class="list-group-item list-group-item-action">Lamp shades</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Wall_lights" class="list-group-item list-group-item-action">Wall lights</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Spotlights_+_downlights" class="list-group-item list-group-item-action">Spotlights & downlights</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Pendant_lights" class="list-group-item list-group-item-action">Pendant lights</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Light_fixtures & fittings" class="list-group-item list-group-item-action">Light fixtures & fittings</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Children%27%27s_lights" class="list-group-item list-group-item-action">Children's lights</a>
                                        <a href="/categories/lighting_electrical/indoor_lights/Cabinet_lights" class="list-group-item list-group-item-action">Cabinet lights</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/lighting_electrical/electrical">Outdoor Lights</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Wall_lights">Wall lights</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Security_lights">Security lights</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Garden_string_lights">Garden string lights</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Spike_lights">Spike lights</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Lanterns">Lanterns</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Post_lights">Post lights</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Decking_lights">Decking lights</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/outdoor_lights/Ground_lights">Ground lights</a> 
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/lighting_electrical/electrical">Electrical</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Switches_+_sockets">Switches & sockets</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Extensions_leads_+_reels">Extensions leads & reels</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Wiring_cables">Wiring cables</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Cable_management">Cable management</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Junction_boxes_+_connectors">Junction boxes & connectors</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Consumer_units_+_breakers">Consumer units & breakers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Door_bells">Door bells</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Networking_+_broadband">Networking & broadband</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/TV_aerials">TV aerials</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Electricians_tools_+_supplies">Electricians tools & supplies</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Batteries_+_chargers">Batteries & chargers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/EV_charging">EV charging</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/electrical/Generators">Generators</a>
                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/lighting_electrical/safety_security">Safety & security</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/CCTV cameras">CCTV cameras</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Burglar_alarms">Burglar alarms</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Smoke_alarms">Smoke alarms</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Carbon_monoxide_alarms">Carbon monoxide alarms</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Door_locks_+_latches">Door locks & latches</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Safes">Safes</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Key_safes_+_cash_boxes">Key safes & cash boxes</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Bike_locks">Bike locks</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Fire_extinguishers">Fire extinguishers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Padlocks">Padlocks</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/lighting_electrical/safety_security/Gate_locks">Gate locks</a>   
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/lighting_electrical/smart_home">Smart home</a>
                                        </p>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_light_bulbs" class="list-group-item list-group-item-action">Smart light bulbs</a>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_alarms" class="list-group-item list-group-item-action">Smart alarms</a>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_cameras" class="list-group-item list-group-item-action">Smart cameras</a>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_heating" class="list-group-item list-group-item-action">Smart heating</a>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_door_locks" class="list-group-item list-group-item-action">Smart door locks</a>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_door_bells" class="list-group-item list-group-item-action">Smart door bells</a>
                                        <a href="/categories/lighting_electrical/smart_home/Smart_plugs" class="list-group-item list-group-item-action">Smart plugs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/outdoor_garden" id="navbarDropdown" role="button" aria-expanded="false">
                        Outdoor & Garden<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/outdoor_garden/garden_tools">Garden tools</a>
                                        </p>
                                        <a href="/categories/outdoor_garden/garden_tools/Pressure_washers" class="list-group-item list-group-item-action">Pressure washers</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Lawnmowers" class="list-group-item list-group-item-action">Lawnmowers</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Garden_hand_tools" class="list-group-item list-group-item-action">Garden hand tools</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Garden_power_tools" class="list-group-item list-group-item-action">Garden power tools</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Wheelbarrows_+_trolleys" class="list-group-item list-group-item-action">Wheelbarrows & trolleys</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Incinerators" class="list-group-item list-group-item-action">Incinerators</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Shovels_+_spades" class="list-group-item list-group-item-action">Shovels & spades</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Composters" class="list-group-item list-group-item-action">Composters</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Garden_waste_bags_+_sacks" class="list-group-item list-group-item-action">Garden waste bags & sacks</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Watering_cans" class="list-group-item list-group-item-action">Watering cans</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Gardening_gloves" class="list-group-item list-group-item-action">Gardening gloves</a>
                                        <a href="/categories/outdoor_garden/garden_tools/Garden_kneelers" class="list-group-item list-group-item-action">Garden kneelers</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/outdoor_garden/growing_planting">Growing & planting</a>
                                        </p>
                                        <a href="/categories/outdoor_garden/growing_planting/Plants,_seeds_+_bulbs" class="list-group-item list-group-item-action">Plants, seeds & bulbs</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Pots,_planters_+_askets" class="list-group-item list-group-item-action">Pots, planters & baskets</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Compost,_manure_+_soil" class="list-group-item list-group-item-action">Compost, manure & soil</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Fertilisers_+_plant_food" class="list-group-item list-group-item-action">Fertilisers & plant food</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Pest_control" class="list-group-item list-group-item-action">Pest control</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Hoses,_pumps_+_irrigation" class="list-group-item list-group-item-action">Hoses, pumps & irrigation</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Lawn_care" class="list-group-item list-group-item-action">Lawn care</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Weed_killers" class="list-group-item list-group-item-action">Weed killers</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Plant_protection_+_support" class="list-group-item list-group-item-action">Plant protection & support</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Propagators" class="list-group-item list-group-item-action">Propagators</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Garden_cloches" class="list-group-item list-group-item-action">Garden cloches</a>
                                        <a href="/categories/outdoor_garden/growing_planting/Plant_trays" class="list-group-item list-group-item-action">Plant trays</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/outdoor_garden/landscaping">Landscaping</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Fencing">Fencing</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Paving_+_walling">Paving & walling</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Trellis_+_screening">Trellis & screening</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Stone,_gravel_+_chippings">Stone, gravel & chippings</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Decking">Decking</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Garden_gates">Garden gates</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Artificial_grass">Artificial grass</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Lawn_turf">Lawn turf</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Timber_sleepers">Timber sleepers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Lawn_edging">Lawn edging</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Garden_railings">Garden railings</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/outdoor_garden/landscaping/Ponds_+_water_features">Ponds & water features</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/outdoor_garden/garden_buildings_storage">Garden buildings & Storage</a>
                                        </p>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Sheds" class="list-group-item list-group-item-action">Sheds</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Garden_storage_boxes" class="list-group-item list-group-item-action">Garden storage boxes</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Summerhouses" class="list-group-item list-group-item-action">Summerhouses</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Greenhouses & growhouses" class="list-group-item list-group-item-action">Greenhouses & growhouses</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Pergolas" class="list-group-item list-group-item-action">Pergolas</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Gazebos" class="list-group-item list-group-item-action">Gazebos</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Arches" class="list-group-item list-group-item-action">Arches</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Arbours" class="list-group-item list-group-item-action">Arbours</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Log_cabins_+_garden offices" class="list-group-item list-group-item-action">Log cabins & garden offices</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Shed_bases" class="list-group-item list-group-item-action">Shed bases</a>
                                        <a href="/categories/outdoor_garden/garden_buildings_storage/Awnings" class="list-group-item list-group-item-action">Awnings</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                <div class="list-group list-group-flush">
                                    <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                        <a href="/categories/outdoor_garden/landscaping">Outdoor Living</a>
                                    </p>
                                    <a href="/categories/outdoor_garden/outdoor_living/Garden_furniture" class="list-group-item list-group-item-action">Garden furniture</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Hot_tubs_+_saunas" class="list-group-item list-group-item-action">Hot tubs & saunas</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/BBQs_+_BBQ_tools" class="list-group-item list-group-item-action">BBQs & BBQ tools</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Chimineas_+_fire_pits" class="list-group-item list-group-item-action">Chimineas & fire pits</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Sunloungers" class="list-group-item list-group-item-action">Sunloungers</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Home_bars" class="list-group-item list-group-item-action">Home bars</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Parasols_+_bases" class="list-group-item list-group-item-action">Parasols & bases</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Pizza_ovens" class="list-group-item list-group-item-action">Pizza ovens</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Pools_+_accessories" class="list-group-item list-group-item-action">Pools & accessories</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Hammocks" class="list-group-item list-group-item-action">Hammocks</a>
                                    <a href="/categories/outdoor_garden/outdoor_living/Garden_furniture_covers" class="list-group-item list-group-item-action">Garden furniture covers</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/painting_decorating" id="navbarDropdown" role="button" aria-expanded="false">
                        Painting & Decorating<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/painting_decorating/interior_paint">Interior paint</a>
                                        </p>
                                        <a href="/categories/painting_decorating/interior_paint/Emulsion_paint" class="list-group-item list-group-item-action">Emulsion paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Metal_+_wood paint" class="list-group-item list-group-item-action">Metal & wood paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Paint_mixing" class="list-group-item list-group-item-action">Paint mixing</a>
                                        <a href="/categories/painting_decorating/interior_paint/Furniture_paint" class="list-group-item list-group-item-action">Furniture paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Primers_+_undercoats" class="list-group-item list-group-item-action">Primers & undercoats</a>
                                        <a href="/categories/painting_decorating/interior_paint/Damp_+_anti-mould_paint" class="list-group-item list-group-item-action">Damp & anti-mould paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Tile_paint" class="list-group-item list-group-item-action">Tile paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Radiator_paint" class="list-group-item list-group-item-action">Radiator paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Spray_paint" class="list-group-item list-group-item-action">Spray paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Floor_paint" class="list-group-item list-group-item-action">Floor paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Chalkboard_paint" class="list-group-item list-group-item-action">Chalkboard paint</a>
                                        <a href="/categories/painting_decorating/interior_paint/Paint_samples" class="list-group-item list-group-item-action">Paint samples</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/painting_decorating/exterior_paint">Exterior paint</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/exterior_paint/Metal_+_wood_paint">Metal &amp; wood paint</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/exterior_paint/Masonry_paint">Masonry paint</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/exterior_paint/Fence_paint">Fence paint</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/exterior_paint/Paint_mixing">Paint mixing</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/exterior_paint/Door_paint">Door paint</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/exterior_paint/Decking_paint">Decking paint</a>                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/painting_decorating/decorating_supplies">Decorating supplies</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Paint_rollers">Paint rollers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Paint_brushes">Paint brushes</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Paint_trays">Paint trays</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Paint_pads">Paint pads</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Dust_sheets">Dust sheets</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Fillers">Fillers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Tapes">Tapes</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Sandpaper">Sandpaper</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Glues_+_adhesives">Glues & adhesives</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Sealants">Sealants</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Paint_stripper">Paint stripper</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/painting_decorating/decorating_supplies/Expanding_foam">Expanding foam</a>                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/painting_decorating/wallpaper_coverings">Wallpaper & coverings</a>
                                        </p>
                                        <a href="/categories/painting_decorating/wallpaper_coverings/Wallpaper" class="list-group-item list-group-item-action">Wallpaper</a>
                                        <a href="/categories/painting_decorating/wallpaper_coverings/Murals" class="list-group-item list-group-item-action">Murals</a>
                                        <a href="/categories/painting_decorating/wallpaper_coverings/Wall_stickers" class="list-group-item list-group-item-action">Wall stickers</a>
                                        <a href="/categories/painting_decorating/wallpaper_coverings/Sticky_back_plastic_+_window_film" class="list-group-item list-group-item-action">Sticky back plastic & window film</a>
                                        <a href="/categories/painting_decorating/wallpaper_coverings/Wallpaper_tools" class="list-group-item list-group-item-action">Wallpaper tools</a>
                                        <a href="/categories/painting_decorating/wallpaper_coverings/Lining_paper" class="list-group-item list-group-item-action">Lining paper</a>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/tiling_flooring" id="navbarDropdown" role="button" aria-expanded="false">
                        Tiling & Flooring<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tiling_flooring/flooring">Flooring</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Laminate">Laminate</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Luxury_vinyl click">Luxury vinyl click</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Sheet_vinyl">Sheet vinyl</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Adhesive_vinyl_tiles">Adhesive vinyl tiles</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Solid_wood">Solid wood</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Engineered_wood">Engineered wood</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Adhesive_vinyl_planks">Adhesive vinyl planks</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Carpet">Carpet</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring/Flooring_samples">Flooring samples</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tiling_flooring/tiles">Tiles</a>
                                        </p>
                                        <a href="/categories/tiling_flooring/tiles/Floor_tiles" class="list-group-item list-group-item-action">Floor tiles</a>
                                        <a href="/categories/tiling_flooring/tiles/Wall_tiles" class="list-group-item list-group-item-action">Wall tiles</a>
                                        <a href="/categories/tiling_flooring/tiles/Bathroom_tiles" class="list-group-item list-group-item-action">Bathroom tiles</a>
                                        <a href="/categories/tiling_flooring/tiles/Kitchen_tiles" class="list-group-item list-group-item-action">Kitchen tiles</a>
                                        <a href="/categories/tiling_flooring/tiles/Mosaic_+_border_tiles" class="list-group-item list-group-item-action">Mosaic & border tiles</a>
                                        <a href="/categories/tiling_flooring/tiles/Outdoor_tiles" class="list-group-item list-group-item-action">Outdoor tiles</a>
                                        <a href="/categories/tiling_flooring/tiles/Sample_tiles" class="list-group-item list-group-item-action">Sample tiles</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tiling_flooring/flooring_tools">Flooring tools</a>
                                        </p>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring_tools/Underlay">Underlay</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring_tools/Scotias_+_floor_trims">Scotias & floor trims</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring_tools/Thresholds,_t-bars_+_reducers">Thresholds, t-bars & reducers</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring_tools/Skirting_+_architrave">Skirting & architrave</a>
                                        <a class="list-group-item list-group-item-action" href="/categories/tiling_flooring/flooring_tools/Underfloor_heating">Underfloor heating</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tiling_flooring/tiling_tools">Tiling tools</a>
                                        </p>
                                        <a href="/categories/tiling_flooring/tiling_tools/Tile_trims" class="list-group-item list-group-item-action">Tile trims</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Grout" class="list-group-item list-group-item-action">Grout</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Glues_+_adhesives" class="list-group-item list-group-item-action">Glues & Adhesive</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Tiling_trowels" class="list-group-item list-group-item-action">Tiling trowels</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Tile_cutters" class="list-group-item list-group-item-action">Tile cutters</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Tile_spacers" class="list-group-item list-group-item-action">Tile spacers</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Tile_scribes" class="list-group-item list-group-item-action">Tile scribes</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Grouting_tools" class="list-group-item list-group-item-action">Grouting tools</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Tile_kits" class="list-group-item list-group-item-action">Tile kits</a>
                                        <a href="/categories/tiling_flooring/tiling_tools/Sealant" class="list-group-item list-group-item-action">Sealant</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-hover position-static" id="navbarHeader">
                    <a class="nav-link" href="/categories/tools_equipment" id="navbarDropdown" role="button" aria-expanded="false">
                        Tools & Equipment<span>  <i class="fa-solid fa-caret-down fa-sm"></i></span>
                    </a>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    ">

                        <div class="container">
                            <div class="row my-4">
                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tools_equipment/power_tools">Power tools</a>
                                        </p>
                                        <a href="/categories/tools_equipment/power_tools/Drills" class="list-group-item list-group-item-action">Drills</a>
                                        <a href="/categories/tools_equipment/power_tools/Saws" class="list-group-item list-group-item-action">Saws</a>
                                        <a href="/categories/tools_equipment/power_tools/Sanders" class="list-group-item list-group-item-action">Sanders</a>
                                        <a href="/categories/tools_equipment/power_tools/Multi_tools_+_hobby_tools" class="list-group-item list-group-item-action">Multi tools &amp; hobby tools</a>
                                        <a href="/categories/tools_equipment/power_tools/Angle_grinders" class="list-group-item list-group-item-action">Angle grinders</a>
                                        <a href="/categories/tools_equipment/power_tools/Kits_+_twinpacks" class="list-group-item list-group-item-action">Kits &amp; twinpacks</a>
                                        <a href="/categories/tools_equipment/power_tools/Impact_drivers_+_wrenches" class="list-group-item list-group-item-action">Impact drivers &amp; wrenches</a>
                                        <a href="/categories/tools_equipment/power_tools/Screwdrivers" class="list-group-item list-group-item-action">Screwdrivers</a>
                                        <a href="/categories/tools_equipment/power_tools/Nail_guns" class="list-group-item list-group-item-action">Nail guns</a>
                                        <a href="/categories/tools_equipment/power_tools/Routers" class="list-group-item list-group-item-action">Routers</a>
                                        <a href="/categories/tools_equipment/power_tools/Planers" class="list-group-item list-group-item-action">Planers</a>
                                        <a href="/categories/tools_equipment/power_tools/Workshop_machinery" class="list-group-item list-group-item-action">Workshop machinery</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tools_equipment/power_tool_accessories">Power tool accessories</a>
                                        </p>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Sawing_+_blades" class="list-group-item list-group-item-action">Sawing &amp; blades</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Drill_bits" class="list-group-item list-group-item-action">Drill bits</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Sanding" class="list-group-item list-group-item-action">Sanding</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Mixed_drill_bit_sets" class="list-group-item list-group-item-action">Mixed drill bit sets</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Multi_tool_accessories" class="list-group-item list-group-item-action">Multi tool accessories</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Holesaws" class="list-group-item list-group-item-action">Holesaws</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Angle_grinder_discs" class="list-group-item list-group-item-action">Angle grinder discs</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Screwdriver_bits" class="list-group-item list-group-item-action">Screwdriver bits</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Batteries_+_chargers" class="list-group-item list-group-item-action">Batteries &amp; chargers</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Routing" class="list-group-item list-group-item-action">Routing</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Chucks,_keys_+_holders" class="list-group-item list-group-item-action">Chucks, keys &amp; holders</a>
                                        <a href="/categories/tools_equipment/power_tool_accessories/Cleaning_+_preparation" class="list-group-item list-group-item-action">Cleaning &amp; preparation</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tools_equipment/hand_tools">Hand tools</a>
                                        </p>
                                        <a href="/categories/tools_equipment/hand_tools/Hand_saws" class="list-group-item list-group-item-action">Hand saws</a>
                                        <a href="/categories/tools_equipment/hand_tools/Measures_+_levels" class="list-group-item list-group-item-action">Measures & levels</a>
                                        <a href="/categories/tools_equipment/hand_tools/Spanners_+_wrenches" class="list-group-item list-group-item-action">Spanners & wrenches</a>
                                        <a href="/categories/tools_equipment/hand_tools/Screwdrivers_+_keys" class="list-group-item list-group-item-action">Screwdrivers & keys</a>
                                        <a href="/categories/tools_equipment/hand_tools/Tool_kits" class="list-group-item list-group-item-action">Tool kits</a>
                                        <a href="/categories/tools_equipment/hand_tools/Demolition" class="list-group-item list-group-item-action">Demolition</a>
                                        <a href="/categories/tools_equipment/hand_tools/Cutting_tools" class="list-group-item list-group-item-action">Cutting tools</a>
                                        <a href="/categories/tools_equipment/hand_tools/Plastering_tools" class="list-group-item list-group-item-action">Plastering tools</a>
                                        <a href="/categories/tools_equipment/hand_tools/Woodworking_tools" class="list-group-item list-group-item-action">Woodworking tools</a>
                                        <a href="/categories/tools_equipment/hand_tools/Pliers" class="list-group-item list-group-item-action">Pliers</a>
                                        <a href="/categories/tools_equipment/hand_tools/Bricklaying_tools" class="list-group-item list-group-item-action">Bricklaying tools</a>
                                        <a href="/categories/tools_equipment/hand_tools/Cable_tools" class="list-group-item list-group-item-action">Cable tools</a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                    <div class="list-group list-group-flush">
                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                            <a href="/categories/tools_equipment/safety_workwear">Safety & workwear</a>
                                        </p>
                                        <a href="/categories/tools_equipment/safety_workwear/Workwear" class="list-group-item list-group-item-action">Workwear</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Work_trousers" class="list-group-item list-group-item-action">Work trousers</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Overalls_+_coveralls" class="list-group-item list-group-item-action">Overalls & coveralls</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Work_jackets" class="list-group-item list-group-item-action">Work jackets</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Hoodies_+_sweatshirts" class="list-group-item list-group-item-action">Hoodies & sweatshirts</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Work_shorts" class="list-group-item list-group-item-action">Work shorts</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Footwear" class="list-group-item list-group-item-action">Footwear</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Safety_boots" class="list-group-item list-group-item-action">Safety boots</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Safety_trainers" class="list-group-item list-group-item-action">Safety trainers</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Gloves" class="list-group-item list-group-item-action">Gloves</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Dust_masks_+_filters" class="list-group-item list-group-item-action">Dust masks & filters</a>
                                        <a href="/categories/tools_equipment/safety_workwear/Goggles_+_glasses" class="list-group-item list-group-item-action">Goggles & glasses</a>                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                <div class="list-group list-group-flush">
                                    <p class="mb-0 list-group-item text-uppercase font-weight-bold">
                                        <a href="/categories/tools_equipment/equipment">Equipment</a>
                                    </p>
                                    <a href="/categories/tools_equipment/equipment/Tool_storage" class="list-group-item list-group-item-action">Tool storage</a>
                                    <a href="/categories/tools_equipment/equipment/Ladders_+_steps" class="list-group-item list-group-item-action">Ladders &amp; steps</a>
                                    <a href="/categories/tools_equipment/equipment/Workbenches_+_trestles" class="list-group-item list-group-item-action">Workbenches &amp; trestles</a>
                                    <a href="/categories/tools_equipment/equipment/Trolleys_+_carts" class="list-group-item list-group-item-action">Trolleys &amp; carts</a>
                                    <a href="/categories/tools_equipment/equipment/Cement_mixers" class="list-group-item list-group-item-action">Cement mixers</a>
                                    <a href="/categories/tools_equipment/equipment/Vacuum_cleaners" class="list-group-item list-group-item-action">Vacuum cleaners</a>
                                    <a href="/categories/tools_equipment/equipment/Car_care_+_maintenance" class="list-group-item list-group-item-action">Car care &amp; maintenance</a>
                                    <a href="/categories/tools_equipment/equipment/Workshop_machinery" class="list-group-item list-group-item-action">Workshop machinery</a>
                                    <a href="/categories/tools_equipment/equipment/Air_compressors" class="list-group-item list-group-item-action">Air compressors</a>
                                    <a href="/categories/tools_equipment/equipment/Torches_+_worklights" class="list-group-item list-group-item-action">Torches &amp; worklights</a>
                                    <a href="/categories/tools_equipment/equipment/Tarpaulins,_sheets_+_sacks" class="list-group-item list-group-item-action">Tarpaulins, sheets &amp; sacks</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- Left links -->
            
        </div>
        <!-- Collapsible wrapper -->

    </div>
    <!-- Container wrapper -->
    `
}

createTopNav();
createLogoNav();
createNav();
