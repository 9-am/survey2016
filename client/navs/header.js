
Template.header.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.header.events({
  "click #dashboard-route": function(event, template){
     Router.go("/admin/dashboard");
  }
});
