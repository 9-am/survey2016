

Template.reports.helpers({
  create: function(){

  },
  rendered: function(){
    TEST_DATE =  function(args){
      if(args <= moment(new Date)){
        console.log("mo################################################!@@@@@@@@@@@@@@@@@@@@");
        return true;
      }else{
        return false;
      }//else
    };
  },
  destroyed: function(){

  },
  surveys:  function() {
    // body...
    return    Survey.find({}).fetch();
  },
  //TEST_DATE: function(args){
  //  if(args <= moment(new Date)){
  //    console.log("mo################################################!@@@@@@@@@@@@@@@@@@@@");
  //    return true;
  //  }else{
  //    return false;
  //  }//else
  //},
  casesD: function(){
    return Cases.findOne({ SURVEY_ID: survey_id }).fetch();
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
