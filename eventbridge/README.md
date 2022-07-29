#### Publisher lambda publishes a event
#### Event rule is created to map source to consumers 
#### Permission is given to Event rule to invoke the target resouces like consumer lambda's
#### Matching source and detail state will make the event is passed to consumers

## Below are the commands used to build and deploy the Eventbridge Lambda's


`sam validate --profile developertwo`
`sam build`
`sam deploy --guided --profile developertwo`

`sam build`
`sam deploy --profile developertwo`
`aws cloudformation delete-stack --stack-name eventbridge-dev-demo --profile developertwo`