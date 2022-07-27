'use strict'
const AWS = require('aws-sdk')
AWS.config.region = process.env.AWS_REGION
const sns = new AWS.SNS({apiVersion:'2012-11-05'});

exports.handler = async (event) => {
    //Params is the object for sns
    const params = {
        Message: `Message - ${Date()}`,
        Subject: 'New message to SNS to publish from publisher',
        TopicArn: process.env.SNSTopicName
    }
    //SNS Publish
    const result = await sns.publish(params).promise();
    console.log(result);
    console.log('----- sns published a message -----');
}