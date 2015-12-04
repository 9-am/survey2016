
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
