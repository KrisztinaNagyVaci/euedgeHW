var HRSystem = angular.module('HRSystem', ['ngAnimate', 'ui.bootstrap']);

HRSystem.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/main',
    extendedUrl: 'http://localhost:3000/main/'
  };
});

HRSystem.factory('HRSystemService', function(Config, $http) {
  return {
    getAll: function() {
      return $http.get(Config.baseUrl);
    },
    deleteItem: function(item) {
      return $http.delete(Config.extendedUrl + item);
    },
    addItem: function(newItem) {
      return $http.post(Config.extendedUrl, newItem);
    }
  };
});

HRSystem.controller('AppController', function($scope, $http, $uibModal, HRSystemService) {
  $scope.items = [];
  $scope.elements = [];

  $scope.open = function () {
    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'form.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        elements: function () {
          return $scope.elements;
        }
      }
    });
  modalInstance.result.then(function (newItem){
    $scope.items.push(newItem);
    HRSystemService.addItem(newItem);
  })
}

  $scope.deleteItem = function(item) {
    var index = $scope.items.indexOf(item);
    HRSystemService.deleteItem(item.name).success(function() {
      $scope.items.splice(index, 1);
    });
  };

  HRSystemService.getAll().success(function(data) {
    $scope.items = data;
    $scope.loading = false;
  });
});

HRSystem.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, elements) {
  $scope.elements = elements;

  $scope.ok = function () {
    var newItem = {
        name: $scope.elements.name,
        job: $scope.elements.job,
        age: $scope.elements.age,
        nick: $scope.elements.nickname,
        employee: $scope.elements.employee
      };
    $uibModalInstance.close(newItem);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
