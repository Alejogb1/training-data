---
title: "random vs. stratified sampling"
date: '2024-11-14'
id: 'random-vs-stratified-sampling'
---

Hey,

So you're trying to figure out random vs. stratified sampling, right? It's all about how you pick data points from a larger set.

Random sampling is like grabbing names out of a hat everyone has an equal chance. Stratified is more strategic you divide your data into groups based on some characteristic (like age or location) and then randomly sample from each group.

Here's a Python snippet to show you the difference

```python
import random

# Random sampling
population = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sample = random.sample(population, 3)
print(sample)

# Stratified sampling
population = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
groups = {
    "low": [1, 2, 3, 4, 5],
    "high": [6, 7, 8, 9, 10],
}
sample = []
for group in groups:
    sample.extend(random.sample(groups[group], 1))
print(sample)
```

Think of stratified sampling as making sure you get a good mix of your data. For example, if you're studying opinions about a product, you'd want to make sure you get a mix of ages and locations.

Let me know if you have any other questions about it!
