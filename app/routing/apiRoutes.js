const express = require('express');
const router = express.Router();
const path = require('path');
const friends = require('../data/friends');




//    * A GET route with the url`/api/friends`.This will be used to display a JSON of all possible friends.




//    * A POST routes`/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.
router.post("/friend", function (req, res) {
    console.log(req.body);
    const newFriend = req.body;
    for (var i = 0; i < friends.length; i++) {
        //need to iterate through all survey entries to compare scores
    }

    //need to compare difference in scores 
    res.send("match complete ");
});

module.exports = router; 