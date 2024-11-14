---
title: "labeling platform integration (AWS SageMaker, Supervisely)"
date: '2024-11-14'
id: 'labeling-platform-integration-aws-sagemaker-supervisely'
---

Okay, so you're trying to hook up your labeling platform to SageMaker. Supervisely, huh? I've messed around with that a bit, and it's pretty neat. You'll probably want to use the SageMaker Ground Truth API for this. 

Here's a snippet that shows a basic workflow using the AWS CLI 

```bash
aws sagemaker-groundtruth-labeler create-labeling-job --labeling-job-name MyLabelingJob \
    --input-manifest ./manifest.json \
    --labeling-job-output-config S3OutputConfig={"S3Uri": "s3://my-bucket/output"} \
    --label-attribute-names "bounding_box" \
    --human-task-config HumanTaskConfig={
        "AnnotationConsolidationConfig": {
            "AnnotationConsolidationType": "SINGLE" 
        },
        "PreHumanTaskLambdaArn": "arn:aws:lambda:us-east-1:123456789012:function:MyPreHumanTaskLambda" 
    }
```

You'll need to create a manifest file (`manifest.json`) and configure your pre-human task lambda. Then, you can use the `aws sagemaker-groundtruth-labeler` CLI commands to manage labeling jobs. 

Search for "SageMaker Ground Truth API" and "Amazon SageMaker Ground Truth Labeler" for more details. You'll find lots of info on creating labeling jobs, managing data, and handling the output.
