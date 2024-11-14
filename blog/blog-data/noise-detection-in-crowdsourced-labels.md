---
title: "noise detection in crowdsourced labels"
date: '2024-11-14'
id: 'noise-detection-in-crowdsourced-labels'
---

Hey so I've been looking into noise detection in crowdsourced labels, it's a real pain point you know It's like trying to find a needle in a haystack, especially when dealing with a bunch of labels from different people  One approach I've been playing around with is using something called a "majority vote" algorithm  Basically you just count how many times each label appears and choose the one with the most votes  I even wrote a little Python script to do this  Here's the gist of it 

```python
from collections import Counter

def majority_vote(labels):
  counts = Counter(labels)
  return counts.most_common(1)[0][0] 

labels = ["cat", "dog", "cat", "dog", "cat"]
majority_label = majority_vote(labels)
print(majority_label)  # Output: "cat"
```

This helps identify the most common labels but it doesn't really address the noise aspect  That's where things like "consensus clustering" come in  It's kinda like a more sophisticated version of majority vote, taking into account the relationships between different labels  You can Google "consensus clustering algorithms" to find more info  It's a bit more complex but definitely worth exploring if you want to go beyond basic noise filtering
