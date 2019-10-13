import assert    from 'assert';
import React     from 'react';
import Header    from '../../src/components/header';
import { mount } from 'enzyme';


describe('<Header/>', function() {
  let wrapper;

  before(function renderWrapper() {
    wrapper = mount(<Header siteTitle="Timeline" />);
  });

  it('should render a header element', function() {
    const actual   = wrapper.find('header').length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  describe('site title', function() {
    it('should link to the root', function() {
      const actual   = wrapper.find('h1 a[href="/"]').length;
      const expected = 1;
  
      assert.equal(actual, expected);
    });

    it('should have a site title', function() {
      const actual   = wrapper.find('h1 a[href="/"]').at(0).text();
      const expected = 'Timeline';
  
      assert.equal(actual, expected);
    });
  });

  describe('about', function() {
    it('should link to the root', function() {
      const actual   = wrapper.find('a[href="/about"]').length;
      const expected = 1;
  
      assert.equal(actual, expected);
    });

    it('should have a site title', function() {
      const actual   = wrapper.find('a[href="/about"]').at(0).text();
      const expected = 'About';
  
      assert.equal(actual, expected);
    });
  });

  after(() => wrapper.unmount());
})