var React = require('react');
var PropTypes = React.PropTypes;

function Results(props){
	return(
		<div> Results </div>
	)
}

Results.PropTypes = {
	scores: PropTypes.array.isRequired
}

module.exports = Results;