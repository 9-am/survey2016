Template.reports.helpers({
    surveys: function () {
        Meteor.subscribe('SurveyList');
        return Survey.find({}).fetch();
    }
    //survey: function () {
    //    Meteor.subscribe('SurveyList');
    //    return Survey.find().fetch();
    //},//survey
    //surveyCases: function (surveyId) {
    //    Meteor.subscribe('CasesList', surveyId);
    //    return Cases.find({SURVEY_ID: surveyId});
    //},
    //caseQuestions: function (surveyId) {
    //    Meteor.subscribe('SurveyList');
    //    questions = Survey.find({_id: surveyId}).fetch();
    //    //forEach(questions as m){console.log(q)};
    //    return questions['QUESTIONS'];
    //},
    //casesAns: function (surveyId, questionId) {
    //    //surveyId = Template.parentData("_id");
    //    Meteor.subscribe("CasesAnsList", questionId);
    //    //console.log(questionId);
    //    return Cases.find({SURVEY_ID: surveyId}, {ANSWERS: {QUESTION_ID: questionId}}).fetch();
    //},
    //Answers: function (surveyId, questionId) {
    //    //surveyId = Template.parentData("_id");
    //    Meteor.subscribe("Answers");
    //    //console.log(questionId);
    //    cases = Cases.find({SURVEY_ID: surveyId}, {ANSWERS: {QUESTION_ID: questionId}}).fetch();
    //    console.log()
    //    cases.forEach(function (myCase) {
    //        console.log(myCase.QUESTION_ID);
    //
    //    })
    //    //console.log(cases+"@#$");
    //    return cases;
    //}
});