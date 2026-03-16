-- สร้างตารางลูกค้า
CREATE TABLE IF NOT EXISTS Customer (
    customer_id SERIAL PRIMARY KEY,
    username_email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address TEXT
);

-- สร้างตารางพนักงาน
CREATE TABLE IF NOT EXISTS Staff (
    staff_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(50)
);

-- ล้างข้อมูลเก่า
TRUNCATE TABLE Customer RESTART IDENTITY CASCADE;
TRUNCATE TABLE Staff RESTART IDENTITY CASCADE;

-- ข้อมูลจำลอง
INSERT INTO Customer (username_email, password, address) VALUES
('somchai_it@email.com', 'pass123', 'Bangkok, Thailand'),
('somying_cool@email.com', 'pass456', 'Chiang Mai, Thailand');

INSERT INTO Staff (first_name, last_name, role) VALUES
('Jane', 'Doe', 'Sales Manager'),
('John', 'Smith', 'IT Support');