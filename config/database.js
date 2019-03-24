if(process.env.NODE_ENV == 'production')
{
    module.exports = {
        mongoURI : 'mongodb+srv://darkhorse:darkhorse@appjot-prod-p3tj9.mongodb.net/test?retryWrites=true'
    }
}
else{
    module.exports = {
        mongoURI : 'mongodb://localhost/appjot-dev'
    }
}