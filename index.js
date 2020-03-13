#! /usr/bin/env node

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine.question(`What would you like to log today?`, item => {
    console.log(item);
    readLine.close();
})