import assert       from 'assert';
import React        from 'react';
import BuyMeACoffee from '../../src/components/buy_me_a_coffee';
import { shallow }  from 'enzyme';


describe('<BuyMeACoffee/>', function() {
  let wrapper;

  before(function renderWrapper() {
    wrapper = shallow(<BuyMeACoffee />);
  });

  it('should contain stylesheet link to the "Cookie" font', function() {
    const actual   = wrapper.find('link[href="https://fonts.googleapis.com/css?family=Cookie"]').length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('should contain a link to buymeacoffee.com', function() {
    const actual   = wrapper.find('a[href="https://www.buymeacoffee.com/tymcsilva"]').length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('should contain an image for buymeacoffee.com', function() {
    const actual   = wrapper.find('a[href="https://www.buymeacoffee.com/tymcsilva"] img').length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('should contain a text that says "Buy me a coffee" ', function() {
    const actual   = wrapper.find('a[href="https://www.buymeacoffee.com/tymcsilva"] span').text();
    const expected = 'Buy me a coffee';

    assert.equal(actual, expected);
  });
})