var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
	getPlayersInfo = function(){
		//fetch some data from github
		getUserInfo.done

	}
};

module.exports helpers;