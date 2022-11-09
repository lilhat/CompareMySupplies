from suppliers import *
from python_to_postgres import *


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
        scrape_bradfords('https://www.bradfords.co.uk/blue-circle-general-purpose-cement-25kg-cem225')
    ])


def tarmac_kiln_dried_paving_sand():
    to_database('tarmac_kiln_dried_paving_sand', [
        scrape_bq(
            'https://www.diy.com/departments/tarmac-kiln-dried-paving-sand-large-bag/535484_BQ.prd'),
        scrape_travisperkins(
            'https://www.travisperkins.co.uk/bagged-aggregates/kiln-dried-paving-sand-25kg/p/518674'),
        scrape_wickes(
            'https://www.wickes.co.uk/Tarmac-Kiln-Dried-Paving-Sand---Large-Bag/p/236668'),
        scrape_homebase('https://www.homebase.co.uk/tarmac-kiln-dried-paving-sand-large-bag/12804149.html'),
        scrape_bradfords('https://www.bradfords.co.uk/tarmac-trupak-kiln-dried-sand-25kg-kds020')
    ])

