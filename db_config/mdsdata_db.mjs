import mysql from "serverless-mysql";

const pool_1 = mysql({
  config: {
    host: "localhost",
    user: "root",
    // password: "password",
    port: 3306,
    database: "mdsdata",
  },
});

export { pool_1 };

