#### SNS Topic -- SomeSNSTopic
#### Publisher lambda publishes a message via SNS
#### publish sns will fan-out the topic to subscribers 
#### And hence pub-sub model is built

## Below are the commands used to build and deploy the SNS Lambda's

`sam build`
`sam deploy --guided --profile developertwo`
## after modification
`sam build`
`sam deploy --profile developertwo`
