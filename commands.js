var commands = [
            {
                command: 'clear',
                func: function(args, flags) {
                    setLines([]);
                },
				help: 'Clears the screen'
            },
            {
                command: 'echo',
                func: function(args, flags) {
					var text = args.join(' ');
                    writeLine(text);
                },
				help: 'Prints the given text to the sceen'
            },
			{
				command: 'sum',
				func: function(args, flags) {
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
				func: function(args, flags) {
					var x, s;
					
					if (flags.indexOf('z') > -1) {
						s = 0;
					} else {
						s = 2 * parseFloat(args[0]);
					}

					for (x of args) {
						s -= parseFloat(x);
					}
					
					writeLine(s);
				},
				help: 'Subtracts all given numbers starting from the first number',
				flags: [
					{flag: 'z', desc: 'Subtract starting from zero'}
				]
			},
			{
				command: 'help',
				func: function(args, flags) {
					if (args.length == 0) {
						if (flags.indexOf('e') > -1) {
							for (var com of commands) {
								writeLine(com.command + ': ' + com.help);
							}
						} else {
							for (var com of commands) {
								writeLine(com.command);
							}
						}
						return;
					}
					
					var comFound = false;
					for (var com of commands) {
						if (com.command == args[0]) {
							writeLine(com.help);
							
							if (com.flags != null && flags.indexOf('f') > -1) {
								writeLine('Flags: ');
								for (var f of com.flags) {
									writeLine(f.flag + ': ' + f.desc);
								}
							}
							comFound = true;
						}
					}
					
					if(!comFound) {
						writeLine('No command found by that name');
					}
				},
				help: 'Displays help text for a given command',
				flags: [
					{flag: 'e', desc: 'Show help text for all commands, should not provide a specific command'},
					{flag: 'f', desc: 'List flags for given command'}
				]
			},
			{
				command: 'lc',
<<<<<<< HEAD
				func: function(args) {
					switch(loadNewCommand(args[0])) {
						case -1:
							writeLine("No file found at that path");
							break;
						case 0:
							writeLine("File does not contain a command object");
							break;
						case 1:
							writeLine("Command succesfully added");
							break;
					}
				},
				help: 'unknown'
=======
				func: function(args, flags) {
					
				},
				help: 'Loads a new command from the given file'
			},
            {
                command: 'argList',
                func: function(args, flags) {
                    writeLine(args.length + ' arguments given:');
                    for (var arg of args)
                    {
                        writeLine(args.indexOf(arg) + ": " + arg);
                    }
                },
                help: 'Lists the arguments provided to it'
            },
			{
				command: 'flagList',
                func: function(args, flags) {
                    writeLine(flags.length + ' flags given:');
                    for (var flag of flags)
                    {
                        writeLine(flags.indexOf(flag) + ": " + flag);
                    }
                },
                help: 'Lists the flags provided to it'
>>>>>>> origin/master
			}
        ];
