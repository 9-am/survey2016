/**
 * Created by esdeath on 1/6/16.
 */
Template.chart.onRendered(function(ans){
    Meteor.subscribe('Answers');
    var s = [];
    //$('.')
    var maAnswers = Cases.findOne({"ANSWERS.QUESTION_ID": Template.currentData().ID});
    console.log(maAnswers.LONG+"@->ANS");
    //maAnswers.ANSWERS.forEach(function (answer) {
    //    s.push(answer.QUESTION_ANS);
    //});
    //console.log(s);
    var data = {
        series: [5, 3, 4]
    };

    var sum = function(a, b) { return a + b };

    new Chartist.Pie('.ct-chart', data, {
        labelInterpolationFnc: function(value) {
            return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
    });
});