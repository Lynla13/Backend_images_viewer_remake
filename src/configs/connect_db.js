import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'thu_vien_anh',
})

export default pool;

// host: 'localhost',
// user: 'root',
// database: 'nodejs-basic',
//haha