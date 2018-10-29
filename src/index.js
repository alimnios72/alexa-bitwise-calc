import { SkillBuilders } from 'ask-sdk-core';
import { ErrorHandler } from './errorHandler';
import { AndHandler } from './andHandler';
import { OrHandler } from './orHandler';
import { XorHandler } from './xorHandler';

const skillBuilder = SkillBuilders.custom();

export const handler = skillBuilder
.addRequestHandlers(
    AndHandler,
    OrHandler,
    XorHandler
)
.addErrorHandlers(ErrorHandler)
.lambda();
