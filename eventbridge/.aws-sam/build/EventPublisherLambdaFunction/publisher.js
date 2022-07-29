'use strict'
const AWS = require('aws-sdk')
AWS.config.update({region:'us-east-1'})
const eventBridge = new AWS.EventBridge()

exports.handler = async (event) => {
    const params = {
        Entries: [
            {
                Detail: JSON.stringify({
                    "message" : "custom message to be sent",
                    "state" : "new" //This is important to map source to consumer
                }),
                DetailType: 'Message',
                EventBusName: 'default',
                Source: 'recordcreated.event',
                Time: new Date
            }
        ]
    }
    const resp = await eventBridge.putEvents(params).promise()
    console.log(resp)
}