---
title: "differential privacy in training data"
date: '2024-11-14'
id: 'differential-privacy-in-training-data'
---

Yo, differential privacy is super cool! It's like, imagine training a model on a bunch of personal data, like maybe medical records or something, but you want to make sure no one can figure out any individual's info just by looking at the model's output. Differential privacy lets you do that. It adds random noise to the data during training, making it harder to figure out specific individuals. 

Here's a super basic code snippet of how it works:

```python
import numpy as np

def add_noise(data, epsilon):
    noise = np.random.laplace(scale=1/epsilon, size=data.shape)
    return data + noise
```

This code snippet adds Laplace noise to your data. The `epsilon` parameter controls how much noise is added, and it impacts how much privacy is guaranteed. Search for "differential privacy epsilon" to learn more.

Anyway, the gist is you can use differential privacy to train models on sensitive data while still keeping the privacy of individuals in the data. It's like having your cake and eating it too, but with privacy.
