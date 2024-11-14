---
title: "data shuffling and batching"
date: '2024-11-14'
id: 'data-shuffling-and-batching'
---

Okay, so you're talking about data shuffling and batching right  It's a pretty fundamental part of training machine learning models  Basically, we want to make sure the model sees all the data, but we don't want to feed it all at once  That's where shuffling and batching come in  

Think of it like this  Let's say we have a deck of cards  We want to shuffle them so the model doesn't learn from a bunch of "hearts" then a bunch of "spades"  That would give us a biased model  So we shuffle the deck  

But we also want to make sure we don't overwhelm the model with the entire deck  We can only handle so many cards at a time  That's batching  We pick a small group of cards (a batch) and train the model on it  Then we shuffle again and pick a new batch  

Here's some code in Python that shows what I mean  

```python
import numpy as np

# create some fake data
data = np.arange(100)

# shuffle the data
np.random.shuffle(data)

# define the batch size
batch_size = 10

# split the data into batches
batches = np.split(data, len(data) // batch_size)

# now you have a list of batches
print(batches)
```

So there you have it  Data shuffling and batching  It's important for training good machine learning models  Search for "data shuffling and batching in machine learning" for more info
