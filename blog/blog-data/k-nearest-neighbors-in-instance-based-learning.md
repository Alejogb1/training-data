---
title: "k-nearest neighbors in instance-based learning"
date: '2024-11-14'
id: 'k-nearest-neighbors-in-instance-based-learning'
---

K-nearest neighbors is like a super smart friend who tells you what to do based on what their other friends are doing.  Think of it like a giant, messy party where everyone is labeled with a tag.  You're trying to figure out which group you belong to.  Your super smart friend looks at the k closest people to you and says "you're most likely like them." 

In code, it's like this

```python
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=5) # we're looking at 5 friends
knn.fit(X_train, y_train)  # train the model on the tagged friends
y_pred = knn.predict(X_test)  # predict which group you belong to
```

The magic happens in `KNeighborsClassifier`.  It finds the k closest neighbors, takes a vote, and gives you the label.  You can search for "k nearest neighbors algorithm" to understand more.  The cool thing is it's easy to use and super versatile.  It can be used for all sorts of things like image recognition, predicting movie ratings, and even figuring out what you should eat for dinner!
