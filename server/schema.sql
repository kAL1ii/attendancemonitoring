-- Table schema for tblstudent
CREATE TABLE IF NOT EXISTS tblstudent (
    id SERIAL PRIMARY KEY,
    studentNo INTEGER NOT NULL,
    studentName VARCHAR(255) NOT NULL,
    section VARCHAR(255) NOT NULL,
    contactNo INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Table schema for tblparent
CREATE TABLE IF NOT EXISTS tblparent (
    id SERIAL PRIMARY KEY,
    parentName VARCHAR(255) NOT NULL,
    studentName VARCHAR(255) NOT NULL,
    contactNo INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Table schema for tblguest
CREATE TABLE IF NOT EXISTS tblguest (
    id SERIAL PRIMARY KEY,
    guestName VARCHAR(255) NOT NULL,
    contactNo INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL
);