surveyBot.factory("QuestionsFactory", function QuestionsFactory() {
  var factory = {};
  factory.responses = [];

  factory.addResponse = function() {
    var response = { answer: factory.responseString };
    factory.responses.push(response);
    factory.responseString = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index,1);
  };
  return factory;
});
