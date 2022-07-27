'use strict'
const AWS = require('aws-sdk')
AWS.config.region = process.env.AWS_REGION
const sqs = new AWS.SQS({apiVersion: '2012-11-05'})

//The lambda handler
exports.handler = async (event) => {
  const params = {
    MessageBody: `Message at ${Date()}`,
    QueueUrl: process.env.SQSqueueName
  }
  const result = await sqs.sendMessage(params).promise();
  console.log(result);
  console.log('----------SQS result after send message---------');
}
