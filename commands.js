var commands = [
            {
                command: 'clear',
                func: function() {
                    lines = [];
                }
            },
            {
                command: 'echo',
                func: function(text) {
                    writeLine(text);
                }
            }
        ];