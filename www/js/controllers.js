angular.module('starter.controllers', ['ui.router'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state, $ionicSideMenuDelegate,$ionicPopover,$ionicSlideBoxDelegate,$ionicScrollDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.zoomMin = 1;
  $scope.guidelinesImageSrc = 'img/image1.png';
 
  $scope.groups = [];
  $scope.groups = [
        { name: 'General Guidelines',
          items : [],
          url   : "anubis-guidelines.html",
          show: false
        },
        { name: 'Complete Part I and II',
          items : [ 
                    {item_name  : 'Part I', url:"anubis-part1.html"},
                    {item_name  : 'Part II', url:"anubis-part2.html"}
                  ],
          show: false
        },
        { name  : 'Examples',
          items :  [
                        {item_name  : '48-year-old Male with Cramping', url :"anubis-examples-ch1.html" },
                        {item_name  : '68-year-old Male with Progressive Lower Quadrant Pain', url : "anubis-examples-ch2.html"},
                        {item_name  : '75-year-old Male Complaining of Severe Chest Pain', url : "anubis-examples-ch3.html"},
                        {item_name  : '68-year-old Female with dyspnea and Moderate Retrosternal Pain', url : "anubis-examples-ch4.html"},
                        {item_name  : '78-year-old Female with Temperature of 102.6F', url : "anubis-examples-ch5.html"},
                        {item_name  : '34-year-old Male with Severe Shortness of Breath', url : "anubis-examples-ch6.html"},
                        {item_name  : '75-year-old Male with History of Chronic Bronchitis', url : "anubis-examples-ch7.html"},
                        {item_name  : '75-year-old Female with History of Diabetes Mellitus, Hypertension, and Myocardial Ingfraction', url : "anubis-examples-ch8.html"},
                        {item_name  : '53-year-old Male with Intermittent Midpigastric, and Left-Sided Chest Pain', url : "anubis-examples-ch9.html"},
                        {item_name  : '1480-gram Male Infant at 32 Weeks Gestation to a 20-year-old Primiparious Woman', url : "anubis-examples-ch10.html"},
                        {item_name  : '30-year-old garvida-six, para-five, with a History of Gestational Hypertension', url : "anubis-examples-ch11.html"},
                        {item_name  : '92-year-old Male Found Dead', url : "anubis-examples-ch12.html"},
                        {item_name  : '102-yeal-old Female with Sudden Onset of Speec Abnormality', url : "anubis-examples-ch13.html"}
                    ],
          show: false
        },
        { name  : 'Common Problems',
          items : [
                  {item_name  : 'Uncertainty', url :"anubis-problems-uncertainty.html" },
                  {item_name  : 'Advanced Age', url :"anubis-problems-advancedage.html" },
                  {item_name  : 'Infants', url :"anubis-problems-infants.html" },
                  {item_name  : 'Complex Situations', url :"anubis-problems-complexsituations.html" },
          ],
          show: false
        },
        { name  : 'Additional Resources',
          items : [],
          url   : 'anubis-additionalresources.html',
          show: false
        }
   ] 

   $scope.showAboutUs = function() {
      $state.go('app.aboutus');
   }
  $scope.toggleGroup = function(group) {
    
    if (group.items.length == 0) {
        $location.path("/app/sidemenu/"+group.url);
      //  $state.go('app.sidemenu', {'menuItemUrl' : group.url});

    }
    group.show = !group.show;
  };

  $scope.isGroupShown = function(group) {
    return group.show;
  };


// image modal
$scope.showImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/sidemenu/img-modal-zoom.html');
};

$scope.showModal = function(templateUrl) {
  $ionicModal.fromTemplateUrl(templateUrl, {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });
}
  $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      //console.log('Modal is shown!');
    });


//pop over menu

$ionicPopover.fromTemplateUrl('templates/popover-menu.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.showPopOverMenu = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

 

})
.controller('HomeCtrl', function($scope) {  
})
.controller('AboutUsCtrl', function($scope) {  
})
.controller('SideMenuCtrl', function($scope) {
})
.controller('GeneralCtrl', function($scope) {
});

