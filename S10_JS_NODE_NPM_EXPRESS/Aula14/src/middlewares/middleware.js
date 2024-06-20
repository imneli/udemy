module.exports = (req, res, next) => {
    console.log()
    console.log('passei no midd global')
    console.log()
    
    next();
}