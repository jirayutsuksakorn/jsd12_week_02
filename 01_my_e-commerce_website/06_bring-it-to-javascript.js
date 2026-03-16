// 1. จำลองข้อมูลสินค้า (Products Data) ตามโครงสร้าง ER Diagram
const products = [
    {
        product_id: 1,
        name: "Dell XPS 13",
        price: 45000.00,
        stock_quantity: 10
    },
    {
        product_id: 2,
        name: "Dell XPS 15",
        price: 65000.00,
        stock_quantity: 5
    },
    {
        product_id: 3,
        name: "Dell Inspiron 15",
        price: 22000.00,
        stock_quantity: 15
    },
    {
        product_id: 4,
        name: "Dell Vostro 3520",
        price: 18500.00,
        stock_quantity: 20
    },
    {
        product_id: 5,
        name: "Dell Alienware m16",
        price: 89000.00,
        stock_quantity: 3
    }
];

// 2. ฟังก์ชันสำหรับแสดงรายการสินค้า
function showProducts(productList) {
    console.log("--- รายการสินค้า Dell Laptop ทั้งหมด ---");
    
    productList.forEach((product) => {
        console.log(`รหัส: ${product.product_id}`);
        console.log(`ชื่อสินค้า: ${product.name}`);
        console.log(`ราคา: ${product.price.toLocaleString()} บาท`); // ใช้ toLocaleString เพื่อใส่คอมม่าที่ตัวเลข
        console.log(`คงเหลือ: ${product.stock_quantity} เครื่อง`);
        console.log("------------------------------------");
    });
}

// 3. เรียกใช้งาน
showProducts(products);