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
  this.render("header", {to: "header"});
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
});
//Router.route("/reports/:survey", {name: "detailedReport",data: function(){var v = Cases.findOne({SURVEY_ID: this.params._id}); return v;}}, function(){
//  this.layout("MainLayout");
//  this.render("header", {to: "header"});
//  this.render("sidebar", {to: "aside"});
//  this.render("detailedReport");
//  this.render("footer", {to: "footer"});
//});
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
