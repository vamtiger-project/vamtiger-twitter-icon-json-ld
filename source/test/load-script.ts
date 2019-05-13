import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtigerr-twitter-icon-json-ld', function () {
    before(async function () {
        await loadScript({
            src: 'vamtigerr-twitter-icon-json-ld.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtigerr-twitter-icon-json-ld.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});