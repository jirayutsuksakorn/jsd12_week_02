-- สร้างตารางการสั่งซื้อ
CREATE TABLE IF NOT EXISTS Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES Customer(customer_id),
    staff_id INT REFERENCES Staff(staff_id),
    total_price DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ล้างข้อมูลเก่า
TRUNCATE TABLE Orders RESTART IDENTITY CASCADE;

-- ข้อมูลจำลองการสั่งซื้อ
INSERT INTO Orders (customer_id, staff_id, total_price, status) VALUES
(1, 1, 45000.00, 'Completed'),
(2, 1, 87000.00, 'Pending');