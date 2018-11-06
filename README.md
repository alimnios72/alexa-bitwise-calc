# alexa-bitwise-calc

## Description
Bitwise calculator skill for Alexa written in Javascript using ES6, the app performs basic bitwise operations on integers. Supported operations are:
- and
- or
- xor
- not
- left shift
- right shift
Since Nodejs doesn't support all ES6 features the app will be compiled down to ES5 so it can be run on AWS Lambda.

## Installation
Just run 
` npm install `

## Local testing
Run `npm run build` and the files will be available in the `lib` folder.

## Deploy to AWS Lambda
Run `npm run deploy` (it first build the app) and there will be zip file in the `dist` folder, upload that file to Labmda.

## Usage
Once the app is deployed and linked to your Alexa skill you can use it by saying commands like:
- ask bitwise calc what is 5 and 8
- ask bitwise calc what is 4 or 2
- ask bitwise calc to left shift 5
- ask bitwise calc to left shift 5 by 2
- ask bitwise calc to give me the logical right shift of -7
- ask bitwise calc to give me the arithmetic right shift of -7
