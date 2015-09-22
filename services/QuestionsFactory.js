surbeyBot.factory("QuestionsFactory", function QuestionsFactory() {
  var factory = {};
  factory.questions = [];

  factory.addQuestion = function() {
    var student = { name: factory.studentName, permissionSlip: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index,1);
  };
  return factory;
});
