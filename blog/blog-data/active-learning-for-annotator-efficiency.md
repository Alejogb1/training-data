---
title: "active learning for annotator efficiency"
date: '2024-11-14'
id: 'active-learning-for-annotator-efficiency'
---

Active learning is super useful for making annotators more efficient. Basically, you train a model on a small amount of data and then use it to select the most informative examples for the annotators to label. This lets you get the most bang for your buck with the annotations, you know? 

Here's a simple example using scikit-learn's `ActiveLearning` class. You can use it to select the next best sample to label based on various strategies like uncertainty sampling.

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from modAL.models import ActiveLearner
from modAL.uncertainty import uncertainty_sampling

# Load and split your data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# Initialize your model and active learner
model = LogisticRegression()
learner = ActiveLearner(estimator=model, query_strategy=uncertainty_sampling)

# Train on a small initial set
learner.teach(X_train[:10], y_train[:10])

# Get the next sample to label
query_idx, query_instance = learner.query(X_train)

# Annotate the sample and teach the learner
# ...

# Continue this process until desired performance is achieved
```

You can search for "active learning uncertainty sampling" to learn more about different sampling strategies. Also, check out the modAL documentation. It's got lots of examples and you can even find active learning strategies for other types of models.
