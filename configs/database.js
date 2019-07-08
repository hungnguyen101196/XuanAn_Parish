const sql = require('mssql');

const config = {
    user: 'clbkncsh_admin',
    password: '123456a@',
    server: '103.216.113.32', // You can use 'localhost\\instance' to connect to named instance
    database: 'clbkncsh_Clbkncshvtc',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}
 
sql.connect(config, err => {
    if (err) {
        console.log('Connect error!')
    } else {
        console.log('Connect Success!')
    }
})
 
sql.on('error', err => {
    console.log(err)
    // ... error handler
})