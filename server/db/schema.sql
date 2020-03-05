DROP DATABASE IF EXISTS bugs;

CREATE DATABASE bugs; 

\c bugs;

CREATE TABLE bug_reports (
"id" SERIAL,
"bug_description" TEXT, 
"reported_by" TEXT, 
"created_date" TEXT default (to_char(CURRENT_DATE, 'MM/DD/YYYY')),
"assigned_to" TEXT,
"threat_level" TEXT
)

INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level) VALUES 
('Async Swim needs to be fixed, desperately.', 'Bailey', '1/5/2020', 'Teddi', 'Critical'),
('Do you support the Phantom Thieves?', 'Jeff', '1/5/2020', 'Daniel', 'Low-Priority'),
('Unit test #202200324 is failing on Jeffs computer', 'Daniel', '1/6/2020', 'Bailey', 'Low-Priority'),
('Wax on', 'Bailey', '1/6/2020', 'Teddi', 'Important'),
('Wax off', 'Bailey', '1/7/2020', 'Teddi', 'Important'),
('Totally not a generic bug', 'Nick', '1/7/2020', 'Surj', 'Critical');
