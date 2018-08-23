import React, { Component } from "react";
import { data } from "../data";
import TagInfo from '../components/TagInfo';
class TagContainer extends Component {
  render() {
    const id = this.props.match.params.id;
    const tag = data.find(item => item.id === id);
    const totalMentions = (tag.sentiment.positive || 0) + (tag.sentiment.negative || 0) + (tag.sentiment.neutral || 0);
    
    return (
      <TagInfo 
      label={tag.label}
      totalMentions={totalMentions}
      positive={tag.sentiment.positive}
      neutral={tag.sentiment.neutral}
      negative={tag.sentiment.negative}
      pageType ={tag.pageType}
      />
    );
  }
}

export default TagContainer;
