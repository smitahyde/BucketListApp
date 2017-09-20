var Auth = require('./controllers/auth'); //include the authorization controller
var passportService = require('./services/passport');
var passport = require('passport');
var User = require('./models/user'); //include the user model
var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local',{session: false});

module.exports = function(app){  //sets routes
	
	app.get('/', requireAuth, function(req, res){
		 res.send('Hello Homepage');
		 //res.send({hi: 'there'});
	});
	
	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);

}

//module.exports = function(app){ 
	//app.get('/', function(req, res, next) {
		//res.send("HELLO HOMEPAGE");
	//});

	//app.get('/signup', function(req, res, next){
		//res.send("Hey folks, Thanks for signing up!");
	//});

//}	