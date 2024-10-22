var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');


var config = require('./config.js');


exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


exports.getToken = (user) => {
    return jwt.sign(user, config.secretKey, 
        {expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts, 
  async function(jwt_payload, done) {
        try { 
    const user = await User.findOne({_id: jwt_payload._id});
    if(user){
        return done(null,user);
    }else{
        return done(null,false);
    }
} 
    catch(err){
        return done(err,false);
    }
}));

exports.verifyUser = passport.authenticate('jwt',{session:false});


exports.verifyAdmin = function(req,res, next){
    User.findOne({_id: req.user._id})
    .then((user)=>{
        console.log("user: ",req.user);
        if(user.admin){
            next();
        }else{
            err = new Error("You are not authorized to perform this operation!");
            err.status = 403;
            return next(err);
        }
    },(err)=> next(err))
    .catch((err)=>next(err));
}