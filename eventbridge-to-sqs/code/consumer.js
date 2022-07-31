'use strict'
exports.handler = async (event) => {
    console.log("Yay!! Eventbridge invoked sqs")
    console.log(JSON.stringify(event, 2, null))
}