var request = require('request')
var challengeUrl = "http://letsrevolutionizetesting.com/challenge.json"

getFollowUrl(challengeUrl)

function getFollowUrl(urlToFollow) {
	request({
    url: urlToFollow,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
    	console.log(body)
    	getFollowUrl(body.follow)
    }
})
}
