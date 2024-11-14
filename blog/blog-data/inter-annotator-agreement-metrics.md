---
title: "inter-annotator agreement metrics"
date: '2024-11-14'
id: 'inter-annotator-agreement-metrics'
---

Hey, so I was looking into inter-annotator agreement metrics recently  it's pretty important for making sure your annotations are consistent right  I found a bunch of different metrics like Cohen's kappa and Fleiss' kappa  they're all based on comparing annotations from different people  like, how much do they agree  and how much is just random chance  

I found this neat little Python library called "sklearn"  it has a function called "cohen_kappa_score"  that does all the calculations for you  you just give it two arrays of annotations and it spits out the kappa score  

```python
from sklearn.metrics import cohen_kappa_score

annotations1 = [1, 0, 1, 1, 0]
annotations2 = [1, 1, 1, 0, 0]

kappa = cohen_kappa_score(annotations1, annotations2)
print(kappa)
```

So yeah  it's pretty useful stuff  makes sure your annotations are good  check out "cohen's kappa" and "fleiss' kappa"  they're the big ones  and "sklearn" is a great library  good luck!
