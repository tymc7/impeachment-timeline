import React        from 'react';
import { useState } from 'react';


export default function YoutubeEmbed({ id, query }) {
  const [ showVideo, setShowVideo ] = useState(false);
  return (
    <React.Fragment>
      {showVideo && (
        <iframe width="100%" height="260px" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&${query}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
      )}
      {!showVideo && (
        <img
          src={`http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
          style={{ width: '100%', cursor: 'pointer' }}
          onClick={() => setShowVideo(true)}/>
      )}
    </React.Fragment>
  );
}

