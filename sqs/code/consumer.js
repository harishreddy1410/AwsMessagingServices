'use strict'
exports.handler = async (event) => {
    console.log(JSON.stringify(event, 2, null))
    console.log('------ consumer received the message from publisher -------------');
}