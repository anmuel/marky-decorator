import { expect } from 'chai';
import measure from '../src';
import * as marky from 'marky';

class C {
  @measure()
  testFn() {
    for (let i=0; i<2000000; i++) {
      // do something
    }
    return true;
  }
}

describe('@measure()', () => {

  it('calls the original method an measures its performance', () => {
    const c = new C();
    expect(c.testFn()).to.be.true;
    const entries = marky.getEntries();
    expect(entries).to.have.lengthOf(1);
    expect(entries[0].name).to.eq('testFn');
  });
});
