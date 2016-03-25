var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function (){
		return{
			isLoading: true,
			playersInfo: []
		}
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		//Fetch info from github then update state
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(players){
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},
	componentWillMount: function(){
		console.log("componentWillMount");
	},
	componentWillReceiveProps: function(){
		console.log("componentWillReceiveProps");
	},
	componentWillUnmount: function(){
		console.log("componentWillUnmount");
	},
	handleInitiateBattle: function(){
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	},

	render: function(){
		return (
			<div>
				<ConfirmBattle 
				isLoading={this.state.isLoading} 
				playersInfo={this.state.playersInfo} 
				onInitiateBattle={this.handleInitiateBattle}/>
			</div>
		);
	}
});

module.exports = ConfirmBattleContainer;