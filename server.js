var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
 });

/*
Run with Node.js
1. open cmd console
2. cd My Documents\AngularPractice
3. node server.js
*/


// APP_PORT=8000 
// PLAID_CLIENT_ID=['59b6dad34e95b8200d0623ba'] 
// PLAID_SECRET=['105be044dd22c79a385813342d68d9'] 
// PLAID_PUBLIC_KEY=['8d2f8eac7041f5cd1198bdb18df887'] 
// PLAID_ENV='sandbox' 
// node index.js
//# Go to http://localhost:8000

