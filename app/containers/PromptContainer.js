var React = require('react');
var Prompt = require('../components/Prompt.js');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return{
			username: ''
		}
	},
	handleUpdateUser: function(e){
		this.setState({
			username: e.target.value
		});
	},
	handleSubmitUser: function(e){
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});
		if(this.props.routeParams.suggestionBox){
			console.log("context", this.context);
			//go to main page
			this.context.router.push({
				pathname: '/'
			})
		}
		else{
			console.log("context", this.context);
			//go to playerTwo
			this.context.router.push('/' + this.state.username)
		}
	},
	render: function(){
		return (
			<Prompt 
			onSubmitUser={this.handleSubmitUser}
			onUpdateUser={this.handleUpdateUser}
			header={this.props.route.header}
			username={this.state.username}/>
		)
	}
});

module.exports = PromptContainer;