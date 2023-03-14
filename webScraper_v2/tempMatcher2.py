import os
import csv
from fuzzywuzzy import fuzz, process
import re


desc1 = """
Please note that product supplied comes from a natural source and may vary in colour, size and texture.CE markedFeatures and benefitsCoverage will be dependent on depth laid, ground conditions etcFor use in concreting applicationsUse to create high strength concrete mixesIdeal for pathways and drivesNot for decorative useExcellent drainage properties

"""
desc2 = """ 
Transform your garden with our low maintenance natural decorative stone.Consistent colour and quality Supplied in plastic packaging and can be stored outside without wastage Actual bag weights may vary due to the level of moisture within the product 
"""
print(fuzz.token_set_ratio(desc1, desc2))