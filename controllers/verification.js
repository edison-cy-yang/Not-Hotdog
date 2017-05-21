module.exports = (req, res) => {
    var hubChallenge = req.query['hub.challenge'];

    var hubMode = req.query['hub.mode'];
    var verifyTokenMatches = (req.query['hub.verify_token'] === 'edi is cool');

    if(hubMode && verifyTokenMatches) {
        res.status(200).send(hubChallenge);
        console.log("Test");
    }
    else {
        res.status(403).end();
    } 
}