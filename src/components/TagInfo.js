import React, {PureComponent} from "react";

class TagInfo extends PureComponent {

	render() {
		const {label, totalMentions, positive, neutral, negative, pageType} = this.props;

		return (
			<div className="tag_page">
				<div className="title">{label}</div>
				<div>Total mentions: {totalMentions}</div>
				<div>Positive mentions: {positive || 0}</div>
				<div>Neutral mentions: {neutral || 0}</div>
				<div>Negative mentions: {negative || 0}</div>
				<div>Pages where did voices left:</div>
				<ul>
					{Object.keys(pageType).map(type => (
						<li key={type}>{type}:{pageType[type]}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TagInfo;
