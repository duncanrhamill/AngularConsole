angular.module('conApp', [])
    .controller('conCtrl', function($scope) {
        $scope.currentLine = "";
        
		var lineCounter = 0;
		
        $scope.lines = [
            { id: 0, txt: "Welcome to Console version 0.0.1" }
        ];
        
        setLines = function(newLines) {
			$scope.lines = newLines;
		};
        
        writeLine = function(text) {
            $scope.lines.push({ id: lineCounter++, txt: text });
        };
        
        $scope.enter = function() {
            writeLine("> " + $scope.currentLine);
            
            var list = $scope.currentLine.split(' ');
			
			var flags = [];
			var flagsToRemove = [];
			var start, end;
			for (var arg of list) {
				if (arg.charAt(0) == '"') {
					start = list.indexOf(arg);
				} else if (arg.charAt(0) == '-') {
					flags.push(arg.replace('-', ''));
					flagsToRemove.push(list.indexOf(arg));
				} else if (arg.charAt(arg.length - 1) == '"') {
					end = list.indexOf(arg);
					var quoted = list.slice(start, end + 1);
					var quote = quoted.join(' ');
					quote = quote.replace(new RegExp('"', 'g'), '');
					list.splice(start, end - start + 1, quote);
				} 
			}
			
			for (var i = flagsToRemove.length - 1; i >= 0; i--) {
				list.splice(flagsToRemove[i], 1);
			}
			
			var validCom = false
            for (var com of commands) {
                if (com.command == list[0]) {
                    var args = list.slice(1, list.length + 1);
					
                    com.func(args, flags);
					validCom = true;
                }
            }
			
			if (!validCom) {
				writeLine('Unrecognised command. Use "help -e" for a full list of commands');
			}
			
			
            $scope.currentLine = "";
        };
    });
