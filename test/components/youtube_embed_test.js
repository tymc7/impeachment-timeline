import assert       from 'assert';
import React        from 'react';
import YoutubeEmbed from '../../src/components/youtube_embed';
import { shallow }  from 'enzyme';


describe('<YoutubeEmbed/>', function() {
  let wrapper;

  before(function renderWrapper() {
    wrapper = shallow(<YoutubeEmbed id="123456" />);
  });

  it('should render a an image thumbnail', function() {
    const actual   = wrapper.find('img[src="http://i3.ytimg.com/vi/123456/maxresdefault.jpg"]').length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  describe('click image', function() {
    
    before(function clickImage() {
      wrapper.find('img[src="http://i3.ytimg.com/vi/123456/maxresdefault.jpg"]').simulate('click');
    });

    it('should render the iframe of the video', function() {
      wrapper.find('iframe[src="https://www.youtube-nocookie.com/embed/123456?autoplay=1&"]')
    });
  })
})