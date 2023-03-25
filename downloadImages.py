import csv

# Define the categories to keep
def sort_data(target_categories, filename):

    # define target categories as a list of lowercase strings


    # open the input file and create a new output file
    with open('database\\products.csv', 'r', newline='', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        rows_to_keep = []
        for row in reader:
            for category in target_categories:
                if category.lower() in row['category'].lower():
                    rows_to_keep.append(row)
                    break

    # Now you can do something with the filtered rows, e.g. write to another CSV file
    with open(f'database\\{filename}.csv', 'w', newline='', encoding='utf-8-sig') as file:
        writer = csv.DictWriter(file, fieldnames=reader.fieldnames)
        writer.writeheader()
        for row in rows_to_keep:
            writer.writerow(row)


building_supplies = ['Aggregates & sand','Bricks & blocks','Chemicals, concrete & cement','Additives & chemicals','Guttering & drainage','Insulation & damp proofing','Plasterboard','Plastering supplies','Cornices & coving','Roofing supplies',"Builder's metalwork",'Sealants']
timber_sheet = ['Architrave','Constructional Timber','Decorate Mouldings','Furniture Boards','Scaffold Board','Sheet Materials','Stairs & Stair Parts']
hardware = ['Screws','Handles & knobs','Hinges', 'Bolts, nuts & washers','Locks & padlocks','Brackets','Hooks','Furniture hardware','Fixings & wall plugs','Nails','Ropes, bungees & chains']
doors_windows = ['Internal doors', 'External doors', 'Garage doors', 'Windows', 'Door locks & latches', 'Door frames & fixtures', 'Porches', 'Loft doors & hatches']
radiators = ['Double panel radiators', 'Towel radiators', 'Column radiators', 'Designer radiators', 'Oil filled radiators', 'Vertical radiators', 'Radiator valves', 'Radiator covers', 'Cast iron radiators', 'Heating elements']
fires_stoves_heaters = ['Electric fires', 'Stoves', 'Fireplace suites', 'Heaters', 'Gas fires', 'Fire surrounds', 'Fireplace accessories', 'Logs & charcoal', 'Fireplace hearths', 'All fires', 'Chimney sweeping']
plumbing = ['Pipe fittings', 'Wastes & traps', 'Pipes', 'Bathroom fittings', 'Valves', 'Connectors', 'Plumbing tools', 'Elbows', 'Pipe insulation', 'Stopcocks']
heating = ['Thermostats', 'Underfloor heating', 'Water heaters', 'Heating treatments', 'Boilers']
air_treatment = ['Dehumidifiers', 'Extractor fans', 'Ducting', 'Vents', 'Air purifiers', 'Air conditioners', 'Ceiling fans', 'Fans', 'Humidifiers']
furniture = ['Bedroom furniture', 'Wardrobes', 'Sliding wardrobe doors', 'Beds', 'Chairs', 'Bedside tables', 'Chest of drawers', 'Mattresses', 'Desks', 'Tables', 'Sideboards']
home_furnishings = ['Home decor trends', 'Blinds', 'Curtains', 'Curtain poles', 'Curtain tracks', 'Curtain accessories', 'Cushions', 'Rugs', 'Door mats', 'Bedding', 'Throws & blankets', 'Bean bags']
home_accessories = ['Cooking & dining', 'Mirrors', 'Wall art', 'Picture frames', 'Ornaments', 'Artificial flowers', 'Bottles, vases & jars', 'Clocks', 'Candles', 'Candle holders', "Children's decor"]
storage_shelving = ['Shelves', 'Shelf brackets', 'Shelving systems', 'Shelving units', 'Storage baskets', 'Storage trunks', 'Storage boxes', 'Storage cubes', 'Storage cabinets', 'Storage drawers', 'Packaging', 'Garage storage']
laundry_utility = ['Laundry baskets', 'Irons', 'Ironing boards', 'Clothes airers', 'Washing lines', 'Household cleaning', 'Bins', 'Carpet shampoo', 'Vacuum cleaners', 'Steam cleaners', 'Window vacuums']
kitchen = ['Bar stools', 'Cabinets', 'Kitchen bins', 'Kitchen doors', 'Kitchen sinks', 'Kitchen storage & accessories', 'Kitchen taps', 'Kitchen worktops']
appliances = ['Cooker hoods', 'Cookers', 'Fridge freezers', 'Hobs', 'Kettles', 'Microwaves', 'Ovens', 'Washing machines']
bathrooms = ['Baths', 'Bath panels', 'Bathroom suites', 'Bathroom wall panels', 'Taps', 'Toilet seats', 'Toilets', 'Basins', 'Accessories']
showering = ['Bath shower screens', 'Curtain rails & rods', 'Riser rails', 'Shower curtains', 'Shower heads', 'Shower hoses', 'Shower kits', 'Shower trays', 'Showers', 'Wet rooms']
indoor_lights = ['Ceiling lights', 'Floor lamps', 'Light bulbs', 'Table lamps', 'Chandeliers', 'Lamp shades', 'Wall lights', 'Spotlights & downlights', 'Pendant lights', 'Light fixtures & fittings', "Children's lights", 'Cabinet lights']
outdoor_lights = ['Wall lights', 'Security lights', 'Garden string lights', 'Spike lights', 'Lanterns', 'Post lights', 'Decking lights']
electrical = ['Switches & sockets', 'Extensions leads & reels', 'Wiring cables', 'Cable management', 'Junction boxes & connectors', 'Consumer units & breakers', 'Door bells', 'Networking & broadband', 'TV aerials', 'Electricians tools & supplies', 'Batteries & chargers', 'EV charging']
safety_security = ['CCTV cameras', 'Burglar alarms', 'Smoke alarms', 'Carbon monoxide alarms', 'Door locks & latches', 'Safes', 'Key safes & cash boxes', 'Bike locks', 'Fire extinguishers', 'Padlocks', 'Gate locks']
smart_home = ['Smart light bulbs', 'Smart alarms', 'Smart cameras', 'Smart heating', 'Smart door locks', 'Smart door bells', 'Smart plugs']
garden_tools = ['Pressure washers', 'Lawnmowers', 'Garden hand tools', 'Garden power tools', 'Wheelbarrows & trolleys', 'Incinerators', 'Shovels & spades', 'Composters', 'Garden waste bags & sacks', 'Watering cans', 'Gardening gloves', 'Garden kneelers']
growing_planting = ['Plants, seeds & bulbs', 'Pots, planters & baskets', 'Compost, manure & soil', 'Fertilisers & plant food', 'Pest control', 'Hoses, pumps & irrigation', 'Lawn care', 'Weed killers', 'Plant protection & support', 'Propagators', 'Garden cloches', 'Plant trays']
landscaping = ['Fencing', 'Paving & walling', 'Trellis & screening', 'Stone, gravel & chippings', 'Decking', 'Garden gates', 'Artificial grass', 'Lawn turf', 'Timber sleepers', 'Lawn edging', 'Garden railings', 'Ponds & water features']
garden_buildings_storage = ['Sheds', 'Garden storage boxes', 'Summerhouses', 'Greenhouses & growhouses', 'Pergolas', 'Gazebos', 'Arches', 'Arbours', 'Log cabins & garden offices', 'Shed bases', 'Awnings']
outdoor_living = ['Garden furniture', 'Hot tubs & saunas', 'BBQs & BBQ tools', 'Chimineas & fire pits', 'Sunloungers', 'Home bars', 'Parasols & bases', 'Pizza ovens', 'Pools & accessories', 'Hammocks', 'Garden furniture covers']
interior_paint = ['Emulsion paint', 'Metal & wood paint', 'Paint mixing', 'Furniture paint', 'Primers & undercoats', 'Damp & anti-mould paint', 'Tile paint', 'Radiator paint', 'Spray paint', 'Floor paint', 'Chalkboard paint', 'Paint samples']
exterior_paint = ['Metal & wood paint', 'Masonry paint', 'Fence paint', 'Paint mixing', 'Door paint', 'Decking paint']
woodcare = ['Wood stain', 'Wood varnish', 'Wood preservatives', 'Wood oil', 'Wood wax', 'Exterior woodcare', 'Interior woodcare']
decorating_supplies = ['Paint rollers', 'Paint brushes', 'Paint trays', 'Paint pads', 'Dust sheets', 'Fillers', 'Tapes', 'Sandpaper', 'Glues & adhesives', 'Sealants', 'Paint stripper', 'Expanding foam']
wallpaper_coverings = ['Wallpaper', 'Murals', 'Wall stickers', 'Sticky back plastic & window film', 'Wallpaper tools', 'Lining paper']
flooring = ['Laminate', 'Luxury vinyl click', 'Sheet vinyl', 'Adhesive vinyl tiles', 'Solid wood', 'Engineered wood', 'Adhesive vinyl planks', 'Carpet', 'Flooring samples']
tiles = ['Floor tiles', 'Wall tiles', 'Bathroom tiles', 'Kitchen tiles', 'Mosaic & border tiles', 'Outdoor tiles', 'Sample tiles']
flooring_tools = ['Underlay', 'Scotias & floor trims', 'Thresholds, t-bars & reducers', 'Skirting & architrave', 'Underfloor heating']
tiling_tools = ['Tile trims', 'Grout', 'Adhesive', 'Tiling trowels', 'Tile cutters', 'Tile spacers', 'Tile scribes', 'Grouting tools', 'Tile kits', 'Sealant']
power_tools = ['Drills', 'Saws', 'Sanders', 'Multi tools & hobby tools', 'Angle grinders', 'Kits & twinpacks', 'Impact drivers & wrenches', 'Screwdrivers', 'Nail guns', 'Routers', 'Planers', 'Workshop machinery']
power_tool_accessories = ['Sawing & blades', 'Drill bits', 'Sanding', 'Mixed drill bit sets', 'Multi tool accessories', 'Holesaws', 'Angle grinder discs', 'Screwdriver bits', 'Batteries & chargers', 'Routing', 'Chucks, keys & holders', 'Cleaning & preparation']
hand_tools = ['Hand saws', 'Measures & levels', 'Spanners & wrenches', 'Screwdrivers & keys', 'Tool kits', 'Demolition', 'Cutting tools', 'Plastering tools', 'Woodworking tools', 'Pliers', 'Bricklaying tools', 'Cable tools']
safety_workwear = ['Workwear', 'Work trousers', 'Overalls & coveralls', 'Work jackets', 'Hoodies & sweatshirts', 'Work shorts', 'Footwear', 'Safety boots', 'Safety trainers', 'Gloves', 'Dust masks & filters', 'Goggles & glasses']
equipment = ['Tool storage', 'Ladders & steps', 'Workbenches & trestles', 'Trolleys & carts', 'Cement mixers', 'Vacuum cleaners', 'Car care & maintenance', 'Workshop machinery', 'Air compressors', 'Torches & worklights', 'Tarpaulins, sheets & sacks']


sort_data(building_supplies, 'building_supplies')
sort_data(timber_sheet, 'timber_sheet')
sort_data(hardware, 'hardware')
sort_data(doors_windows, 'doors_windows')
sort_data(radiators, 'radiators')
sort_data(fires_stoves_heaters, 'fires_stoves_heaters')
sort_data(plumbing, 'plumbing')
sort_data(heating, 'heating')
sort_data(air_treatment, 'air_treatment')
sort_data(furniture, 'furniture')
sort_data(home_furnishings, 'home_furnishings')
sort_data(home_accessories, 'home_accessories')
sort_data(storage_shelving, 'storage_shelving')
sort_data(laundry_utility, 'laundry_utility')
sort_data(kitchen, 'kitchen')
sort_data(appliances, 'appliances')
sort_data(bathrooms, 'bathrooms')
sort_data(showering, 'showering')
sort_data(indoor_lights, 'indoor_lights')
sort_data(outdoor_lights, 'outdoor_lights')
sort_data(electrical, 'electrical')
sort_data(safety_security, 'safety_security')
sort_data(smart_home, 'smart_home')
sort_data(garden_tools, 'garden_tools')
sort_data(growing_planting, 'growing_planting')
sort_data(landscaping, 'landscaping')
sort_data(garden_buildings_storage, 'garden_buildings_storage')
sort_data(outdoor_living, 'outdoor_living')
sort_data(interior_paint, 'interior_paint')
sort_data(exterior_paint, 'exterior_paint')
sort_data(woodcare, 'woodcare')
sort_data(decorating_supplies, 'decorating_supplies')
sort_data(wallpaper_coverings, 'wallpaper_coverings')
sort_data(flooring, 'flooring')
sort_data(tiles, 'tiles')
sort_data(flooring_tools, 'flooring_tools')
sort_data(tiling_tools, 'tiling_tools')
sort_data(power_tools, 'power_tools')
sort_data(power_tool_accessories, 'power_tool_accessories')
sort_data(hand_tools, 'hand_tools')
sort_data(safety_workwear, 'safety_workwear')
sort_data(equipment, 'equipment')



