import mysql from 'mysql2'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "15378",
    database: "student_m_system",
    port: 3306,
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Database Connected")
    }
})



export default con;

