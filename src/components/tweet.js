import React                 from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';


export default function Tweet({ id }) {
  return (<TwitterTweetEmbed  tweetId={id} />);
}
