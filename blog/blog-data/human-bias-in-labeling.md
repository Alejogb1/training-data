---
title: "human bias in labeling"
date: '2024-11-14'
id: 'human-bias-in-labeling'
---

Hey, bias in labeling is a huge deal in AI  it's like, we're teaching machines to be biased by feeding them biased data  think about it like this  if you only show a machine pictures of cats and then tell it to identify a dog  it's gonna struggle  same thing with labeling data  if you only have labels from one group  your AI will be biased towards that group  

we need to be careful about how we label data and make sure it's diverse and representative  we can use techniques like "data augmentation" to create more diverse data sets  like, imagine taking a picture of a cat and then rotating it, flipping it, changing the brightness  that's data augmentation  it helps us create more data from the data we already have  

also "debiasing algorithms" help to correct biases in machine learning models  it's like, teaching the machine to recognize and correct its own biases  it's a complex process but it's important to make sure our AI is fair and equitable  

```python
# example of data augmentation using ImageDataGenerator in Keras
from tensorflow.keras.preprocessing.image import ImageDataGenerator

datagen = ImageDataGenerator(rotation_range=40, width_shift_range=0.2, height_shift_range=0.2, shear_range=0.2, zoom_range=0.2, horizontal_flip=True, fill_mode='nearest')
```
