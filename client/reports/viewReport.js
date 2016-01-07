Template.viewReport.onRendered(function () {

});
Template.viewReport.helpers({
    answers: function (questionId) {
        Meteor.subscribe('Answers');
        answers = Cases.find({"ANSWERS.QUESTION_ID": questionId});
        return answers;
         //Print the titles of the five top-scoring posts
    },
    answersLike: function ( ans) {
        //console.log(ans+"@@@@"+questionId);
        Meteor.subscribe("AnswersLikeCount", ans);
        return Cases.find({"ANSWERS.QUESTION_ANS": ans}).count();
    },
    answerPre: function (parent){
        //var casesCount = Cases.find({});
        console.log(Template.parentData(1).SURVEY_ID+"!@!");
        //console.log(Template.currentData()+"0_0");
    },
    totalAnsr: function (questionId) {
        console.log(questionId);
    }
});