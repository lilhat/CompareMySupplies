const createSideNav = () => {
    let sidenav = document.querySelector('.mobile-header');

    sidenav.innerHTML = `

    <nav class="navbar" id="mobile-navbar">
    <button class="btn btn-light" id="side-btn" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse-nav" aria-expanded="false" aria-controls="collapseExample">
        <i class="fas fa-bars fa-lg"></i>
    </button>
    <div class="collapse collapse-horizontal scroll-section bg-light" id="collapse-nav">
        <button class="btn btn-light" id="side-btn" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapse-nav" aria-expanded="false" aria-controls="collapseExample" style="--mdb-btn-color: orange;
    --mdb-btn-hover-color: #f7931e;
    --mdb-btn-hover-bg: #f5f5f5;
    --mdb-btn-focus-color: orange;
    --mdb-btn-active-color: #f7931e;">
            <i class="fas fa-bars fa-lg"></i>
        </button>
        <div class="flex-shrink-0 p-3 bg-light" style="width: 280px;" id="side-nav">
            <a href="/" class="d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom" id="top-section-side">
                <svg class="bi me-2" width="30" height="24">
                    <use xlink:href="#bootstrap"></use>
                </svg>
                <span>
                    <img src="/images/main-logo2.png" class="mobile-logo" alt="">
                </span>
            </a>
            <ul class="list-unstyled ps-0" id="top-list">
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/building_hardware">Building & Hardware</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-1">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/building_hardware/building_supplies">Building Supplies</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-1-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-1-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Aggregates_+_sand">Aggregates & Sand</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Bricks_+_blocks">Bricks & Blocks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Chemicals,_concrete_+_cement">Concrete & Cement</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Additives_+_chemicals">Additives & Chemicals</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Guttering_+_drainage">Guttering & Drainage</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Insulation_+_damp">Insulation & Damp</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Plasterboard">Plasterboard</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Plastering_supplies">Plastering supplies</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Coving">Coving</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Roofing_supplies">Roofing supplies</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Builder%27%27s_metalwork">Builder's metalwork</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/building_supplies/Sealants">Sealants</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/building_hardware/timber_sheet">Timber & Sheet Materials</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-1-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-1-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Architrave">Architrave</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Trims">Trims</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Constructional_timber">Constructional timber</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Decorate_mouldings">Decorate mouldings</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Furniture_boards">Furniture boards</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Scaffold_boards">Scaffold boards</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Sheet_materials">Sheet materials</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/timber_sheet/Stairs_+_stair_parts">Stairs & stair parts</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/building_hardware/hardware">Hardware</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-1-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-1-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Screws">Screws</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Handles_+_knobs">Handles & knobs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Hinges">Hinges</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Bolts,_nuts_+_washers">Bolts, nuts & washers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Locks_+_padlocks">Locks & padlocks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Brackets">Brackets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Hooks">Hooks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Furniture_hardware">Furniture hardware</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Fixings_+_wall_plugs">Fixings & wall plugs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Nails">Nails</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/hardware/Ropes,_bungees_+_chains">Ropes, bungees & chains</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/building_hardware/doors_windows">Doors & windows</a></a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-1-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-1-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Internal_doors">Internal doors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/External_doors">External doors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Garage_doors">Garage doors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Windows">Windows</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Doors_locks_+_latches">Door locks & latches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Door_frames_+_fixtures">Door frames & fixtures</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Porches">Porches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/building_hardware/doors_windows/Loft_doors_+_hatches">Loft doors & hatches</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/heating_plumbing">Heating & Plumbing</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-2">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/heating_plumbing/radiators">Radiators</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-2-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-2-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Double_panel_radiators">Double panel radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Towel_radiators">Towel radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Column_radiators">Column radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Designer_radiators">Designer radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Oil_filled_radiators">Oil filled radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Vertical_radiators">Vertical radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Radiator_valves">Radiator valves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Radiator_covers">Radiator covers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Cast_iron_radiators">Cast iron radiators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/radiators/Heating_elements">Heating elements</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/heating_plumbing/fires_stoves_heaters">Fires, stoves & heaters</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-2-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-2-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Electric_Fires">Electric fires</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Stoves">Stoves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_suites">Fireplace suites</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Heaters">Heaters</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Gas_Fires">Gas fires</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Fire_surrounds">Fire surrounds</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_accessories">Fireplace accessories</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Logs_charcoal">Logs &amp; charcoal</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_hearths">Fireplace hearths</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/All_fires">All fires</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/fires_stoves_heaters/Chimney_sweeping">Chimney sweeping</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/heating_plumbing/plumbing">Plumbing</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-2-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-2-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Pipe_fittings">Pipe fittings</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Wastes_traps">Wastes &amp; traps</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Pipes">Pipes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Bathroom_fittings">Bathroom fittings</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Valves">Valves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Connectors">Connectors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Plumbing_tools">Plumbing tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Elbows">Elbows</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Pipe_insulation">Pipe insulation</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/plumbing/Stopcocks">Stopcocks</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/heating_plumbing/central_heating">Central heating</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-2-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-2-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/central_heating/Thermostats">Thermostats</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/central_heating/Underfloor_heating">Underfloor heating</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/central_heating/Water_heaters">Water heaters</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/central_heating/Heating_treatments">Heating treatments</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/central_heating/Boilers">Boilers</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/heating_plumbing/air_treatment">Air treatment</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-2-5" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-2-5">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Dehumidifiers">Dehumidifiers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Extractor_fans">Extractor fans</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Ducting">Ducting</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Vents">Vents</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Air_purifiers">Air purifiers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Air_conditioners">Air conditioners</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Ceiling_fans">Ceiling fans</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Fans">Fans</a></li>
                                        <li class="link-dark rounded"><a href="/categories/heating_plumbing/air_treatment/Humidifiers">Humidifiers</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/home_furniture">Home & Furniture</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-3">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/home_furniture/furniture">Furniture</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-3-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-3-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Bedroom_furniture">Bedroom furniture</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Wardrobes">Wardrobes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Sliding_wardrobe_doors">Sliding wardrobe doors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Beds">Beds</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Chairs">Chairs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Bedside_tables">Bedside tables</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Chest_of_drawers">Chest of drawers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Mattresses">Mattresses</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Desks">Desks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Tables">Tables</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/furniture/Sideboards">Sideboards</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/home_furniture/home_furnishings">Home furnishings</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-3-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-3-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Home_decor_trends">Home decor trends</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Blinds">Blinds</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Curtains">Curtains</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Curtain_poles">Curtain poles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Curtain_tracks">Curtain tracks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Curtain_accessories">Curtain accessories</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Cushions">Cushions</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Rugs">Rugs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Door_mats">Door mats</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Bedding">Bedding</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Throws_+_blankets">Throws & blankets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_furnishings/Bean_bags">Bean bags</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/home_furniture/home_accessories">Home accessories</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-3-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-3-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Cooking_+_dining">Cooking & dining</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Mirrors">Mirrors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Wall_art">Wall art</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Picture_frames">Picture frames</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Ornaments">Ornaments</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Artificial_flowers">Artificial flowers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Bottles,_vases_+_jars">Bottles, vases & jars</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Clocks">Clocks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Candles">Candles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Candle_holders">Candle holders</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/home_accessories/Children%27%27s_decor">Children's decor</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/home_furniture/storage_shelving">Storage & shelving</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-3-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-3-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Shelves">Shelves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Shelf_brackets">Shelf brackets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Shelving_systems">Shelving systems</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Shelving_units">Shelving units</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Storage_baskets">Storage baskets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Storage_trunks">Storage trunks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Storage_boxes">Storage boxes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Storage_cubes">Storage cubes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Storage_cabinets">Storage cabinets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Storage_drawers">Storage drawers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Packaging">Packaging</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/storage_shelving/Garage_storage">Garage storage</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/home_furniture/laundry_utility">Laundry & utility</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-4-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-4-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Laundry_baskets">Laundry baskets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Irons">Irons</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Ironing_boards">Ironing boards</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Clothes_airers">Clothes airers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Washing_lines">Washing lines</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Household_cleaning">Household cleaning</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Bins">Bins</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Carpet_shampoo">Carpet shampoo</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Vacuum_cleaners">Vacuum cleaners</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Steam_cleaners">Steam cleaners</a></li>
                                        <li class="link-dark rounded"><a href="/categories/home_furniture/laundry_utility/Window_vacuums">Window vacuums</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/kitchen_bathroom">Kitchen & Bathroom</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-4">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/kitchen_bathroom/kitchen">Kitchen</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-4-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-4-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Bar_stools">Bar stools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Cabinets">Cabinets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Kitchen_bins">Kitchen bins</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Kitchen_doors">Kitchen doors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Kitchen_sinks">Kitchen sinks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Kitchen_storage_+_accessories">Kitchen storage & accessories</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Kitchen_taps">Kitchen taps</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/kitchen/Kitchen_worktops">Kitchen worktops</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/kitchen_bathroom/appliances">Appliances</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-4-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-4-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Cooker_hoods">Cooker hoods</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Cookers">Cookers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Fridge_freezers">Fridge freezers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Hobs">Hobs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Kettles">Kettles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Microwaves">Microwaves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Ovens">Ovens</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Washing_machines">Washing machines</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/appliances/Dishwashers">Dishwashers</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/kitchen_bathroom/bathrooms">Bathrooms</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-4-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-4-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Baths">Baths</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Bath_panels">Bath panels</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Bathroom_suites">Bathroom suites</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Bathroom_wall_panels">Bathroom wall panels</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Taps">Taps</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Toilet_seats">Toilet seats</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Toilets">Toilets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Basins">Basins</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/bathrooms/Accessories">Accessories</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/kitchen_bathroom/showering">Showering</a></a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-4-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-4-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Bath_shower_screens">Bath shower screens</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Curtain_rails_+_rods">Curtain rails & rods</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Riser_rails">Riser rails</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Shower_curtains">Shower curtains</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Shower_heads">Shower heads</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Shower_hoses">Shower hoses</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Shower_kits">Shower kits</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Shower_trays">Shower trays</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Showers">Showers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/kitchen_bathroom/showering/Wet_rooms">Wet rooms</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/lighting_electrical">Lighting & Electrical</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-5">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/lighting_electrical/indoor_lights">Indoor lights</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-5-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-5-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Ceiling_lights">Ceiling lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Floor_lamps">Floor lamps</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Light_bulbs">Light bulbs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Table_lamps">Table lamps</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Chandeliers">Chandeliers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Lamp_shades">Lamp shades</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Wall_lights">Wall lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Spotlights_+_downlights">Spotlights & downlights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Pendant_lights">Pendant lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Light_fixtures & fittings">Light fixtures & fittings</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Children%27%27s_lights">Children's lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/indoor_lights/Cabinet_lights">Cabinet lights</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/lighting_electrical/outdoor_lights">Outdoor lights</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-5-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-5-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Wall_lights">Wall lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Security_lights">Security lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Garden_string_lights">Garden string lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Spike_lights">Spike lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Lanterns">Lanterns</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Post_lights">Post lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Decking_lights">Decking lights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/outdoor_lights/Ground_lights">Ground lights</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/lighting_electrical/electrical">Electrical</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-5-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-5-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Switches_+_sockets">Switches & sockets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Extensions_leads_+_reels">Extensions leads & reels</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Wiring_cables">Wiring cables</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Cable_management">Cable management</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Junction_boxes_+_connectors">Junction boxes & connectors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Consumer_units_+_breakers">Consumer units & breakers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Door_bells">Door bells</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Networking_+_broadband">Networking & broadband</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/TV_aerials">TV aerials</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Electricians_tools_+_supplies">Electricians tools & supplies</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Batteries_+_chargers">Batteries & chargers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/EV_charging">EV charging</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/electrical/Generators">Generators</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/lighting_electrical/safety_security">Safety & security</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-5-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-5-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/CCTV cameras">CCTV cameras</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Burglar_alarms">Burglar alarms</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Smoke_alarms">Smoke alarms</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Carbon_monoxide_alarms">Carbon monoxide alarms</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Door_locks_+_latches">Door locks & latches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Safes">Safes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Key_safes_+_cash_boxes">Key safes & cash boxes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Bike_locks">Bike locks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Fire_extinguishers">Fire extinguishers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Padlocks">Padlocks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/safety_security/Gate_locks">Gate locks</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/lighting_electrical/smart_home">Smart home</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-5-5" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-5-5">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_light_bulbs">Smart light bulbs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_alarms">Smart alarms</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_cameras">Smart cameras</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_heating">Smart heating</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_door_locks">Smart door locks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_door_bells">Smart door bells</a></li>
                                        <li class="link-dark rounded"><a href="/categories/lighting_electrical/smart_home/Smart_plugs">Smart plugs</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/outdoor_garden">Outdoor & Garden</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-6">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/outdoor_garden/garden_tools">Garden tools</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-6-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-6-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Pressure_washers">Pressure washers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Lawnmowers">Lawnmowers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Garden_hand_tools">Garden hand tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Garden_power_tools">Garden power tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Wheelbarrows_+_trolleys">Wheelbarrows & trolleys</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Incinerators">Incinerators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Shovels_+_spades">Shovels & spades</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Composters">Composters</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Garden_waste_bags_+_sacks">Garden waste bags & sacks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Watering_cans">Watering cans</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Gardening_gloves">Gardening gloves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_tools/Garden_kneelers">Garden kneelers</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/outdoor_garden/growing_planting">Growing & planting</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-6-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-6-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Plants,_seeds_+_bulbs">Plants, seeds & bulbs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Pots,_planters_+_askets">Pots, planters & baskets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Compost,_manure_+_soil">Compost, manure & soil</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Fertilisers_+_plant_food">Fertilisers & plant food</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Pest_control">Pest control</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Hoses,_pumps_+_irrigation">Hoses, pumps & irrigation</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Lawn_care">Lawn care</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Weed_killers">Weed killers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Plant_protection_+_support">Plant protection & support</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Propagators">Propagators</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Garden_cloches">Garden cloches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/growing_planting/Plant_trays">Plant trays</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/outdoor_garden/garden_buildings_storage" style="margin-left: 0px;">Garden buildings & storage</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-6-3" aria-expanded="false" style="margin-left:1px">
                                        <i class="fa-solid fa-plus" style="margin-left: -10px;"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-6-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Sheds">Sheds</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Garden_storage_boxes">Garden storage boxes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Summerhouses">Summerhouses</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Greenhouses & growhouses">Greenhouses & growhouses</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Pergolas">Pergolas</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Gazebos">Gazebos</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Arches">Arches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Arbours">Arbours</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Log_cabins_+_garden offices">Log cabins & garden offices</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Shed_bases">Shed bases</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/garden_buildings_storage/Awnings">Awnings</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/outdoor_garden/outdoor_living">Outdoor living</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-6-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-6-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Garden_furniture">Garden furniture</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Hot_tubs_+_saunas">Hot tubs & saunas</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/BBQs_+_BBQ_tools">BBQs & BBQ tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Chimineas_+_fire_pits">Chimineas & fire pits</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Sunloungers">Sunloungers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Home_bars">Home bars</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Parasols_+_bases">Parasols & bases</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Pizza_ovens">Pizza ovens</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Pools_+_accessories">Pools & accessories</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Hammocks">Hammocks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/outdoor_garden/outdoor_living/Garden_furniture_covers">Garden furniture covers</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/painting_decorating">Painting & Decorating</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-7">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/painting_decorating/interior_paint">Interior paint</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-7-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-7-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Emulsion_paint">Emulsion paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Metal_+_wood paint">Metal & wood paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Paint_mixing">Paint mixing</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Furniture_paint">Furniture paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Primers_+_undercoats">Primers & undercoats</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Damp_+_anti-mould_paint">Damp & anti-mould paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Tile_paint">Tile paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Radiator_paint">Radiator paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Spray_paint">Spray paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Floor_paint">Floor paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Chalkboard_paint">Chalkboard paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/interior_paint/Paint_samples">Paint samples</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/painting_decorating/exterior_paint">Exterior paint</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-7-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-7-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/exterior_paint/Metal_+_wood_paint">Metal & wood paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/exterior_paint/Masonry_paint">Masonry paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/exterior_paint/Fence_paint">Fence paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/exterior_paint/Paint_mixing">Paint mixing</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/exterior_paint/Door_paint">Door paint</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/exterior_paint/Decking_paint">Decking paint</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/painting_decorating/woodcare">Woodcare</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-7-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-7-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Wood_stain">Wood stain</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Wood_varnish">Wood varnish</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Wood_preservatives">Wood preservatives</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Wood_oil">Wood oil</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Wood_wax">Wood wax</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Exterior_woodcare">Exterior woodcare</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/woodcare/Interior_woodcare">Interior woodcare</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/painting_decorating/decorating_supplies">Decorating supplies</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-7-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-7-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Paint_rollers">Paint rollers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Paint_brushes">Paint brushes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Paint_trays">Paint trays</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Paint_pads">Paint pads</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Dust_sheets">Dust sheets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Fillers">Fillers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Tapes">Tapes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Sandpaper">Sandpaper</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Glues_+_adhesives">Glues & adhesives</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Sealants">Sealants</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Paint_stripper">Paint stripper</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/decorating_supplies/Expanding_foam">Expanding foam</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/painting_decorating/wallpaper_coverings">Wallpaper & coverings</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-7-5" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-7-5">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/wallpaper_coverings/Wallpaper">Wallpaper</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/wallpaper_coverings/Murals">Murals</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/wallpaper_coverings/Wall_stickers">Wall stickers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/wallpaper_coverings/Sticky_back_plastic_+_window_film">Sticky back plastic & window film</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/wallpaper_coverings/Wallpaper_tools">Wallpaper tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/painting_decorating/wallpaper_coverings/Lining_paper">Lining paper</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1" id="top-list-item">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tiling_flooring">Tiling & Flooring</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-8">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tiling_flooring/flooring">Flooring</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-8-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-8-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Laminate">Laminate</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Luxury_vinyl click">Luxury vinyl click</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Sheet_vinyl">Sheet vinyl</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Adhesive_vinyl_tiles">Adhesive vinyl tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Solid_wood">Solid wood</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Engineered_wood">Engineered wood</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Adhesive_vinyl_planks">Adhesive vinyl planks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Carpet">Carpet</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring/Flooring_samples">Flooring samples</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tiling_flooring/tiles">Tiles</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-8-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-8-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Floor_tiles">Floor tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Wall_tiles">Wall tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Bathroom_tiles">Bathroom tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Kitchen_tiles">Kitchen tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Mosaic_+_border_tiles">Mosaic & border tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Outdoor_tiles">Outdoor tiles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiles/Sample_tiles">Sample tiles</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tiling_flooring/flooring_tools">Flooring tools</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-8-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-8-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring_tools/Underlay">Underlay</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring_tools/Scotias_+_floor_trims">Scotias & floor trims</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring_tools/Thresholds,_t-bars_+_reducers">Thresholds, t-bars & reducers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring_tools/Skirting_+_architrave">Skirting & architrave</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/flooring_tools/Underfloor_heating">Underfloor heating</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tiling_flooring/tiling_tools">Tiling tools</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-8-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-8-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Tile_trims">Tile trims</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Grout">Grout</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Adhesive">Adhesive</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Tiling_trowels">Tiling trowels</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Tile_cutters">Tile cutters</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Tile_spacers">Tile spacers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Tile_scribes">Tile scribes</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Grouting_tools">Grouting tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Tile_kits">Tile kits</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tiling_flooring/tiling_tools/Sealant">Sealant</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mb-1">
                    <div class="level-1-link">
                        <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tools_equipment">Tools & Equipment</a>
                        <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="collapse" id="collapse-9">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tools_equipment/power_tools">Power tools</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-9-1" aria-expanded="false">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-9-1">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Drills">Drills</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Saws">Saws</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Sanders">Sanders</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Multi_tools_+_hobby_tools">Multi tools & hobby tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Angle_grinders">Angle grinders</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Kits_+_twinpacks">Kits & twinpacks</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Impact_drivers_+_wrenches">Impact drivers & wrenches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Screwdrivers">Screwdrivers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Nail_guns">Nail guns</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Routers">Routers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Planers">Planers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tools/Workshop_machinery">Workshop machinery</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tools_equipment/power_tool_accessories">Power tool accessories</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-9-2" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-9-2">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Sawing_+_blades">Sawing & blades</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Drill_bits">Drill bits</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Sanding">Sanding</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Mixed_drill_bit_sets">Mixed drill bit sets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Multi_tool_accessories">Multi tool accessories</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Holesaws">Holesaws</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Angle_grinder_discs">Angle grinder discs</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Screwdriver_bits">Screwdriver bits</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Batteries_+_chargers">Batteries & chargers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Routing">Routing</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Chucks,_keys_+_holders">Chucks, keys & holders</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/power_tool_accessories/Cleaning_+_preparation">Cleaning & preparation</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tools_equipment/hand_tools">Hand tools</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-9-3" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-9-3">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Hand_saws">Hand saws</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Measures_+_levels">Measures & levels</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Spanners_+_wrenches">Spanners & wrenches</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Screwdrivers_+_keys">Screwdrivers & keys</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Tool_kits">Tool kits</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Demolition">Demolition</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Cutting_tools">Cutting tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Plastering_tools">Plastering tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Woodworking_tools">Woodworking tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Pliers">Pliers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Bricklaying_tools">Bricklaying tools</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/hand_tools/Cable_tools">Cable tools</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tools_equipment/safety_workwear">Safety & workwear</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-9-4" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-9-4">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Workwear">Workwear</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Work_trousers">Work trousers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Overalls_+_coveralls">Overalls & coveralls</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Work_jackets">Work jackets</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Hoodies_+_sweatshirts">Hoodies & sweatshirts</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Work_shorts">Work shorts</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Footwear">Footwear</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Safety_boots">Safety boots</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Safety_trainers">Safety trainers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Gloves">Gloves</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Dust_masks_+_filters">Dust masks & filters</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/safety_workwear/Goggles_+_glasses">Goggles & glasses</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <div class="level-2-link">
                                    <a class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn" role="button" href="/categories/tools_equipment/equipment">Equipment</a>
                                    <button class="btn btn-toggle align-items-center rounded collapsed" id="dropdown-btn2" data-bs-toggle="collapse" data-bs-target="#sub-collapse-9-5" aria-expanded="false" style="margin-left:4px">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div class="collapse" id="sub-collapse-9-5">
                                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Tool_storage">Tool storage</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Ladders_+_steps">Ladders & steps</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Workbenches_+_trestles">Workbenches & trestles</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Trolleys_+_carts">Trolleys & carts</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Cement_mixers">Cement mixers</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Vacuum_cleaners">Vacuum cleaners</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Car_care_+_maintenance">Car care & maintenance</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Workshop_machinery">Workshop machinery</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Air_compressors">Air compressors</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Torches_+_worklights">Torches & worklights</a></li>
                                        <li class="link-dark rounded"><a href="/categories/tools_equipment/equipment/Tarpaulins,_sheets_+_sacks">Tarpaulins, sheets & sacks</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="border-top my-3" id="side-border"></li>
                <li class="mb-1">
                    <div class="flex-wrap">
                        <a class="btn btn-light" id="bottom-btn" href="/about">About</a>
                        <a class="btn btn-light" id="bottom-btn" href="/faq">FAQ</a>
                        <a class="btn btn-light" id="bottom-btn" href="/contact">Contact</a>
                    </div>

                </li>
            </ul>
        </div>
    </div>
    </nav>



    `
}

createSideNav();




window.onload = function () {

    let buttons = document.querySelectorAll('.btn-toggle');
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            let icon = button.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });


    let sections = document.querySelectorAll('section');
    let sideBtns = document.querySelectorAll('#side-btn');
    let overlay = document.querySelector('.overlay');

    for (let i = 0; i < sideBtns.length; i++) {
        sideBtns[i].addEventListener('click', function () {
            if (this.getAttribute('aria-expanded') === 'true') {
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
            }
        });
    }

    document.addEventListener("click", function (event) {
        var nav = document.getElementById("collapse-nav");
        var button = document.getElementById("side-btn");
        if (event.target !== nav && event.target !== button && nav.classList.contains("show")) {
            if (!nav.contains(event.target)) {
                button.click();
            }
        }
    });

};





