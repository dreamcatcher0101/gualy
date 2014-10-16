// Name        : home.js
// Author(s)   : Cerek Hillen
// Date Created: 10/14/2014
// Date Changed: 10/16/2014
//
// Description:
//   The route definitions for the homepage.

//////////
// Code //

// Getting the homepage.
function get(req, res) {
    res.render('home.jade', function (err, html) {
        if (err)
            throw err;
        res.status(200);
        res.type('html');
        res.send(html);
    });
}

/////////////
// Exports //
module.exports.get = get;
