//ดึงข้อมูลจาก (sample_mflix)
use('sample_mflix');

//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด แล้วใส่เงื่อนไขเสริมคือกรองเอาเเค่
// runtime โดย เงื่อนไขของ runtime คือ -1 ให้เรียงจากมากไปน้อย 
//แล้วใส่เงื่อนไขเพิ่มเติม คือ limit กำหนดให้  show แค่ 5 เรื่อง 
db.movies.find({}).sort({ runtime: -1 }).limit(5);

//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด 
//โดยการใส่ find เพื่อหา ความยาวหนังที่ ไม่เกิน 60 นาที
//แล้ว sort จาก มากไปน้อย โดย แสดงแค่ 5 เรื่อง
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)

//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด
//โดยการใส่ find เพื่อ หา field=year โดยใส่ operator gt=1954 และ lt=1966
//โดยเรียงจากน้อยไปมาก แล้วแสดงผลมากแค่ 3 เรื่อง
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)


//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด โดยใช้ find เพื่อหาข้อมูลดังต่อไปนี้
//คือ field=released ที่ $gte ตั้งแต่วันที่ 1990 ถึง $lt วันที่ 2001 
//แล้วเพิ่มเงื่อนไข .count() เข้าไป เพื่อหาจำนวน หนังทั้งหมด
db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count()
