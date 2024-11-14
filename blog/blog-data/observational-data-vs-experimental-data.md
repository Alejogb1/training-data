---
title: "observational data vs. experimental data"
date: '2024-11-14'
id: 'observational-data-vs-experimental-data'
---

So observational data is like looking out the window and seeing what's happening  you're not changing anything just watching  experimental data is like setting up an experiment and seeing what happens when you change something  like  this code 

```python
import random

def experiment(n_trials):
  results = []
  for _ in range(n_trials):
    if random.random() < 0.5:
      results.append("heads")
    else:
      results.append("tails")
  return results

# Example usage:
results = experiment(10)
print(results) 
```

This is a simulated coin flip experiment  you're controlling the number of trials  and the outcome depends on the code you wrote  in observational data you'd just watch a bunch of coin flips and record the results  without influencing them
