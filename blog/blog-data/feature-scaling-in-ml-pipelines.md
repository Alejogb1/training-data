---
title: "feature scaling in ML pipelines"
date: '2024-11-14'
id: 'feature-scaling-in-ml-pipelines'
---

Feature scaling is basically making sure all your features are on the same scale, think of it like standardizing the units. This is important because some algorithms are sensitive to feature ranges, especially those using distance calculations.  

Two common methods are:

* **Min-Max Scaling:**  Rescales features to a range between 0 and 1. 

```python
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
scaled_features = scaler.fit_transform(features) 
```

* **Standardization (Z-Score):**  Transforms features to have zero mean and unit variance.

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
scaled_features = scaler.fit_transform(features)
```

You can use these in your ML pipeline with the `Pipeline` class to make your model more robust. Just remember, the right scaling method depends on the specific algorithm and dataset you're working with!
