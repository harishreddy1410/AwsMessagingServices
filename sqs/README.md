#### Publisher lambda add's a message to queue
#### Consumer lambda triggers when a message is added to queue
#### If there is not consumer lambda trigger, message stays in the queue 

## Below are the commands used to build and deploy the SQS Lambda's

`sam build`
`sam deploy --guided --profile developertwo`

`sam build`
`sam deploy --profile developertwo`
