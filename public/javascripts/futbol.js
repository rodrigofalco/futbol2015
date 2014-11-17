var futbolApp = angular.module('futbolApp', []);

futbolApp.controller('futbolDashboardCtrl', function ($scope) {
  $scope.players = [
    {'name': 'Rod Falco',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});