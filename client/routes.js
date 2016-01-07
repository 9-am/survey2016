Router.configure({
  layoutTemplate: 'MainLayout',
  yieldTemplates: {
    'header':   {to: 'header'},
    'sidebar':  {to: 'aside'},
    'footer':   {to: 'footer'}
  }
});
Router.route("/", function(){
  this.layout("MainLayout");
<<<<<<< HEAD
  //this.render("header", {to: "header"});
=======
  this.render("header", {to: "header"});
>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
  this.render("sidebar", {to: "aside"});
  this.render("main");
  this.render("footer", {to: "footer"});
});
Router.route("/map", function(){
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("map");
  this.render("footer", {to: "footer"});
});

Router.route("/survey", function(){
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("SurveyList");
  this.render("footer", {to: "footer"});
});
Router.route("/statistics", function(){
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("statistics");
  this.render("footer", {to: "footer"});
});
Router.route("/reports", function(){
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("reports");
  this.render("footer", {to: "footer"});
<<<<<<< HEAD
},{data: function () {
  return Survey.find({});}
});
Router.route("/reports/:id", function(){
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("viewReport");
  this.render("footer", {to: "footer"});
},{data: function () {
  return Survey.findOne({_id: this.params.id});}
});
Router.route("/survey/:id",function () {
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("viewSurvey");
  this.render("footer", {to: "footer"});

},{data: function () {
  return Survey.findOne({_id: this.params.id});}
});
//Router.route("/reports/:survey", {name: "detailedReport",data: function(){var v = Cases.findOne({SURVEY_ID: this.params._id}); return v;}}, function(){
//  this.layout("MainLayout");
//  this.render("header", {to: "header"});
//  this.render("sidebar", {to: "aside"});
//  this.render("detailedReport");
//  this.render("footer", {to: "footer"});
//});
=======
});
>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
Router.route("/testcases", function(){
  this.layout("MainLayout");
  this.render("header", {to: "header"});
  this.render("sidebar", {to: "aside"});
  this.render("testcases");
  this.render("footer", {to: "footer"});
});

// Router.map(function(){
  // this.route('SurveyList', {path:'/survey'});
// });
