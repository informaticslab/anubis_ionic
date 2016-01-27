angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.groups = [];
  $scope.groups = [
        { name: 'General',
          items : [],
          show: false
        },
        { name: 'Complete Part I and II',
          items : [ 
                    {item_name  : 'Part I' },
                    {item_name  : 'Part II'}
                  ],
          show: false
        },
        { name  : 'Examples',
          items :  [],
          show: false
        },
        { name  : 'Common Problems',
          items : [],
          show: false
        },
        { name  : 'Additional Resources',
          items : [],
          show: false
        }
   ] 

  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };



});

.controller('HomeCtrl', function($scope){
  
})