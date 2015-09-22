surveyBot.controller('ResponsesCtrl',function ResponsesCtrl($scope,QuestionsFactory) {
  // $scope.students = StudentsFactory.students;
  // $scope.addStudentWithPermissionSlip = function(student) {
  //   student.permissionSlip = true;
  //};
  $scope.QuestionsFactory = QuestionsFactory;
});
