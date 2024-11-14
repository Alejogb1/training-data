---
title: "training-validation-test splits"
date: '2024-11-14'
id: 'training-validation-test-splits'
---

So you're looking at how to split your data right  you want to make sure your model is trained on one set validated on another and then tested on a completely separate set  This is super important for making sure your model generalizes well  Here's a simple example using scikit-learn  you'll need to import the library and then use the `train_test_split` function  

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

This splits your data into 80% for training and 20% for testing  the `random_state` ensures you get consistent splits every time  you can also use `StratifiedShuffleSplit` if you have imbalanced classes  remember to search for "scikit-learn train test split" and "stratified shuffle split" for more info!
