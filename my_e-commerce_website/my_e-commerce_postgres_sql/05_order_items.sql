-- สร้างตารางรายละเอียดสินค้าในออเดอร์
CREATE TABLE IF NOT EXISTS Order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES Orders(order_id),
    product_id INT REFERENCES Product(product_id),
    price_at_purchase DECIMAL(10, 2),
    quantity INT NOT NULL
);

-- ล้างข้อมูลเก่า
TRUNCATE TABLE Order_items RESTART IDENTITY CASCADE;

-- ข้อมูลจำลองสินค้าในแต่ละออเดอร์
INSERT INTO Order_items (order_id, product_id, price_at_purchase, quantity) VALUES
(1, 1, 45000.00, 1),
(2, 3, 22000.00, 1),
(2, 2, 65000.00, 1);