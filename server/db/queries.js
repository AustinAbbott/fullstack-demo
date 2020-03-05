// create db
const { Pool } = require('pg')

const pool = new Pool({
    "database": "bugs"
});

let returnAll = () => {
    return pool.query("SELECT * FROM bug_reports")
        .then(results => results.rows)
}

let addBugReport = (data) => {
    let values = [data.bug_description, data.reported_by, data.created_date, data.assigned_to, data.threat_level];
    return pool.query("INSERT INTO bug_reports (bug_description, reported_by, created_date, assigned_to, threat_level) VALUES ($1, $2, $3, $4, $5)", values)
}

module.exports = { returnAll, addBugReport }