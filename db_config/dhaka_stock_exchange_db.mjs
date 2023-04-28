import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    // password: "password",
    port: 3306,
    // database: "stock",
    database: "dse_scraped_data",
  },
});

export { pool };

