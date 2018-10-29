import { BitwiseCalculator } from './calc';
const ans = BitwiseCalculator.or(5, 8);

export const AndHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'andIntent';
    },
    handle(handlerInput) {
        const { requestEnvelope, responseBuilder } = handlerInput;
        // const { intent } = requestEnvelope.request;
        // const tvStatus = intent.slots.tvStatus;
        // let speechText;
    

      handlerInput.context.succeed();
      return responseBuilder
        .speak('Welcome to Decision Tree. I will recommend the best job for you. Do you want to start your career or be a couch potato?')
        .getResponse();
    },
  };
