Meteor.methods({
  deleteSurvey: function(id){
    Survey.remove({_id:id});
  },
  removeCases:  function (id) {
    // body...
    Cases.remove({_id: id});
  },
  currentUser:  function(){
    return Meteor.userId();
  },
  findCasesOfSurvey:  function (id) {
    // body...
    return Cases.find({"SURVEY_ID": id});

  }
});
