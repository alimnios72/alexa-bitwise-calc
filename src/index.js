import { SkillBuilders } from 'ask-sdk-core';
import { ErrorHandler } from './errorHandler';
import { ShiftHandler } from './shiftHandler';
import { AndHandler } from './andHandler';

const skillBuilder = SkillBuilders.custom();

export const handler = skillBuilder
.addRequestHandlers(
    AndHandler,
    ShiftHandler,
)
.addErrorHandlers(ErrorHandler)
.lambda();
