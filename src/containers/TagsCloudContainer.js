import React, { Component } from "react";
import { data } from "../data";
import TagsCloudItem from "../components/TagsCloudItem";

class TagsCloudContainer extends Component {
  render() {
    console.info("The data is:", data);
    return (
      <ul className="cloud">
        {Object.keys(data).map(item => (
          <li>
            <TagsCloudItem
              key={data[item].id}
              id={data[item].id}
              label={data[item].label}
              weight={data[item].sentimentScore}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default TagsCloudContainer;
