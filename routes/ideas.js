const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Idea');

const Idea = mongoose.model('ideas');


router.get('/add',(req,res)=>{
    res.render('ideas/add');
});

router.get('/edit/:id',(req,res)=>{
    Idea.findOne({
        _id : req.params.id
    })
    .then(idea => {
        res.render('ideas/edit', {
            idea : idea
        });
    });
});

router.get('/',(req,res)=>{
    Idea.find({})
        .sort({date : 'desc'})
        .then(ideas => {
            res.render('ideas/index',{
                ideas : ideas
            });
        });
});

router.post('/',(req,res)=>{
    let errors = [];

    if(!req.body.title){
        errors.push({text : 'Please add a Title for your application idea!'});
    }
    if(!req.body.details){
        errors.push({text : 'Please add some Details corresponding to the  application idea!'});
    }
    if(errors.length>0)
    {
        res.render('ideas/add',{
            errors : errors,
            title : req.body.title,
            details : req.body.details
        });
    }
    else{
        const newUser = {
            title : req.body.title,
            details : req.body.details
        }
        new Idea(newUser)
            .save()
            .then(idea => {
                req.flash('success_msg','Application Idea Added');
                res.redirect('/ideas');
            })
    }
});

router.put('/:id', (req,res) =>{
    Idea.findOne({
        _id : req.params.id
    })
    .then(idea => {
        idea.title = req.body.title;
        idea.details = req.body.details;

        idea.save()
            .then(idea => {
                req.flash('success_msg','Application Idea Edited');
                res.redirect('/ideas');
            })
    });
});

router.delete('/:id', (req,res) => {
    Idea.remove({ _id : req.params.id})
    .then(() => {
        req.flash('success_msg','Application Idea Removed');
        res.redirect('/ideas');
    });
});

module.exports = router;