const { Pool } = require('pg');

let pool;

if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    user: 'postgres',
    host: process.env.SUPABASE_HOST,
    port: '5432',
    database: 'postgres',
    password: process.env.SUPABASE_PASSWORD,
  });
  console.log(
    `Connect SUPABASE PostgreSQL database ${pool.options.database} on port ${pool.options.database}`
  );
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5433',
    database: 'wp2_demo_20',
    password: '0000',
  });
  console.log(
    `Connect local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
}

module.exports = pool;
