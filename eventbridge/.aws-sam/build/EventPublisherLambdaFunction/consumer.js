'use strict'
exports.handler = async(event) => {
    console.log("--- event received from publisher")
    console.log(JSON.stringify(event,2, null))
}