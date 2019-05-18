import {
    ScriptType,
    url
} from './types';
import jsonLd from './json-ld';
import json from './json';
import loadScript from './load-script';

export {default as jsonLd} from './json-ld';
export {default as json} from './json';

const jsonLdParams = jsonLd.map(data => ({
    url,
    type: ScriptType.jsonLd,
    data
}));
const jsonParams = {
    url,
    type: ScriptType.json,
    data: json
};
const scriptParams = [
    ...jsonLdParams,
    jsonParams
];

scriptParams.forEach(loadScript);
