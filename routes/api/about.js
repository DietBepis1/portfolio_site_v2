const express = require('express');
const router = express.Router();

//import data model
const About = require('../../models/About.js');

//@route:  GET api/about
//@desc:   Get the about document from Mongo
//@access: Not accessible by site users
router.get('/', (req,res) => {
    About.find()
    .then(about => res.json(about))
});

//@route:  POST api/about
//@desc:   Post to the about document from Mongo
//@access: Not accessible by site users
router.post('/', (req,res) => {
    const newAbout = new About({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        school: req.body.school,
        tech: req.body.tech,
        picture: req.body.picture
    })

    newAbout.save().then(res.json({ "msg": "Posted sucessfully!" }))
});

//@route:  PUT api/about
//@desc:   Make a change to the about document from Mongo
//@access: Not accessible by site users
router.put('/:id', (req,res) => {
    About.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, post) => {
            if(err) {
                res.json(err)
            } else {
                res.json({ "msg": "Updated sucessfully!" })
            }
        }
    )
})

//@route:  PUT api/about
//@desc:   Make a change to the about document from Mongo
//@access: Not accessible by site users
router.delete('/:id', (req,res) => {
    About.findByIdAndDelete(
        req.params.id,
        (err, post) => {
            if(err) {
                res.json(err)
            } else {
                res.json({ "msg": "Delet dis naow." })
            }
        }
    )
})

module.exports = router;