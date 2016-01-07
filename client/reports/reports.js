<<<<<<< HEAD
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
=======

Template.reports.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  surveys:  function() {
    // body...
    return Survey.find({}).fetch();
  },
  cases:   function () {
    // body...
    // var myarr = [], s = [], q = [], t = [];
    // var cases = Cases.find({SURVEY_ID: id}).fetch();
    // for (var casea in cases) {
      // var survey = Survey.findOne({"_id": casea.SURVEY_ID});
      //  t.push(survey.TITLE);
      //  q.push(survey.)
    // }
    return Cases.find().count();
  }
});

Template.reports.events({
  "click #print": function(event, template){
    event.preventDefault(event);
     window.print();
  }
});
>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
