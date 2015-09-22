surveyBot.controller('question1', function question1($scope, QuestionsFactory) {
    $scope.question = QuestionsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
});
