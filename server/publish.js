/**
 * Created by mohammed on 11/30/15.
 */
Meteor.publish("SurveyList", function () {
    // var currentUserId = this.userId();// AUTHOR: "Mohammed Matar"

    return Survey.find({});
});
//Meteor.publish("SurveyCases", function (surveyId){
//   return Cases.find({SURVEY_ID: surveyId});
//});
Meteor.publish("CasesList", function () {
    return Cases.find();
});
Meteor.publish("CasesAnsList", function (surveyId, questionId) {
   return Cases.find({SURVEY_ID: surveyId, QUESTION_ID: questionId});
});
Meteor.publish("Answers", function (questionId) {
    return Cases.find({"ANSWERS.QUESTION_ID": questionId});
});
Meteor.publish("AnswersLikeCount", function (ans) {
    return Cases.find({"ANSWERS.QUESTION_ANS": ans});
});
Meteor.publish('allSurvey', function () {
    //var currentUserId = this.userId();
    Counts.publish(this, 'totalSurvey', Survey.find({}));//AUTHOR: "Mohammed Matar"
});
Meteor.publish('allCases', function () {
    Counts.publish(this, 'totalCases', Cases.find());
});

// currentUserId = Meteor.userId();
// console.log("before for");
// var userSurvey = Survey.find({"AUTHOR": currentUserId});

// for (var i = 0; i < userSurvey.length; i++) {
// console.log(userSurvey[i].AUTHOR);

// }
