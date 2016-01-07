Survey = new Mongo.Collection("Survey");
Cases  = new Mongo.Collection("Cases");
Test   = new Mongo.Collection("test");
var Schemas = {};
Schemas.Survey = new SimpleSchema({
  TITLE:  {
    type: String,
    label:  "title"
  },
  AUTHOR:       {
    type: String,
    label:  "author"
  },
  DESCRIPTION:  {
    type: String,
    label:  "description",
    optional: true
  },
<<<<<<< HEAD
  EXP_DATE: {
    type: Date,
    label: "EXP Date",
    optional: true
  },
=======
>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
  QUESTIONS:    {
    type: [Object],
    label:  "questions",
    optional: true
  },
  "QUESTIONS.$.ID":       {
    type: String,
    // label:  "id"
    autoValue:  function() {
      // body...
      if (this.isInsert) {
        return Random.id(8);
      }else if (this.isUpsert) {
        return {$setOnInsert: Random.id(8)};
      }else {
        this.unset();  // Prevent user from supplying their own value
      }
    }//function
  },
<<<<<<< HEAD
  "QUESTIONS.$.TEXT":  {
=======
  "QUESTIONS.$.TEXT":     {
>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
    type: String,
    label:  "text"
  },
  "QUESTIONS.$.TYPE":     {
    type: String,
    allowedValues:  ['TEXT', 'CHECK_BOX', 'RADIO', 'DATE'],
    label:  "type",
    autoform: {
      type: "select"
    }
  },
  "QUESTIONS.$.ANSWERS":  {
    type: [String],
  }
});
// ========================
    Schemas.Cases  = new SimpleSchema({
        SURVEY_ID: {type:  String,label: "Survey ID"},
        LONG:      {type:  String},
        LAT:       {type:  String},
<<<<<<< HEAD
        ANSWERS: {type: [Object], optional: true},
=======
        ANSWERS: {type: [Object]},
>>>>>>> b7e6627667f1c529a28f98fc9b6c4633aac88abb
        "ANSWERS.$.QUESTION_ID":    {type:  String, label: "Question ID :"},
        "ANSWERS.$.QUESTION_ANS":   {type:  [String], label: "Question answers : "}
    });
Survey.attachSchema(Schemas.Survey);
Cases.attachSchema(Schemas.Cases);
