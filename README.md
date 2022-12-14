# Messaging services in AWS serverless applications


```bash
.
├── README.MD        <-- This instructions file
├── sqs              <-- Creates and integrates an SQS queue with a Lambda function to send message and pick it from queue
├── sns              <-- Create lambda which publishes a SNS topic and fan-out the topic across multiple consumers(subscribers)
└── eventbridge      <-- Creates an EventBridge rule with a Lambda function as a target
└── sns-to-sqs          <-- Subscribes an SQS queue to an SNS topic
└── eventbridge-to-sns  <-- Creates an EventBridge rule with an SNS topic as a target
└── eventbridge-to-sqs  <-- Creates an EventBridge rule with an SQS queue as a target
```

## Pre-Requisites

* AWS CLI already configured with Administrator permission
* [NodeJS 12.x installed](https://nodejs.org/en/download/)

## Installation Instructions

1. [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and login.

2. In each example's directory, from the command line, run:
```
sam deploy --guided
```
Follow the prompts in the deploy process to set the stack name and AWS Region.

## Testing

The SAM deployment provides key resource names in the output.

Invoke a Lambda function from the CLI using:
```
aws lambda invoke --function-name << your-function-name >> response.json
```
Tail the function's CloudWatch logs using:
```
sam logs -n sqs-FUNCTIONNAME-M1GVFCEH030D --tail
```
==============================================