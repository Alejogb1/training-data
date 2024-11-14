---
title: "pseudolabeling for semi-supervised training"
date: '2024-11-14'
id: 'pseudolabeling-for-semi-supervised-training'
---

Hey so I've been digging into semi-supervised learning lately and pseudolabeling seems pretty cool. The idea is you train a model on your labeled data, then use it to predict labels for unlabeled data.  Those predictions are then used as pseudo labels and added to the training set.  Here's a super basic example using TensorFlow.

```python
import tensorflow as tf

# Load your labeled data
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# Define your model
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dense(10, activation='softmax')
])

# Train on labeled data
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
model.fit(x_train, y_train, epochs=10)

# Predict labels for unlabeled data
y_pred = model.predict(x_test)

# Convert predictions to pseudo labels
y_pseudo = tf.argmax(y_pred, axis=1)

# Add pseudo labeled data to training set
x_train = tf.concat([x_train, x_test], axis=0)
y_train = tf.concat([y_train, y_pseudo], axis=0)

# Retrain model with pseudo labels
model.fit(x_train, y_train, epochs=10)
```

So basically you're using your model to generate more data which helps improve its performance.  This works best with models that have a high confidence in their predictions.  You can also use techniques like confidence thresholding to filter out uncertain pseudo labels. Search for “pseudolabeling confidence thresholding” to learn more.
