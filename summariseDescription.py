import nltk
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist
import spacy
import re
import csv

def summariseDesc(input_string):

    # define the pattern to match
    pattern = r"(\w)([A-Z][a-z]+)"
    output_string = re.sub(pattern, r"\1. \2", input_string)
    pattern2 = r"\b([A-Z][a-z]*)\. "
    output_string = re.sub(pattern2, r"\1", output_string)

    # print the output string
    pattern1 = r'\b(instruction|manual|guarantee|benefits|instructions)\b'
    sentences = output_string.split('. ')
    filtered_sentences = [sentence for sentence in sentences if not re.search(pattern1, sentence, re.IGNORECASE)]
    output_string = '. '.join(filtered_sentences)
    # Load the English language model in spaCy
    nlp = spacy.load('en_core_web_sm')

    # Define the paragraph to be summarized
    paragraph = output_string

    # Add sentence boundaries using spaCy
    doc = nlp(paragraph)
    sentences = [sent.text.strip() for sent in doc.sents]

    # Remove any leading/trailing whitespace from the sentences
    sentences = [sent.strip() for sent in sentences]

    # Tokenize the sentences into words, remove stopwords, and calculate word frequency distribution
    stop_words = set(stopwords.words('english'))
    words = []
    unique_sentences = set()
    for sentence in sentences:
        filtered_sentence = [word for word in sentence.split() if word.lower() not in stop_words]
        sentence_str = ' '.join(filtered_sentence).strip()  # remove leading and trailing white spaces
        if sentence_str not in unique_sentences:
            unique_sentences.add(sentence_str)
            words.extend(filtered_sentence)


    freq_dist = FreqDist(words)

    # Sort the words by frequency and select the most frequent ones
    top_words = [pair[0] for pair in freq_dist.most_common(5)]

    # Generate the summary by selecting the sentences that contain the top words
    summary = []
    unique_sentences = set()
    for sentence in sentences:
        if sentence not in unique_sentences:
            unique_sentences.add(sentence)
            print(sentence)
            for word in top_words:
                if word in sentence.lower():
                    summary.append(sentence.strip())
                    break

    # Print the summary
    final_string = ' '.join(summary)
    return final_string

with open('database/products.csv', 'r', encoding='utf-8-sig') as infile, open('products2.csv', 'w', newline='', encoding='utf-8-sig') as outfile:
    reader = csv.DictReader(infile)
    writer = csv.DictWriter(outfile, fieldnames=reader.fieldnames)
    writer.writeheader()

    for row in reader:
        summarized_desc = summariseDesc(row['description'])
        row['description'] = summarized_desc
        writer.writerow(row)