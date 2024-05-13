// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  password: "mysecretpassword",
  user: "postgres",
});

// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }

// createUsersTable();

// const insertData = async () => {
//   try {
//     await client.connect();
//     const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
//     const values = ["sanjakjhdsf", "lkjfskdhfs", "lshfkejdfkshfd"];
//     const response = await client.query(insertQuery, values);
//     console.log("insertion success", response);
//   } catch (error) {
//     console.log("some shit happened", error);
//   } finally {
//     await client.end();
//   }
// };

// insertData();

// const getUser = async (email: string) => {
//   try {
//     await client.connect();
//     const getUserQuery = `
//             SELECT * FROM users WHERE email = $1
//         `;
//     const result = await client.query(getUserQuery, [email]);
//     if (result.rows.length > 0) {
//       console.log("User Found: ", result.rows[0]);
//       return result.rows[0];
//     } else {
//       console.log("No user found");
//       return null;
//     }
//   } catch (error) {
//     console.log("error", error);
//   } finally {
//     client.end();
//   }
// };

// getUser("sanjay@gmail.com");

const getUsersTable = async () => {
  try {
    await client.connect();
    const getUsersTableQuery = "SELECT * FROM users";
    const response = await client.query(getUsersTableQuery);
    console.log(response.rows);
  } catch (error) {
    console.log(error);
  } finally {
    client.end();
  }
};

getUsersTable();
