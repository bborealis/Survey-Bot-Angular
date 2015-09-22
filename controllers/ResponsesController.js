surveyBot.controller('ResponsesCtrl',function ResponsesCtrl($scope,ResponsesFactory) {
  $scope.responses = ResponsesFactory.responses;
  $scope.ResponsesFactory = ResponsesFactory;
});
