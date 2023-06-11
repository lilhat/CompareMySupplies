from suppliers import *
from python_to_postgres import *


# Functions that call scrape functions on individual product suppliers, then calls function to insert into database

# Blue Circle Multipurpose Cement 25kg
def bluecircle_multi_cement_25kg():
    to_database('bluecircle_multi_cement_25kg', [
        scrape_bq(
            'https://www.diy.com/departments/blue-circle-multipurpose'
            '-cement-25kg-bag/35715_BQ.prd'),
        # scrape_travisperkins(
        #     'https://www.travisperkins.co.uk/cement/blue-circle-general'
        #     '-purpose-grey-cement-in-paper-bag-25kg/p/846581'),
        scrape_wickes(
            'https://www.wickes.co.uk/Blue-Circle-General-Purpose-Cement'
            '---25kg/p/224661'),
        scrape_bradfords('https://www.bradfords.co.uk/blue-circle-general-purpose-cement-25kg-cem225'),
        scrape_amazon('https://www.amazon.co.uk/Blue-Circle-General-Purpose-Cement/dp/B088HH7DNL')
    ])


# Tarmac Kiln Dried Paving Sand 25kg
def tarmac_kiln_dried_paving_sand_25kg():
    to_database('tarmac_kiln_dried_paving_sand_25kg', [
        scrape_bq(
            'https://www.diy.com/departments/tarmac-kiln-dried-paving-sand-large-bag/535484_BQ.prd'),
        # scrape_travisperkins(
        #     'https://www.travisperkins.co.uk/bagged-aggregates/kiln-dried-paving-sand-25kg/p/518674'),
        scrape_wickes(
            'https://www.wickes.co.uk/Tarmac-Kiln-Dried-Paving-Sand---Large-Bag/p/236668'),
        scrape_homebase('https://www.homebase.co.uk/tarmac-kiln-dried-paving-sand-large-bag/12804149.html'),
        scrape_bradfords('https://www.bradfords.co.uk/tarmac-trupak-kiln-dried-sand-25kg-kds020')
    ])


# British Gypsum Thistle MultiFinish Finishing Plaster 25kg
def thistle_multifinish_plaster_25kg():
    to_database('thistle_multifinish_plaster_25kg', [
        scrape_bq('https://www.diy.com/departments/thistle-multifinish-plaster-25kg-bag/35812_BQ.prd'),
        # scrape_travisperkins(
        #     'https://www.travisperkins.co.uk/plaster/british-gypsum-thistle-multifinish-coat-plaster-25kg/p/848743'),
        scrape_wickes(
            'https://www.wickes.co.uk/British-Gypsum-Thistle-Multi-Finish-Plaster---25kg/p/220056'),
        scrape_homebase('https://www.homebase.co.uk/thistle-multifinish-plaster-25kg/12815176.html'),
        scrape_bradfords('https://www.bradfords.co.uk/thistle-multi-finish-plaster-25kg-tmf025'),
        scrape_jewson('https://www.jewson.co.uk/p/british-gypsum-thistle-multifinish-coat-plaster-25kg-PRTLETMF'),
        scrape_materialsmarket('https://materialsmarket.com/products/british-gypsum-thistle-multi-finish-plaster-25kg'),
        scrape_builderdepot('https://www.builderdepot.co.uk/british-gypsum-thistle-multi-finish-25kg'),
        scrape_amazon('https://www.amazon.co.uk/Thistle-Multi-Finish-Plaster-British/dp/B07BN4FC1L')
    ])


# Gyproc Square Edge Plasterboard (L)1.8m (W)0.9m (T)12.5mm
def gyproc_square_edge_plasterboard_l1800_w900_t12p5():
    to_database('gyproc_square_edge_plasterboard_l1800_w900_t12p5', [
        scrape_bq(
            'https://www.diy.com/departments/gyproc-standard-square-edge-plasterboard-l-1-8m-w-0-9m-t-12-5mm/35761_BQ'
            '.prd'),
        # scrape_travisperkins(
        #     'https://www.travisperkins.co.uk/standard-plasterboard/british-gypsum-gyproc-wallboard-square-edge-1800mm'
        #     '-x-900mm-x-9-5mm/p/760041')
    ])


# Dense Concrete Block (H)100mm (L)440mm (W)100mm
def dense_concrete_block_h100_l440_w100():
    to_database('dense_concrete_block_h100_l440_w100', [
        scrape_bq(
            'https://www.diy.com/departments/dense-concrete-block-l-440mm-w-100mm-pack-of-72/47657_BQ.prd')
    ])


# Blue Circle Multipurpose Ready Mixed Concrete 20kg
def bluecircle_multi_readymixed_concrete_20kg():
    to_database('bluecircle_multi_readymixed_concrete_20kg', [
        scrape_bq(
            'https://www.diy.com/departments/blue-circle-multipurpose-ready-mixed-concrete-20kg-bag/135767_BQ.prd'),
        # scrape_travisperkins(
        #     'https://www.travisperkins.co.uk/ready-mixed-concrete-and-mortar/blue-circle-multi-purpose-ready-to-use'
        #     '-concrete-20kg/p/346658'),
        scrape_wickes(
            'https://www.wickes.co.uk/Blue-Circle-Multi-Purpose-Ready-To-Use-Concrete---20kg/p/133770'),
        scrape_homebase('https://www.homebase.co.uk/tarmac-multipurpose-concrete-20kg/12811797.html'),
        scrape_bradfords('https://www.bradfords.co.uk/blue-circle-multi-purpose-concrete-large')
    ])


