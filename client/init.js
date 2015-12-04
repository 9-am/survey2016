//AutoForm.hooks({
//    contactForm: {
//        onSubmit: function (insertDoc, updateDoc, currentDoc) {
//            if (customHandler(insertDoc)) {
//                this.done();
//                window.alert("Done !");
//            } else {
//                this.done(new Error("Submission failed"));
//                window.alert("nop!");
//            }
//            return false;
//        }
//    }
//});

//########################

var supportedAnswers = ['text','multiple-choice', 'checkboxes', 'date', 'time'];
Session.set("selectedForm", "check");
