import chai from 'chai';
import { add } from '../src/app';

const should = chai.should()

describe('ADDITION', function () {
    describe('ADD', function () {
        it('should return 4', function () {
            add(1,3).should.equal(4);
        });
    });
});