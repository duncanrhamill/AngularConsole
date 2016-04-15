angular.module('conApp', [])
    .controller('conCtrl', function($scope) {
        $scope.currentLine = "";
        
        $scope.lines = [
            "Welcome to Console version 0.0.1"
        ];
        
        var lines = $scope.lines;
        
        writeLine = function(text) {
            $scope.lines.push(text);
        };
        
        $scope.enter = function() {
            writeLine($scope.currentLine);
            
            var list = $scope.currentLine.split(' ');
            
            lines = $scope.lines;
            
            var com;
            for (com of commands) {
                if (com.command == list[0]) {
                    var text = list.slice(1, list.length + 1);
                    com.func(text.join(' '));
                }
            }
            
            $scope.currentLine = "";
        };
    });