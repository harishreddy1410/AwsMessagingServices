'use strict'

// The Lambda handler
exports.handler = async (event) => {
  console.log(JSON.stringify(event, 2, null))
  console.log("------- SNS Published message is received -------")
}