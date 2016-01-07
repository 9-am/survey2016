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
<<<<<<< HEAD
=======

>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
  }
});
