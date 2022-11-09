from suppliers import *
from python_to_postgres import *


# Blue Circle MultiPurpose Cement 25kg
def bluecircle_multi_cement_25():
    to_database('bluecircle_multi_cement_25', [
        scrape_bq(
            'https://www.diy.com/departments/blue-circle-multipurpose'
            '-cement-25kg-bag/35715_BQ.prd'),
        scrape_travisperkins(
            'https://www.travisperkins.co.uk/cement/blue-circle-general'
            '-purpose-grey-cement-in-paper-bag-25kg/p/846581'),
        scrape_wickes(
            'https://www.wickes.co.uk/Blue-Circle-General-Purpose-Cement'
            '---25kg/p/224661'),
        scrape_buildersmerchant(
            'https://www.buildersmerchant.com/product/blue-circle-general-purpose-cement-25kg/'),
        scrape_bradfords('https://www.bradfords.co.uk/blue-circle-general-purpose-cement-25kg-cem225'),
        scrape_amazon('https://www.amazon.co.uk/Blue-Circle-General-Purpose-Cement/dp/B088HH7DNL')
    ])


# Tarmac Kiln Dried Paving Sand 25kg
def tarmac_kiln_dried_paving_sand_25():
    to_database('tarmac_kiln_dried_paving_sand_25', [
        scrape_bq(
            'https://www.diy.com/departments/tarmac-kiln-dried-paving-sand-large-bag/535484_BQ.prd'),
        scrape_travisperkins(
            'https://www.travisperkins.co.uk/bagged-aggregates/kiln-dried-paving-sand-25kg/p/518674'),
        scrape_wickes(
            'https://www.wickes.co.uk/Tarmac-Kiln-Dried-Paving-Sand---Large-Bag/p/236668'),
        scrape_homebase('https://www.homebase.co.uk/tarmac-kiln-dried-paving-sand-large-bag/12804149.html'),
        scrape_bradfords('https://www.bradfords.co.uk/tarmac-trupak-kiln-dried-sand-25kg-kds020')
    ])


# British Gypsum Thistle MultiFinish Finishing Plaster 25kg
def thistle_multifinish_plaster_25():
    to_database('thistle_multifinish_plaster_25', [
        scrape_bq('https://www.diy.com/departments/thistle-multifinish-plaster-25kg-bag/35812_BQ.prd'),
        scrape_travisperkins(
            'https://www.travisperkins.co.uk/plaster/british-gypsum-thistle-multifinish-coat-plaster-25kg/p/848743'),
        scrape_wickes(
            'https://www.wickes.co.uk/British-Gypsum-Thistle-Multi-Finish-Plaster---25kg/p/220056'),
        scrape_homebase('https://www.homebase.co.uk/thistle-multifinish-plaster-25kg/12815176.html'),
        scrape_bradfords('https://www.bradfords.co.uk/thistle-multi-finish-plaster-25kg-tmf025'),
        scrape_jewson('https://www.jewson.co.uk/p/british-gypsum-thistle-multifinish-coat-plaster-25kg-PRTLETMF'),
        scrape_materialsmarket('https://materialsmarket.com/products/british-gypsum-thistle-multi-finish-plaster-25kg'),
        scrape_builderdepot('https://www.builderdepot.co.uk/british-gypsum-thistle-multi-finish-25kg'),
        scrape_amazon('https://www.amazon.co.uk/Thistle-Multi-Finish-Plaster-British/dp/B07BN4FC1L')
    ])

