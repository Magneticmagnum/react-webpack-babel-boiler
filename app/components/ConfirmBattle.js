var React = require('react');
var propTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke (object){
	return <pre>{JSON.stringify(object, null, ' ')} </pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>LOADING</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm8 col-sm-offset-2'>
        	<div className='col-sm-6'>
        		<UserDetailsWrapper header="Player One">
        			<UserDetails info={props.playersInfo[0]}/>
        		</UserDetailsWrapper>
        	</div>
        	<div className='col-sm-6'>
        		<UserDetailsWrapper header="Player Two">
        			<UserDetails info={props.playersInfo[1]}/>
        		</UserDetailsWrapper>
        	</div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
        	<div className='col-sm-12' style={styles.space}>
        		<button style={styles.space} type="button" className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
        			Initiate Battle! 
        		</button>
        	</div>
        	<div className='col-sm-12' style={styles.space}>
        		<Link to='/playerOne'>
        			<button  style={styles.space} type="button" className='btn btn-lg btn-success'> 
        				Reselect Players
        			</button>
        		</Link>
        	</div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
	isLoading: propTypes.bool.isRequired,
	playersInfo: propTypes.array.isRequired,
	onInitiateBattle: propTypes.func.isRequired

}

module.exports = ConfirmBattle;