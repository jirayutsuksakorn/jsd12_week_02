//ดึงข้อมูลจาก (sample_mflix)
use('sample_mflix');

//ใช้ คำสั่ง find เพื่อ ดึงข้อมูลจาก comment มาทั้งหมด
db.comments.find({});

//ใช้ คำสั่ง findOne เพื่อดึงข้อมูลจาก comment มาเฉพาะ 1 อย่างที่ต้องการ
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") });

//ใช้ คำสั่ง findOne เพื่อดึงข้อมูลจาก comment มาเฉพาะ 1 อย่างที่ต้องการ
//แล้ว ใส่ field ที่ต้องการคือ email
db.comments.findOne({email: "john_bishop@fakegmail.com"});

////ใช้ คำสั่ง findOne เพื่อดึงข้อมูลจาก comment มาเฉพาะ 1 อย่างที่ต้องการ
//แล้ว ใส่ field ที่ต้องการคือ name แล้ว ตามด้วย value ที่ต้องการค้นหา 
db.comments.findOne({name: "John Bishop"});



