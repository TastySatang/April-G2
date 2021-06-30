const express = require('express');
const router = express.Router();
const {csrfProtection, asyncHandler}= require('./utils');
const db =require('../db/models');
const { check, validationResult } = require("express-validator")
const { loginUser, requireAuth } = require("../auth")
const { questionId } =require('./question')


router.get('/questions/:questionId(\\d+)/answer/new', csrfProtection, requireAuth, asyncHandler(async(req, res, next)=> {
    const questionId = req.params.questionId;
    const question = await db.Question.findByPk(questionId);

    res.render('new-answer', {
        title: "Answer-Yoda-Flow",
        csrfToken: req.csrfToken(),
        question
    })

}));

router.post(`/questions/:quesitonId(\\d+)/answer/new`, csrfProtection, asyncHandler(async(req, res)=>{
    const questionId = req.params.questionId;
    const question = await db.Question.findByPk(questionId);


}))

module.exports = router;
