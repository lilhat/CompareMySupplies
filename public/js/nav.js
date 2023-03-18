const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav-top"> 
            <ul class="nav-top-links">
                <li class="nav-top-item"><a href="/products.php">Our Story</a>| </li>
                <li class="nav-top-item"><a href="/about">FAQ</a>| </li>
                <li class="nav-top-item"><a href="/contact.php">Contact Us</a></li>
            </ul>
        </div>
        <div class="nav-border">
        </div>
        <div class="nav-wrapper">
            <div class="main-logo">
                <a href="/home">
                    <img src="/images/main-logo2.png" class="brand-logo" alt="">
                </a>
            </div>
            <form action="/search/" method="get">
                <div class="search-box">
                    <input type="text" class="tbox" name="query" placeholder="Search..." />
                    <button class="btn" type="submit "><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
            <div class="top-menu">
            <ul class="top-links-container">
                <li class="top-link-item"><a href="/products.php">All Categories</a></li>
            </ul>
            </div>
            <div class="sign-in">
                <a>
                    <img src="/images/user.png" id="user-pic" class="user-pic">
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
                    <a href="/main_categories/building_hardware">Building & <br> Hardware</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/building_hardware/building_supplies">Building Supplies</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Aggregates_+_sand">Aggregates & Sand</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Bricks_+_blocks">Bricks & Blocks</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Chemicals,_concrete_+_cement">Concrete & Cement</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Additives_+_chemicals">Additives & Chemicals</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Guttering_+_drainage">Guttering & Drainage</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Insulation_+_damp">Insulation & Damp</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Plasterboard">Plasterboard</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Plastering_supplies">Plastering supplies</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Coving">Coving</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Roofing_supplies">Roofing supplies</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Builder%27%27s_metalwork">Builder's metalwork</a></li>
                            <li><a href="/categories/building_hardware/building_supplies/Sealants">Sealants</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/building_hardware/timber_sheet">Timber & Sheet Materials</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Architrave">Architrave</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Trims">Trims</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Constructional_timber">Constructional timber</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Decorate_mouldings">Decorate mouldings</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Furniture_boards">Furniture boards</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Scaffold_boards">Scaffold boards</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Sheet_materials">Sheet materials</a></li>
                            <li><a href="/categories/building_hardware/timber_sheet/Stairs_+_stair_parts">Stairs & stair parts</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/building_hardware/hardware">Hardware</a></li>
                            <li><a href="/categories/building_hardware/hardware/Screws">Screws</a></li>
                            <li><a href="/categories/building_hardware/hardware/Handles_+_knobs">Handles & knobs</a></li>
                            <li><a href="/categories/building_hardware/hardware/Hinges">Hinges</a></li>
                            <li><a href="/categories/building_hardware/hardware/Bolts,_nuts_+_washers">Bolts, nuts & washers</a></li>
                            <li><a href="/categories/building_hardware/hardware/Locks_+_padlocks">Locks & padlocks</a></li>
                            <li><a href="/categories/building_hardware/hardware/Brackets">Brackets</a></li>
                            <li><a href="/categories/building_hardware/hardware/Hooks">Hooks</a></li>
                            <li><a href="/categories/building_hardware/hardware/Furniture_hardware">Furniture hardware</a></li>
                            <li><a href="/categories/building_hardware/hardware/Fixings_+_wall_plugs">Fixings & wall plugs</a></li>
                            <li><a href="/categories/building_hardware/hardware/Nails">Nails</a></li>
                            <li><a href="/categories/building_hardware/hardware/Ropes,_bungees_+_chains">Ropes, bungees & chains</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/building_hardware/doors_windows">Doors & windows</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Internal_doors">Internal doors</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/External_doors">External doors</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Garage_doors">Garage doors</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Windows">Windows</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Doors_locks_+_latches">Door locks & latches</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Door_frames_+_fixtures">Door frames & fixtures</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Porches">Porches</a></li>
                            <li><a href="/categories/building_hardware/doors_windows/Loft_doors_+_hatches">Loft doors & hatches</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/heating_plumbing">Heating & <br> Plumbing</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/heating_plumbing/radiators">Radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Double_panel_radiators">Double panel radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Double_panel_radiators">Double panel radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Towel_radiators">Towel radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Column_radiators">Column radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Designer_radiators">Designer radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Oil_filled_radiators">Oil filled radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Vertical_radiators">Vertical radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Radiator_valves">Radiator valves</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Radiator_covers">Radiator covers</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Cast_iron_radiators">Cast iron radiators</a></li>
                            <li><a href="/categories/heating_plumbing/radiators/Heating_elements">Heating elements</a></li>
                            
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/heating_plumbing/fires_stoves_heaters">Fires, stoves & heaters</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Electric_Fires">Electric fires</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Stoves">Stoves</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_suites">Fireplace suites</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Heaters">Heaters</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Gas_Fires">Gas fires</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Fire_surrounds">Fire surrounds</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_accessories">Fireplace accessories</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Logs_charcoal">Logs &amp; charcoal</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Fireplace_hearths">Fireplace hearths</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/All_fires">All fires</a></li>
                            <li><a href="/categories/heating_plumbing/fires_stoves_heaters/Chimney_sweeping">Chimney sweeping</a></li>                            
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/heating_plumbing/plumbing">Plumbing</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Pipe_fittings">Pipe fittings</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Wastes_traps">Wastes &amp; traps</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Pipes">Pipes</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Bathroom_fittings">Bathroom fittings</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Valves">Valves</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Connectors">Connectors</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Plumbing_tools">Plumbing tools</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Elbows">Elbows</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Pipe_insulation">Pipe insulation</a></li>
                            <li><a href="/categories/heating_plumbing/plumbing/Stopcocks">Stopcocks</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/heating_plumbing/central_heating">Central heating</a></li>
                            <li><a href="/categories/heating_plumbing/central_heating/Thermostats">Thermostats</a></li>
                            <li><a href="/categories/heating_plumbing/central_heating/Underfloor_heating">Underfloor heating</a></li>
                            <li><a href="/categories/heating_plumbing/central_heating/Water_heaters">Water heaters</a></li>
                            <li><a href="/categories/heating_plumbing/central_heating/Heating_treatments">Heating treatments</a></li>
                            <li><a href="/categories/heating_plumbing/central_heating/Boilers">Boilers</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/heating_plumbing/air_treatment">Air treatment</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Dehumidifiers">Dehumidifiers</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Extractor_fans">Extractor fans</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Ducting">Ducting</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Vents">Vents</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Air_purifiers">Air purifiers</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Air_conditioners">Air conditioners</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Ceiling_fans">Ceiling fans</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Fans">Fans</a></li>
                            <li><a href="/categories/heating_plumbing/air_treatment/Humidifiers">Humidifiers</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/home_furniture"><span class="first-line">Home & </span><br> Furniture</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/home_furniture/furniture">Furniture</a></li>
                            <li><a href="/categories/home_furniture/furniture/Bedroom_furniture">Bedroom furniture</a></li>
                            <li><a href="/categories/home_furniture/furniture/Wardrobes">Wardrobes</a></li>
                            <li><a href="/categories/home_furniture/furniture/Sliding_wardrobe_doors">Sliding wardrobe doors</a></li>
                            <li><a href="/categories/home_furniture/furniture/Beds">Beds</a></li>
                            <li><a href="/categories/home_furniture/furniture/Chairs">Chairs</a></li>
                            <li><a href="/categories/home_furniture/furniture/Bedside_tables">Bedside tables</a></li>
                            <li><a href="/categories/home_furniture/furniture/Chest_of_drawers">Chest of drawers</a></li>
                            <li><a href="/categories/home_furniture/furniture/Mattresses">Mattresses</a></li>
                            <li><a href="/categories/home_furniture/furniture/Desks">Desks</a></li>
                            <li><a href="/categories/home_furniture/furniture/Tables">Tables</a></li>
                            <li><a href="/categories/home_furniture/furniture/Sideboards">Sideboards</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/home_furniture/home_furnishings">Home furnishings</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Home_decor_trends">Home decor trends</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Blinds">Blinds</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Curtains">Curtains</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Curtain_poles">Curtain poles</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Curtain_tracks">Curtain tracks</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Curtain_accessories">Curtain accessories</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Cushions">Cushions</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Rugs">Rugs</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Door_mats">Door mats</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Bedding">Bedding</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Throws_+_blankets">Throws & blankets</a></li>
                            <li><a href="/categories/home_furniture/home_furnishings/Bean_bags">Bean bags</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/home_furniture/home_accessories">Home accessories</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Cooking_+_dining">Cooking & dining</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Mirrors">Mirrors</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Wall_art">Wall art</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Picture_frames">Picture frames</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Ornaments">Ornaments</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Artificial_flowers">Artificial flowers</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Bottles,_vases_+_jars">Bottles, vases & jars</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Clocks">Clocks</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Candles">Candles</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Candle_holders">Candle holders</a></li>
                            <li><a href="/categories/home_furniture/home_accessories/Children%27%27s_decor">Children's decor</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/home_furniture/storage_shelving">Storage & shelving</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Shelves">Shelves</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Shelf_brackets">Shelf brackets</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Shelving_systems">Shelving systems</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Shelving_units">Shelving units</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Storage_baskets">Storage baskets</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Storage_trunks">Storage trunks</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Storage_boxes">Storage boxes</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Storage_cubes">Storage cubes</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Storage_cabinets">Storage cabinets</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Storage_drawers">Storage drawers</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Packaging">Packaging</a></li>
                            <li><a href="/categories/home_furniture/storage_shelving/Garage_storage">Garage storage</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/home_furniture/laundry_utility">Laundry & utility</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Laundry_baskets">Laundry baskets</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Irons">Irons</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Ironing_boards">Ironing boards</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Clothes_airers">Clothes airers</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Washing_lines">Washing lines</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Household_cleaning">Household cleaning</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Bins">Bins</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Carpet_shampoo">Carpet shampoo</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Vacuum_cleaners">Vacuum cleaners</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Steam_cleaners">Steam cleaners</a></li>
                            <li><a href="/categories/home_furniture/laundry_utility/Window_vacuums">Window vacuums</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/kitchen_bathroom"><span class="first-line-2">Kitchen & </span><br> Bathroom</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/kitchen_bathroom/kitchen">Kitchen</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Bar_stools">Bar stools</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Cabinets">Cabinets</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Kitchen_bins">Kitchen bins</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Kitchen_doors">Kitchen doors</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Kitchen_sinks">Kitchen sinks</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Kitchen_storage_+_accessories">Kitchen storage & accessories</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Kitchen_taps">Kitchen taps</a></li>
                            <li><a href="/categories/kitchen_bathroom/kitchen/Kitchen_worktops">Kitchen worktops</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/kitchen_bathroom/appliances">Appliances</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Cooker_hoods">Cooker hoods</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Cookers">Cookers</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Fridge_freezers">Fridge freezers</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Hobs">Hobs</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Kettles">Kettles</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Microwaves">Microwaves</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Ovens">Ovens</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Washing_machines">Washing machines</a></li>
                            <li><a href="/categories/kitchen_bathroom/appliances/Dishwashers">Dishwashers</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/kitchen_bathroom/bathrooms">Bathrooms</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Baths">Baths</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Bath_panels">Bath panels</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Bathroom_suites">Bathroom suites</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Bathroom_wall_panels">Bathroom wall panels</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Taps">Taps</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Toilet_seats">Toilet seats</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Toilets">Toilets</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Basins">Basins</a></li>
                            <li><a href="/categories/kitchen_bathroom/bathrooms/Accessories">Accessories</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/kitchen_bathroom/showering">Showering</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Bath_shower_screens">Bath shower screens</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Curtain_rails_+_rods">Curtain rails & rods</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Riser_rails">Riser rails</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Shower_curtains">Shower curtains</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Shower_heads">Shower heads</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Shower_hoses">Shower hoses</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Shower_kits">Shower kits</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Shower_trays">Shower trays</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Showers">Showers</a></li>
                            <li><a href="/categories/kitchen_bathroom/showering/Wet_rooms">Wet rooms</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/lighting_electrical">Lighting & <br><span class="first-line-3"> Electrical </span></a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/lighting_electrical/indoor_lights">Indoor lights</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Ceiling_lights">Ceiling lights</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Floor_lamps">Floor lamps</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Light_bulbs">Light bulbs</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Table_lamps">Table lamps</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Chandeliers">Chandeliers</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Lamp_shades">Lamp shades</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Wall_lights">Wall lights</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Spotlights_+_downlights">Spotlights & downlights</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Pendant_lights">Pendant lights</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Light_fixtures & fittings">Light fixtures & fittings</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Children%27%27s_lights">Children's lights</a></li>
                            <li><a href="/categories/lighting_electrical/indoor_lights/Cabinet_lights">Cabinet lights</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/lighting_electrical/outdoor_lights">Outdoor lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Wall_lights">Wall lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Security_lights">Security lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Garden_string_lights">Garden string lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Spike_lights">Spike lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Lanterns">Lanterns</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Post_lights">Post lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Decking_lights">Decking lights</a></li>
                            <li><a href="/categories/lighting_electrical/outdoor_lights/Ground_lights">Ground lights</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/lighting_electrical/electrical">Electrical</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Switches_+_sockets">Switches & sockets</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Extensions_leads_+_reels">Extensions leads & reels</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Wiring_cables">Wiring cables</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Cable_management">Cable management</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Junction_boxes_+_connectors">Junction boxes & connectors</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Consumer_units_+_breakers">Consumer units & breakers</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Door_bells">Door bells</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Networking_+_broadband">Networking & broadband</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/TV_aerials">TV aerials</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Electricians_tools_+_supplies">Electricians tools & supplies</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Batteries_+_chargers">Batteries & chargers</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/EV_charging">EV charging</a></li>
                            <li><a href="/categories/lighting_electrical/electrical/Generators">Generators</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/lighting_electrical/safety_security">Safety & security</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/CCTV cameras">CCTV cameras</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Burglar_alarms">Burglar alarms</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Smoke_alarms">Smoke alarms</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Carbon_monoxide_alarms">Carbon monoxide alarms</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Door_locks_+_latches">Door locks & latches</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Safes">Safes</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Key_safes_+_cash_boxes">Key safes & cash boxes</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Bike_locks">Bike locks</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Fire_extinguishers">Fire extinguishers</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Padlocks">Padlocks</a></li>
                            <li><a href="/categories/lighting_electrical/safety_security/Gate_locks">Gate locks</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/lighting_electrical/smart_home">Smart home</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_light_bulbs">Smart light bulbs</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_alarms">Smart alarms</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_cameras">Smart cameras</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_heating">Smart heating</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_door_locks">Smart door locks</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_door_bells">Smart door bells</a></li>
                            <li><a href="/categories/lighting_electrical/smart_home/Smart_plugs">Smart plugs</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/outdoor_garden">Outdoor & <br><span class="first-line-4"> Garden </span></a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/outdoor_garden/garden_tools">Garden tools</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Pressure_washers">Pressure washers</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Lawnmowers">Lawnmowers</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Garden_hand_tools">Garden hand tools</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Garden_power_tools">Garden power tools</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Wheelbarrows_+_trolleys">Wheelbarrows & trolleys</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Incinerators">Incinerators</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Shovels_+_spades">Shovels & spades</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Composters">Composters</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Garden_waste_bags_+_sacks">Garden waste bags & sacks</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Watering_cans">Watering cans</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Gardening_gloves">Gardening gloves</a></li>
                            <li><a href="/categories/outdoor_garden/garden_tools/Garden_kneelers">Garden kneelers</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/outdoor_garden/growing_planting">Growing & planting</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Plants,_seeds_+_bulbs">Plants, seeds & bulbs</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Pots,_planters_+_askets">Pots, planters & baskets</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Compost,_manure_+_soil">Compost, manure & soil</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Fertilisers_+_plant_food">Fertilisers & plant food</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Pest_control">Pest control</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Hoses,_pumps_+_irrigation">Hoses, pumps & irrigation</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Lawn_care">Lawn care</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Weed_killers">Weed killers</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Plant_protection_+_support">Plant protection & support</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Propagators">Propagators</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Garden_cloches">Garden cloches</a></li>
                            <li><a href="/categories/outdoor_garden/growing_planting/Plant_trays">Plant trays</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/outdoor_garden/landscaping">Landscaping</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Fencing">Fencing</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Paving_+_walling">Paving & walling</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Trellis_+_screening">Trellis & screening</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Stone,_gravel_+_chippings">Stone, gravel & chippings</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Decking">Decking</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Garden_gates">Garden gates</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Artificial_grass">Artificial grass</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Lawn_turf">Lawn turf</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Timber_sleepers">Timber sleepers</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Lawn_edging">Lawn edging</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Garden_railings">Garden railings</a></li>
                            <li><a href="/categories/outdoor_garden/landscaping/Ponds_+_water_features">Ponds & water features</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/outdoor_garden/garden_buildings_storage">Garden buildings & storage</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Sheds">Sheds</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Garden_storage_boxes">Garden storage boxes</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Summerhouses">Summerhouses</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Greenhouses & growhouses">Greenhouses & growhouses</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Pergolas">Pergolas</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Gazebos">Gazebos</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Arches">Arches</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Arbours">Arbours</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Log_cabins_+_garden offices">Log cabins & garden offices</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Shed_bases">Shed bases</a></li>
                            <li><a href="/categories/outdoor_garden/garden_buildings_storage/Awnings">Awnings</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/outdoor_garden/outdoor_living">Outdoor living</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Garden_furniture">Garden furniture</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Hot_tubs_+_saunas">Hot tubs & saunas</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/BBQs_+_BBQ_tools">BBQs & BBQ tools</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Chimineas_+_fire_pits">Chimineas & fire pits</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Sunloungers">Sunloungers</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Home_bars">Home bars</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Parasols_+_bases">Parasols & bases</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Pizza_ovens">Pizza ovens</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Pools_+_accessories">Pools & accessories</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Hammocks">Hammocks</a></li>
                            <li><a href="/categories/outdoor_garden/outdoor_living/Garden_furniture_covers">Garden furniture covers</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/painting_decorating"><span class="first-line-3">Painting & </span><br> Decorating</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/painting_decorating/interior_paint">Interior paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Emulsion_paint">Emulsion paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Metal_+_wood paint">Metal & wood paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Paint_mixing">Paint mixing</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Furniture_paint">Furniture paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Primers_+_undercoats">Primers & undercoats</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Damp_+_anti-mould_paint">Damp & anti-mould paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Tile_paint">Tile paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Radiator_paint">Radiator paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Spray_paint">Spray paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Floor_paint">Floor paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Chalkboard_paint">Chalkboard paint</a></li>
                            <li><a href="/categories/painting_decorating/interior_paint/Paint_samples">Paint samples</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/painting_decorating/exterior_paint">Exterior paint</a></li>
                            <li><a href="/categories/painting_decorating/exterior_paint/Metal_+_wood_paint">Metal & wood paint</a></li>
                            <li><a href="/categories/painting_decorating/exterior_paint/Masonry_paint">Masonry paint</a></li>
                            <li><a href="/categories/painting_decorating/exterior_paint/Fence_paint">Fence paint</a></li>
                            <li><a href="/categories/painting_decorating/exterior_paint/Paint_mixing">Paint mixing</a></li>
                            <li><a href="/categories/painting_decorating/exterior_paint/Door_paint">Door paint</a></li>
                            <li><a href="/categories/painting_decorating/exterior_paint/Decking_paint">Decking paint</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/painting_decorating/woodcare">Woodcare</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Wood_stain">Wood stain</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Wood_varnish">Wood varnish</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Wood_preservatives">Wood preservatives</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Wood_oil">Wood oil</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Wood_wax">Wood wax</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Exterior_woodcare">Exterior woodcare</a></li>
                            <li><a href="/categories/painting_decorating/woodcare/Interior_woodcare">Interior woodcare</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/painting_decorating/decorating_supplies">Decorating supplies</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Paint_rollers">Paint rollers</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Paint_brushes">Paint brushes</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Paint_trays">Paint trays</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Paint_pads">Paint pads</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Dust_sheets">Dust sheets</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Fillers">Fillers</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Tapes">Tapes</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Sandpaper">Sandpaper</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Glues_+_adhesives">Glues & adhesives</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Sealants">Sealants</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Paint_stripper">Paint stripper</a></li>
                            <li><a href="/categories/painting_decorating/decorating_supplies/Expanding_foam">Expanding foam</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/painting_decorating/wallpaper_coverings">Wallpaper & coverings</a></li>
                            <li><a href="/categories/painting_decorating/wallpaper_coverings/Wallpaper">Wallpaper</a></li>
                            <li><a href="/categories/painting_decorating/wallpaper_coverings/Murals">Murals</a></li>
                            <li><a href="/categories/painting_decorating/wallpaper_coverings/Wall_stickers">Wall stickers</a></li>
                            <li><a href="/categories/painting_decorating/wallpaper_coverings/Sticky_back_plastic_+_window_film">Sticky back plastic & window film</a></li>
                            <li><a href="/categories/painting_decorating/wallpaper_coverings/Wallpaper_tools">Wallpaper tools</a></li>
                            <li><a href="/categories/painting_decorating/wallpaper_coverings/Lining_paper">Lining paper</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/tiling_flooring"><span class="first-line-3">Tiling & </span><br> Flooring</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tiling_flooring/flooring">Flooring</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Laminate">Laminate</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Luxury_vinyl click">Luxury vinyl click</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Sheet_vinyl">Sheet vinyl</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Adhesive_vinyl_tiles">Adhesive vinyl tiles</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Solid_wood">Solid wood</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Engineered_wood">Engineered wood</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Adhesive_vinyl_planks">Adhesive vinyl planks</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Carpet">Carpet</a></li>
                            <li><a href="/categories/tiling_flooring/flooring/Flooring_samples">Flooring samples</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tiling_flooring/tiles">Tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Floor_tiles">Floor tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Wall_tiles">Wall tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Bathroom_tiles">Bathroom tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Kitchen_tiles">Kitchen tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Mosaic_+_border_tiles">Mosaic & border tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Outdoor_tiles">Outdoor tiles</a></li>
                            <li><a href="/categories/tiling_flooring/tiles/Sample_tiles">Sample tiles</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tiling_flooring/flooring_tools">Flooring tools</a></li>
                            <li><a href="/categories/tiling_flooring/flooring_tools/Underlay">Underlay</a></li>
                            <li><a href="/categories/tiling_flooring/flooring_tools/Scotias_+_floor_trims">Scotias & floor trims</a></li>
                            <li><a href="/categories/tiling_flooring/flooring_tools/Thresholds,_t-bars_+_reducers">Thresholds, t-bars & reducers</a></li>
                            <li><a href="/categories/tiling_flooring/flooring_tools/Skirting_+_architrave">Skirting & architrave</a></li>
                            <li><a href="/categories/tiling_flooring/flooring_tools/Underfloor_heating">Underfloor heating</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tiling_flooring/tiling_tools">Tiling tools</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Tile_trims">Tile trims</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Grout">Grout</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Adhesive">Adhesive</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Tiling_trowels">Tiling trowels</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Tile_cutters">Tile cutters</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Tile_spacers">Tile spacers</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Tile_scribes">Tile scribes</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Grouting_tools">Grouting tools</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Tile_kits">Tile kits</a></li>
                            <li><a href="/categories/tiling_flooring/tiling_tools/Sealant">Sealant</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="link-item">
                    <a href="/main_categories/tools_equipment"><span class="first-line-5">Tools & </span><br> Equipment</a>
                    <ul class="dropdown-content">
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tools_equipment/power_tools">Power tools</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Drills">Drills</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Saws">Saws</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Sanders">Sanders</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Multi_tools_+_hobby_tools">Multi tools & hobby tools</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Angle_grinders">Angle grinders</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Kits_+_twinpacks">Kits & twinpacks</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Impact_drivers_+_wrenches">Impact drivers & wrenches</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Screwdrivers">Screwdrivers</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Nail_guns">Nail guns</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Routers">Routers</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Planers">Planers</a></li>
                            <li><a href="/categories/tools_equipment/power_tools/Workshop_machinery">Workshop machinery</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tools_equipment/power_tool_accessories">Power tool accessories</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Sawing_+_blades">Sawing & blades</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Drill_bits">Drill bits</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Sanding">Sanding</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Mixed_drill_bit_sets">Mixed drill bit sets</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Multi_tool_accessories">Multi tool accessories</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Holesaws">Holesaws</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Angle_grinder_discs">Angle grinder discs</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Screwdriver_bits">Screwdriver bits</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Batteries_+_chargers">Batteries & chargers</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Routing">Routing</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Chucks,_keys_+_holders">Chucks, keys & holders</a></li>
                            <li><a href="/categories/tools_equipment/power_tool_accessories/Cleaning_+_preparation">Cleaning & preparation</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tools_equipment/hand_tools">Hand tools</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Hand_saws">Hand saws</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Measures_+_levels">Measures & levels</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Spanners_+_wrenches">Spanners & wrenches</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Screwdrivers_+_keys">Screwdrivers & keys</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Tool_kits">Tool kits</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Demolition">Demolition</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Cutting_tools">Cutting tools</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Plastering_tools">Plastering tools</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Woodworking_tools">Woodworking tools</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Pliers">Pliers</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Bricklaying_tools">Bricklaying tools</a></li>
                            <li><a href="/categories/tools_equipment/hand_tools/Cable_tools">Cable tools</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tools_equipment/safety_workwear">Safety & workwear</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Workwear">Workwear</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Work_trousers">Work trousers</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Overalls_+_coveralls">Overalls & coveralls</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Work_jackets">Work jackets</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Hoodies_+_sweatshirts">Hoodies & sweatshirts</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Work_shorts">Work shorts</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Footwear">Footwear</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Safety_boots">Safety boots</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Safety_trainers">Safety trainers</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Gloves">Gloves</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Dust_masks_+_filters">Dust masks & filters</a></li>
                            <li><a href="/categories/tools_equipment/safety_workwear/Goggles_+_glasses">Goggles & glasses</a></li>
                        </ul>
                        <ul class="content">
                            <li class="dropdown-header"><a href="/categories/tools_equipment/equipment">Equipment</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Tool_storage">Tool storage</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Ladders_+_steps">Ladders & steps</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Workbenches_+_trestles">Workbenches & trestles</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Trolleys_+_carts">Trolleys & carts</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Cement_mixers">Cement mixers</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Vacuum_cleaners">Vacuum cleaners</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Car_care_+_maintenance">Car care & maintenance</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Workshop_machinery">Workshop machinery</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Air_compressors">Air compressors</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Torches_+_worklights">Torches & worklights</a></li>
                            <li><a href="/categories/tools_equipment/equipment/Tarpaulins,_sheets_+_sacks">Tarpaulins, sheets & sacks</a></li>
                        </ul>
                    </ul>
                </li>
            </ul>
            <div class="burger" onclick="toggleMobileMenu(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="menu-container">
                    <ul class="mobile-menu">
                        <a href="categories.php?product=plaster">Building & Hardware</a>
                        <a href="categories.php?product=concrete">Heating & Plumbing</a>
                        <a href="categories.php?product=concrete"><span class="first-line">Home & </span> Furniture</a>
                        <a href="categories.php?product=timber"><span class="first-line-2">Kitchen & </span> Bathroom</a>
                        <a href="categories.php?product=adhesives">Lighting & <span class="first-line-3"> Electrical </span></a>
                        <a href="categories.php?product=electrical">Outdoor & <span class="first-line-4"> Garden </span></a>
                        <a href="categories.php?product=electrical"><span class="first-line-3">Painting & </span> Decorating</a>
                        <a href="categories.php?product=electrical"><span class="first-line-3">Tiling & </span> Flooring</a>
                        <a href="categories.php?product=electrical"><span class="first-line-5">Tools & </span> Equipment</a>
                    </ul>
                </div>

            </div>
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

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}