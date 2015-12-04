Meteor.startup(function () {
    // Global configurationdf;
    Api = new Restivus({
      version: 'v1',
      useDefaultAuth: true,
      prettyJson: true
    });

//djn
    // Generates: GET/POST on /api/v1/users, and GET/PUT/DELETE on /api/v1/users/:id
    // for Meteor.users collection (works on any Mongo collection)
    Api.addCollection(Meteor.users);
    // That's it! Many more options are available if needed...

    // Maps to: GET /api/v1/survey
    Api.addRoute('survey', {authRequired: false}, {
      get:  {
        action: function () {
          survey = Survey.find({}).fetch();
          if(survey){
            return {status: "success", data: survey};
          }
          return{statusCode: 400, body: {status: "fail", message: "Unable to get survey json"}}
        }
      }
    });
      Api.addRoute('cases', {authRequired:  false}, {
        get:  {
          action: function () {
            cases = Cases.find({}).fetch();
            if(cases){return {status:  "success", data: cases}}
            return {statusCode: 400, body: {status: "fail", message: "Unable to get Cases josn"}}
          }//function
        },//GET
        post: {
          action: function (data) {
            // body...
            // console.log();
               Cases.insert(this.bodyParams);
            return {status: 'success', data: this.bodyParams};
          }
        }
      });
      Api.addRoute('test', {authRequired:    false}, {
        get:  {
          action: function () {
            // body...
            tests = Test.find({}).fetch();
            return {status: 'success', data: tests};
          }
        },
        post: {
          action: function (data) {
            // body...
            Test.insert(this.bodyParams);
            return {status: 'success', data: this.bodyParams};
          }
        }
      });

      //  var currentUserId = this.userId();

  });
