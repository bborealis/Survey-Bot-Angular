surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {

    $scope.questions = ["What color are your eyes?","What color is your hair?"]

    //$scope.questionOne = "What color are your eyes? ";
    //$scope.questionTwo = "What color is your hair?";
    $scope.QuestionsFactory = QuestionsFactory;
});
