---
title: "tagging schemes in NLP data"
date: '2024-11-14'
id: 'tagging-schemes-in-nlp-data'
---

Hey, tagging schemes are super important in NLP!  They tell us what each word or phrase means in a sentence.  Think of it like giving every word a label, and then using those labels to make sense of the whole thing.  For example,  "Part of Speech" tagging identifies whether a word is a noun, verb, adjective, etc.  "Named Entity Recognition" tagging picks out things like people, places, and organizations.  Here's a snippet from a Python library that uses tagging to find named entities:

```python
from spacy import load
nlp = load("en_core_web_sm")
doc = nlp("Apple is looking at buying a new headquarters in London.")
for ent in doc.ents:
    print(ent.text, ent.label_)
```

You can search for "spacy named entity recognition" to learn more!  Tagging schemes are a big part of NLP, and there are lots of different types out there.  It's super cool how they help us understand language.
