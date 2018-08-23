import React, { PureComponent } from "react";
import {Link} from 'react-router-dom';

class TagsCloudItem extends PureComponent {
  
  getFontSize = (weight) => {
    const dividedWeight = Math.ceil(weight / 4)
    const fontSize =  dividedWeight >= 100 ? Math.ceil(dividedWeight / 3) : dividedWeight;
    
    return fontSize;
  }
  render() {
    const { label, weight, id } = this.props;
    
    const style = {
      fontSize: this.getFontSize(weight),
    }
    return (
      <Link to={`/home/${id}`}>
        <span style={style}> {label} </span>
      </Link>
    );
  }
}

export default TagsCloudItem;
