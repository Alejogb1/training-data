---
title: "grid search on labeled datasets"
date: '2024-11-14'
id: 'grid-search-on-labeled-datasets'
---

Hey, so you're looking to do a grid search on labeled datasets  that's cool  grid search is basically trying out different combinations of hyperparameters  like learning rate and number of layers  to find the best model  you can use scikit-learn's GridSearchCV for this  here's an example:

```python
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

param_grid = {'C': [0.1, 1, 10], 'kernel': ['linear', 'rbf']}
grid_search = GridSearchCV(SVC(), param_grid, cv=5)
grid_search.fit(X_train, y_train)
```

Here  we're creating a grid search with two hyperparameters  'C' and 'kernel'  and using 5-fold cross-validation  then we fit the grid search to our training data  'X_train' and 'y_train'  after fitting  you can access the best parameters with  `grid_search.best_params_`  and the best estimator with  `grid_search.best_estimator_`  you can then evaluate the model using this best estimator  just search for "scikit-learn GridSearchCV"  it's a powerful tool for hyperparameter optimization  good luck!
