DROP TABLE IF EXISTS Order_items, Orders, Product, Customer, Suppliers, Staff CASCADE;
-- -----------------------------------------------------
-- 1. Create Table: Customer
-- -----------------------------------------------------
CREATE TABLE Customer (
    customer_id SERIAL PRIMARY KEY,
    username_email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- 2. Create Table: Product
-- -----------------------------------------------------
CREATE TABLE Product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0
);

-- -----------------------------------------------------
-- 3. Create Table: Order (ใช้ชื่อ Orders เพราะ Order เป็น Keyword ของ SQL)
-- -----------------------------------------------------
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

-- -----------------------------------------------------
-- 4. Create Table: Order_items
-- -----------------------------------------------------
CREATE TABLE Order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    price_at_purchase DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

-- -----------------------------------------------------
-- INSERT ข้อมูลสินค้า Dell Laptop 5 รายการ
-- -----------------------------------------------------
INSERT INTO Product (name, price, stock_quantity) VALUES 
('Dell XPS 13', 45000.00, 10),
('Dell XPS 15', 65000.00, 5),
('Dell Inspiron 15', 22000.00, 15),
('Dell Vostro 3520', 18500.00, 20),
('Dell Alienware m16', 89000.00, 3);