# Metsa Wood Round Edge Whitewood CLS Timber (L)2.4m (W)63mm (T)38mm
def metsa_roundedge_whitewood_cls_timber_l2400_w63_t38():
    to_database('metsa_roundedge_whitewood_cls_timber_l2400_w63_t38', [
        scrape_bq(
            'https://www.diy.com/departments/metsa-wood-round-edge-whitewood-cls-timber-l-2-4m-w-63mm-t-38mm'
            '/1798294_BQ.prd')
    ])


# NoNonsense White PVA Adhesive 5l
def nononsense_white_pva_adhesive_5l():
    to_database('nononsense_white_pva_adhesive_5l', [
        scrape_bq(
            'https://www.diy.com/departments/no-nonsense-white-pva-adhesive-5l/5059340110806_BQ.prd'),
        scrape_screwfix('https://www.screwfix.com/p/no-nonsense-pva-5ltr/57248')
    ])


# Prysmian 6242Y 2.5mm Grey Twin & Earth cable, 100m
def prysmian_6242y_2p5mm_grey_twinearth_100m():
    to_database('prysmian_6242y_2p5mm_grey_twinearth_100m', [
        scrape_bq(
            'https://www.diy.com/departments/prysmian-6242y-2-5mm-grey-twin-earth-cable-100m/33833_BQ.prd'),
        scrape_screwfix('https://www.screwfix.com/p/prysmian-6242y-grey-2-5mm-twin-earth-cable-100m-drum/20967')
    ])


# Off-Brand 2.5mm Grey Twin & Earth cable, 100m
def offbrand_6242y_2p5mm_grey_twinearth_100m():
    to_database('offbrand_6242y_2p5mm_grey_twinearth_100m', [
        scrape_builderdepot(
            'https://www.builderdepot.co.uk/2-5mm-twin-and-earth-cable-100m-drum-6242y'),
        scrape_toolstation('https://www.toolstation.com/pitacs-twin-earth-cable-6242y-grey/p51466'),
        scrape_wickes('https://www.wickes.co.uk/Wickes-Twin+Earth-Cable---2-5mm2-x-100m/p/156254'),
        scrape_cef('https://www.cef.co.uk/catalogue/products/4116412-h6242y-2-5mm-pvc-twin-and-earth-cable-grey-100m'
                   '-drum')
    ])


# FloPlast Ring Seal Black Single Socket Soil pipe, (D)110mm (L)3000mm
def floplast_ringseal_black_singlesocket_soil_pipe_d110_l3000():
    to_database('floplast_ringseal_black_singlesocket_soil_pipe_d110_l3000', [
        scrape_bq('https://www.diy.com/departments/floplast-ring-seal-soil-black-single-socket-soil-pipe-dia-110mm-l'
                  '-3000mm/80963_BQ.prd'),
        scrape_screwfix('https://www.screwfix.com/p/floplast-push-fit-single-socket-soil-pipe-black-110mm-x-3m/49565'
                        '#product_additional_details_container')
    ])


# MK Sentry 16-Module 8-Way Populated Dual RCD Consumer Unit with SPD
def mk_sentry_16module_8way_populated_dual_rcd_consumer_unit_spd():
    to_database('mk_sentry_16module_8way_populated_dual_rcd_consumer_unit_spd', [
        scrape_screwfix('https://www.screwfix.com/p/mk-sentry-16-module-8-way-populated-dual-rcd-consumer-unit-with'
                        '-spd/437pf'),
        scrape_cef('https://www.cef.co.uk/catalogue/products/4911245-8-way-flexible-dual-100a-rcd-metal-clad-consumer'
                   '-unit-with-spd-and-8-x-mcbs')
    ])


prods = [('bluecircle_multi_cement_25kg', 'Blue Circle Multipurpose Cement, 25kg', 'cement'),
         ('tarmac_kiln_dried_paving_sand_25kg', 'Tarmac Kiln Dried Paving Sand, 25kg', 'sand'),
         ('thistle_multifinish_plaster_25kg', 'Thistle Multifinish plaster, 25kg', 'plaster'),
         ('gyproc_square_edge_plasterboard_l1800_w900_t12p5',
          'Gyproc Standard Square edge Plasterboard', 'plasterboard'),
         ('dense_concrete_block_h100_l440_w100', 'Dense Concrete block (L)440mm (W)100mm', 'concrete'),
         ('bluecircle_multi_readymixed_concrete_20kg', 'Blue Circle Ready Mixed Concrete, 20kg', 'concrete'),
         ('metsa_roundedge_whitewood_cls_timber_l2400_w63_t38', 'Metsa Round Edge Whitewood CLS Timber', 'timber'),
         ('nononsense_white_pva_adhesive_5l', 'No Nonsense White PVA Adhesive 5L', 'adhesives'),
         ('prysmian_6242y_2p5mm_grey_twinearth_100m', 'Prysmian 2.5MM Twin & Earth Cable 100M', 'electrical'),
         ('offbrand_6242y_2p5mm_grey_twinearth_100m', 'Offbrand 2.5MM Twin & Earth Cable 100M', 'electrical'),
         ('floplast_ringseal_black_singlesocket_soil_pipe_d110_l3000', 'Floplast Ringseal Black Soil '
                                                                       'Pipe Black', 'pipe'),
         ('mk_sentry_16module_8way_populated_dual_rcd_consumer_unit_spd',
          'MK Sentry 16-Module Dual RCD Consumer Unit', 'electrical')]
