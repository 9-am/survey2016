getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "ar";
};
$(document).ready(function(){
   $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
 });


orion.dashboard.registerWidget({
    template: 'default',
    publication: 'allSurvey',
    count: 'totalSurvey',
    label: 'Survey',
    path: '/survey',
    baseColor: 'orange',
    icon: 'library_books',
    textColor: 'white'
});

orion.dashboard.registerWidget({
    template: 'default',
    publication: 'allCases',
    count: 'totalCases',
    label: 'Reports',
    path: '/reports/',
    baseColor: 'purple',
    icon: 'trending_up',
    textColor: 'white'
});
orion.dashboard.registerWidget({
    template: 'default',
    publication: 'allCases',
    count: 'totalCases',
    label: 'Statistics',
    path: '/statistics/',
    baseColor: 'green',
    icon: 'equalizer',
    textColor: 'white'
});
orion.dashboard.registerWidget({
    template: 'default',
    publication: 'allCases',
    count: 'totalCases',
    label: 'Map',
    path: '/map',
    baseColor: 'red',
    icon: 'my_location',
    textColor: 'white'
});
// orion.links.add('title');
