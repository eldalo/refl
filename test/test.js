const expect = require('chai').expect;
const refl = require('..').default;

describe('#refl', function() {
    it('ar', function() {
        const translation = refl('Programar');
        expect(translation).to.equal('Program');
    });

    it('pe', function() {
        const translation = refl('Zorro');
        expect(translation).to.equal('Zorrope');
    });

    it('-', function() {
        const translation = refl('abecedario');
        expect(translation).to.equal('abece-dario');
    });

    it('Mm', function() {
        const translation = refl('sometemos');
        expect(translation).to.equal('SoMeTeMoS');
    });
});