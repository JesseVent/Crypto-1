var mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    Pairs = require("../data/pairs"),
    router = require("express").Router();

router.route("/api/:pairs?").put(updatePairs);


//Form the PROMISE using chunks
const getContent = function(url) {
    // return new pending promise
    return new Promise((resolve, reject) => {
        // select http or https module, depending on reqested url
        const lib = url.startsWith('https') ? require('https') : require('http');
        const request = lib.get(url, (response) => {
            // handle http errors
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }
            // temporary data holder
            const body = [];
            // on every content chunk, push it to the data array
            response.on('data', (chunk) => body.push(chunk));
            // we are done, resolve promise with those joined chunks
            response.on('end', () => resolve(body.join('')));
        });
        // handle connection errors of the request
        request.on('error', (err) => reject(err))
    })
};

//execute the PROMISE
function updatePairs(req, res){
  getContent('https://btc-e.com/api/3/info')
    .then((html) => res.json(html))
    .catch((err) => res.send('There was an error collecting the data from BTCE', err));
}


module.exports = router;
