surveyBot.factory("ResponsesFactory", function ResponsesFactory() {
  var factory = {};
  factory.responses = [];

  factory.addResponse = function() {
    var response = [{ answer: factory.responseString1 },{ answer: factory.responseString2 }];
    console.log(response);
    factory.responses.push(response);
    factory.responseString = null;
    console.log(factory.responses);

  };

  // factory.deleteStudent = function(student) {
  //   var index = factory.students.indexOf(student);
  //   factory.students.splice(index,1);
  // };
  return factory;
});
