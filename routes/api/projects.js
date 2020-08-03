const express = require('express');
const router = express.Router();

//import data model
const prjItem = require('../../models/Projects.js');

router.get('/', (req, res) => {
    prjItem.find()
    .sort({ date: -1 })
    .then(projectItems => res.json(projectItems));
})

router.post('/', (req, res) => {
    const newProject = new prjItem({
        title: req.body.title,
        displayedDate: req.body.displayedDate,
        description: req.body.description,
        projectURL: req.body.projectURL,
        gitURL: req.body.gitURL,
        picURL: req.body.picURL,
    })

    newProject.save()
    .then(prjItem => res.json({"msg": "Posted successfully!"}));
})

router.put('/:id', (req, res, next) => {
    prjItem.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, post) => {
            if(err) {
                res.json(err);
            } else {
                res.json({"msg": "Updated!"});
            }
        }
    )
})

router.delete('/:id', (req,res) => {
    prjItem.findByIdAndDelete(
        req.params.id,
        (err, post) => {
            if(err) {
                res.json(err)
            } else {
                res.json({"msg": "BYEEEEEEEEEEEE"})
            }
        }
    );
})

module.exports = router;