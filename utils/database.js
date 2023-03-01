const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: '5433',
  database: 'wp2_demo_20',
  password: '0000',
});

console.log(
  `Connect PostgreSQL database ${pool.options.database} on port ${pool.options.database}`
);

module.exports = pool;
