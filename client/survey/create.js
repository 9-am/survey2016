/**
 * Created by mohammed on 11/30/15.
 */
Template.SurveyCreate.events({
    "change select": function(event){
        event.preventDefault();
        var selectedForm = event.target.valueOf();
        console.log(selectedForm);
    }

});
Template.SurveyCreate.rendered = function (){
    $(document).ready(function(){
        jQuery( "[name*='.ID']" ).remove();
    });
};
// Template.SurveyCreate.helpers({
//     radioForm: function (){
//         if(Session.get("selectedForm") === "radio") {
//             Session.set("checkForm", false);
//             Session.set("dateForm", false);
//             Session.set("rangeForm", false);
//             Session.set("textForm", false);
//             Session.set("radioForm", true);
//             return true
//         };
//         return false;
//     },
//     checkForm: function(){
//         if(Session.get("selectedForm") === "check") {
//             Session.set("checkForm", true);
//             Session.set("dateForm", false);
//             Session.set("rangeForm", false);
//             Session.set("textForm", false);
//             Session.set("radioForm", false);
//             return true
//         };
//         return false;
//     },
//     dateForm: function(){
//         if(Session.get("selectedForm") === "date") {
//             Session.set("checkForm", false);
//             Session.set("dateForm", true);
//             Session.set("rangeForm", false);
//             Session.set("textForm", false);
//             Session.set("radioForm", false);
//             return true
//         };
//         return false;
//     },
//     rangeForm: function(){
//         if(Session.get("selectedForm") === "range") {
//             Session.set("checkForm", false);
//             Session.set("dateForm", false);
//             Session.set("rangeForm", true);
//             Session.set("textForm", false);
//             Session.set("radioForm", false);
//             return true
//         };
//         return false;
//     },
//     textForm: function(){
//         if(Session.get("selectedForm") === "text") {
//             Session.set("checkForm", false);
//             Session.set("dateForm", false);
//             Session.set("rangeForm", false);
//             Session.set("textForm", true);
//             Session.set("radioForm", false);
//             return true
//         };
//         return false;
//     }
// });
