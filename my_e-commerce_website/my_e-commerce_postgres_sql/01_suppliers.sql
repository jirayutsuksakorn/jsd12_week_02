-- -----------------------------------------------------
-- 1. Create Table: Suppliers 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Suppliers (
    supplier_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(100),
    phone_number VARCHAR(20)
);

-- -----------------------------------------------------
-- 2. Clear existing data to prevent duplication
-- -----------------------------------------------------
-- ใช้ RESTART IDENTITY เพื่อเริ่มนับ ID ใหม่ที่ 1
TRUNCATE TABLE Suppliers RESTART IDENTITY CASCADE;

-- -----------------------------------------------------
-- 3. Mock Data for Suppliers (ตัวแทนจำหน่าย Dell)
-- -----------------------------------------------------
INSERT INTO Suppliers (supplier_id, name, contact_person, phone_number) VALUES
(1, 'Dell Thailand Official', 'Somsak IT', '02-123-4567'),
(2, 'Global Tech Distribution', 'Sarah Connor', '081-999-8888'),
(3, 'Value Systems Co., Ltd.', 'Wichai Value', '02-555-9999');