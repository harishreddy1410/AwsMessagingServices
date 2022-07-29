# Messaging services in AWS serverless applications
#### Sending message from SNS with filters to SQS
####  
`sam validate --template template-with-filter-policy.yaml --profile developertwo`
`sam build --template template-with-filter-policy.yaml --profile developertwo`
`sam deploy --guided --profile developertwo`

## Go to AWS Console > SNS > Select the topic > Publish a message > 
## Enter Subject, TTL = 60, enter message body, Type "String","type","orders or carts or payments" -- any one filter
## Go to subscription and select the sqs > check the message count


