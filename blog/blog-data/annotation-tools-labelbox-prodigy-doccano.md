---
title: "annotation tools (Labelbox, Prodigy, Doccano)"
date: '2024-11-14'
id: 'annotation-tools-labelbox-prodigy-doccano'
---

Hey, annotation tools are super cool! I've been playing around with a few myself. Labelbox is pretty slick for image annotation, it's got a nice UI and you can set up workflows easily. Prodigy is great for text, you can do things like NER and sentiment analysis. Doccano is more of a general-purpose tool, good for text and images.  

Here's a code snippet for a simple text annotation task in Prodigy:

```python
from prodigy import set_project_slug
from prodigy.components.loaders import JSONL
from prodigy.components.classifiers import ExampleClassifier

# Set the project slug
set_project_slug("text-annotation")

# Load the data
dataset = JSONL("my_data.jsonl")

# Define the classifier 
classifier = ExampleClassifier("my_classifier")

# Run the annotation workflow
prodigy annotate "text-annotation" $dataset --label "POSITIVE", "NEGATIVE" -F my_classifier
```

For more info, search for "prodigy annotation workflow" and "labelbox image annotation" and "doccano text annotation."
