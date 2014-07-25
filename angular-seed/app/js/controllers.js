'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('HTTPController', ['$scope', '$http', 'RedTubeService',
    function($scope, $http, RedTubeService) {

    $scope.search = 'Sasha%20Gray';

    $scope.$watch('search', function(data) {
      console.log('watch');
      search(data);
    });

    function search(query){
      var url = 'http://cors-server.getup.io/url/api.redtube.com/?data=redtube.Videos.searchVideos&search='+query;
      // delete $http.defaults.headers.common['X-Requested-With'];
      RedTubeService(url)
      .success(function(data) { //função executada após o sucesso da requisição
        console.log(data);
        $scope.videos = data.videos;})
      .error(function(err){ //função executada após o erro da requisição
        console.log('Error: ', err)
      });
    }


  }])
  .controller('BeerController', ['$scope', function($scope){
    $scope.reverse = true;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicado){
      $scope.reverse = !$scope.reverse;
      $scope.predicate = predicado;
    }
    // criamos um array de cervejas
    var cervejas = [{
      name: 'Kaiser', price: 2
      }, {
        name: 'Skol', price: 3
      }, {
        name: 'Glacial', price: 4
      }, {
        name: 'Polar', price: 6
      }, {
        name: 'Heineken', price: 10
      }
    ];
    // instanciamos nosso array no nosso scope
    // para que tenhamos acesso à esse array na View
    $scope.cervejas = cervejas;
  }]);






