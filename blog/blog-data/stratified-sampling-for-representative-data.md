---
title: "stratified sampling for representative data"
date: '2024-11-14'
id: 'stratified-sampling-for-representative-data'
---

Hey so you're trying to get representative data, right  That's where stratified sampling comes in  Basically, you divide your population into groups based on some characteristic like age or income  Then, you randomly sample from each group  This ensures that your sample accurately reflects the proportions of each group in the population  

Here's a super simple example in Python  Say you want to survey students about their favorite programming language, but you want to make sure you get an equal number of responses from each year  

```python
import random

# Define the student population
students = [
    {"name": "Alice", "year": "Freshman"},
    {"name": "Bob", "year": "Sophomore"},
    {"name": "Charlie", "year": "Junior"},
    {"name": "David", "year": "Senior"},
    # ... more students
]

# Create a dictionary to store the sample for each year
sample = {}

# Define the sample size for each year
sample_size = 2

# Iterate through each year
for year in ["Freshman", "Sophomore", "Junior", "Senior"]:
    # Filter the students by year
    year_students = [student for student in students if student["year"] == year]

    # Randomly select sample_size students from the year_students
    sample[year] = random.sample(year_students, sample_size)

# Print the sample
print(sample)
```

So in this example, we're ensuring that our survey gets 2 responses from each year, which is a much better representation of the student population than just picking random students.
