import time
from products import *

# Main program to run the product functions that initiate the webscraper and enters data into database
# Waits 10 minutes before scraping again

while True:
    bluecircle_multi_cement_25kg()
    tarmac_kiln_dried_paving_sand_25kg()
    thistle_multifinish_plaster_25kg()
    gyproc_square_edge_plasterboard_l1800_w900_t12p5()
    dense_concrete_block_h100_l440_w100()
    bluecircle_multi_readymixed_concrete_20kg()
    metsa_roundedge_whitewood_cls_timber_l2400_w63_t38()
    nononsense_white_pva_adhesive_5l()
    prysmian_6242y_2p5mm_grey_twinearth_100m()
    offbrand_6242y_2p5mm_grey_twinearth_100m()
    floplast_ringseal_black_singlesocket_soil_pipe_d110_l3000()
    mk_sentry_16module_8way_populated_dual_rcd_consumer_unit_spd()

# Sending product list to database
    to_product_database("product_list", prods)

    time_wait = 10
    print(f'Waiting {time_wait} minutes...')
    time.sleep(time_wait * 60)
