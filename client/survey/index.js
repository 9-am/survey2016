Template.SurveyList.helpers({
  create: function(){

  },
  rendered: function(){
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();
      $('input[name*=".ID)"]').remove();
    });

  },
  destroyed: function(){

  },
  surveys: function () {
    Meteor.subscribe('SurveyList')
    return Survey.find().fetch();
  },

  selectedSurvey:function () {
    // body...
    // return Survey.findOne({_id: this._id});
  }
});
Template.SurveyList.selectedSurvey = function () {
  // body...
  console.log("#######"+this._id);
  return Session.equals("selected", this._id);
}

Template.SurveyList.events({
  //"click #button": function(){
    //Survey.insert({title: "my first survey", author: "Mohammed Matar", description: "la la"}, function(error, result) {
      //The insert will fail, error will be set,
      //and result will be undefined or false because "copies" is required.
      //
      //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
    //});
  //},
  //"click .survey-to-update": function (e) {
  //   body...
    //e.preventDefault(e);
    //var id = e.currentTarget.name;

    // selectedSurvey(id);
    // console.log("#######"+this._id);
    // Session.set("selectedSurvey", this._id);
    // $('#modal1').openModal();
  //},
  "click #delete-survey": function (e) {
    e.preventDefault(e);
    // Survey.delete({_id: id});
    var id = e.currentTarget.name;
    Meteor.call("deleteSurvey", id);
    Meteor.call("removeCases", id);
    window.alert(id+" is deleted");
  },
  "click #create-survey": function (e) {
    // body...
    $('#modal1').openModal();
    e.preventDefault(e);
  }
});
