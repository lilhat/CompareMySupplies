import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest
import re
import csv

nlp = spacy.load('en_core_web_lg')
punctuation = punctuation + '\n                 '

def summarize(text):
    # define the pattern to match
    pattern = r"(\w)([A-Z][a-z]+)"
    output_string = re.sub(pattern, r"\1. \2", text)
    pattern2 = r"\b([A-Z][a-z]*)\. "
    output_string = re.sub(pattern2, r"\1", output_string)
    pattern3 = r"\b([A-Z][a-z]+[A-Z][a-z]*)\ "
    words = re.findall(pattern3, output_string)
    split_words = []
    for word in words:
        new_words = re.findall(r'[A-Z][a-z]*', word)
        new_words[0] = new_words[0] + ". " + new_words[1]
        new_words.remove(new_words[1])
        split_words += new_words
    for i in range(len(words)):
        output_string = re.sub(words[i], split_words[i], output_string)

    # print the output string
    pattern1 = r'\b(instruction|manual|guarantee|benefits|instructions)\b'
    sentences = output_string.split('. ')
    filtered_sentences = [sentence for sentence in sentences if not re.search(pattern1, sentence, re.IGNORECASE)]
    text = '. '.join(filtered_sentences)
    # Process the text with Spacy
    doc = nlp(text)

    # Get the sentences in the document and join them with a period and a space
    sentences = [sent.text.strip() for sent in doc.sents]
    text = ". ".join(sentences)

    # Calculate the score for each sentence based on word frequency
    word_freq = {}
    stop_words = list(STOP_WORDS)
    for word in doc:
        if word.text.lower() not in stop_words:
            if word.text.lower() not in punctuation:
                if word.text.lower() not in word_freq.keys():
                    word_freq[word.text.lower()] = 1
                else:
                    word_freq[word.text.lower()] += 1

    # normalizing the frequency counts
    for word in word_freq.keys():
        word_freq[word] = word_freq[word] / max(word_freq.values())
    # we get the normalized frequency values

    sent_tokens = [sent for sent in doc.sents]

    sent_score = {}
    for sent in sent_tokens:
        for word in sent:
            if word.text.lower() in word_freq.keys():
                if sent not in sent_score.keys():
                    sent_score[sent] = word_freq[word.text.lower()]
                else:
                    sent_score[sent] += word_freq[word.text.lower()]

    summary = nlargest(n=4, iterable=sent_score, key=sent_score.get)

    summary_sentences = []
    for sentence in summary:
        if sentence[-1].text not in ['.', '!', '?']:
            summary_sentences.append(sentence.text + '.')
        else:
            summary_sentences.append(sentence.text)

    summary_text = ' '.join(summary_sentences)
    print(summary_text)
    return summary_text


with open('productsnew.csv', 'r', encoding='utf-8-sig') as infile, open('productsnew2.csv', 'w', newline='', encoding='utf-8-sig') as outfile:
    reader = csv.DictReader(infile)
    writer = csv.DictWriter(outfile, fieldnames=reader.fieldnames)
    writer.writeheader()

    for row in reader:
        summarized_desc = summarize(row['description'])
        row['description'] = summarized_desc
        writer.writerow(row)
