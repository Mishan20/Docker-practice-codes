import mysql from "mysql2";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_m_system",
  port: 3306,
});

con.connect(function (err) {
  if (err) {
    console.error("Connection error:", err.message);
  } else {
    console.log("Database Connected");
  }
});

export default con;
