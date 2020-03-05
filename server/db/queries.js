// create db
const { Pool } = require('pg')

const pool = new Pool({
    "database": "bugs"
});


function returnAll() {
    return pool.query("SELECT * FROM bug_reports", (err, res) => {
        if (err) {
            throw err
        }
    })
}