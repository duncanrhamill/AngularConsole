var commands = [
            {
                command: 'clear',
                func: function() {
                    setLines([]);
                },
				help: 'Clears the screen'
            },
            {
                command: 'echo',
                func: function(args) {
					var text = args.join(' ');
                    writeLine(text);
                },
				help: 'Prints the given text to the sceen'
            },
			{
				command: 'sum',
				func: function(args) {
					var x;
					var s = 0;
					for (x of args) {
						s += parseFloat(x);
					}
					
					writeLine(s);
				},
				help: 'Adds all given numbers'
			},
			{
				command: 'sub',
				func: function(args) {
					var x;
					var s = 0;
					for (x of args) {
						s -= parseFloat(x);
					}
					
					writeLine(s);
				},
				help: 'Subtracts all given numbers'
			},
			{
				command: 'help',
				func: function(args) {
					var com;
					var comFound = false;
					for (com of commands) {
						if (com.command == args[0]) {
							writeLine(com.help);
							comFound = true;
						}
					}
					
					if(!comFound) {
						writeLine('No command found by that name');
					}
				},
				help: 'Displays help text for a given command'
			},
			{
				command: 'lc',
				func: function(args) {
					
				},
				help: 'unknown'
			},
            {
                command: 'argCount',
                func: function(args) {
                    writeLine(args.length);
                    for (var arg of args)
                    {
                        writeLine(args.indexOf(arg) + ": " + arg);
                    }
                },
                help: ''
            }
        ];
