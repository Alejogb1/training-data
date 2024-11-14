---
title: "annotation guidelines for consistent labeling"
date: '2024-11-14'
id: 'annotation-guidelines-for-consistent-labeling'
---

Hey so I've been thinking about how to make sure our labels are consistent across the board you know  like a unified front 
  
What if we used something like a simple dictionary to define our labels and what they mean 
  
For example 
  
```python 
label_definitions = {
"happy": "positive emotion",
"sad": "negative emotion",
"angry": "strong negative emotion",
}
```
  
This way we're all on the same page when labeling and it also makes it easier to check for consistency later on 
  
We can also use this dictionary to generate helpful prompts for labelers during the process 
  
Maybe we can even build a little script that checks the labels against this dictionary to make sure everything is in line  
  
Let me know what you think
