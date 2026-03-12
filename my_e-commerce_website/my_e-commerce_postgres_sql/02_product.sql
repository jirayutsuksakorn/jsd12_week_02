-- สร้างตารางสินค้า
CREATE TABLE IF NOT EXISTS Product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    supplier_id INT REFERENCES Suppliers(supplier_id)
);

-- ล้างข้อมูลเก่า
TRUNCATE TABLE Product RESTART IDENTITY CASCADE;

-- ข้อมูลจำลอง Laptop Dell 5 รุ่น
INSERT INTO Product (name, price, stock_quantity, supplier_id) VALUES 
('Dell XPS 13', 45000.00, 10, 1),
('Dell XPS 15', 65000.00, 5, 1),
('Dell Inspiron 15', 22000.00, 15, 2),
('Dell Vostro 3520', 18500.00, 20, 2),
('Dell Alienware m16', 89000.00, 3, 1);