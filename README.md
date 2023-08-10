Run multiple cypress component test projects in parallel with webpack + react.

set the devServer.port property to a free port. You can try using 'auto', but in my testing you can run into race conditions still, where the port 8080 will be free, but when the dev server starts it's already taken by the other project.
