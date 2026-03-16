//ดึงข้อมูลจาก (sample_mflix)
use('sample_mflix');

//ใช้คำสั่ง findOne ตามด้วย field 
//เพื่อ ดึงเอาเฉพาะข้อมูล type ของ movie ตามด้วย rated ของ TV-G
db.movies.findOne({type: "movie", rated : "TV-G"});

//เติม count() ต่อท้ายเพื่อหาจำนวนของ field ที่ต้องการ
db.movies.find({type: "movie", rated : "TV-G"}).count();