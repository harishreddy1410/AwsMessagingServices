# Messaging services in AWS serverless applications
# Eventbridge rule to invoke a sqs and send events to lambda function

Go to aws console > Event bridge > Event bus > send events > let the "default" be there > Enter event source as "any.event" > enter sample detail type > paste the below JSON in the Event detail > click Send

{
    "source": "any.event",
    "message": "twinkle twinkle little star"
}

Goto SQS from console > select the SQS > Monitoring > check the stats for number of the "Number Of Messages Received"

