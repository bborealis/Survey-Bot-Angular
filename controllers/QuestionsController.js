surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, ResponsesFactory) {

    $scope.questions = ["What color are your eyes?","What color is your hair?"]
    $scope.responses = ResponsesFactory.responses;

    //$scope.questionOne = "What color are your eyes? ";
    //$scope.questionTwo = "What color is your hair?";
    $scope.ResponsesFactory = ResponsesFactory;
});
