//ดึงข้อมูลจาก (sample_mflix)
use('sample_mflix');

//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด โดยใช้ find เพื่อหาข้อมูลดังต่อไปนี้
//กำหนด field เป็น countries เพื่อแสดงหาหนังในประเทศนี้ โดย operator $in ที่ชื่อว่า USA
//โดย opearator $gte 1950  ถึง $lte 1970
db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})

//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด โดยใช้ find เพื่อหาข้อมูลดังต่อไปนี้
//โดยการใช้ $all เพื่อกำหนด value เป็น drama และ history เพื่อให้มีทั้งหมดของหนังเรื่องเดียว
//จาก genres และใช้ $gte เพื่อกรองเอาหนังที่มากกว่าวันที่กำหนด จาก field released
db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()


//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด โดยใช้ find เพื่อหาข้อมูลดังต่อไปนี้
//โดยการใช้ field cast แล้วกำหนด value เป็น Roy L. McCardell เพื่อหาข้อมูล ใน cast
//ของข้อมูล ใน collection movies 
//แล้วใส่ เงื่อนไข ให้หาจำนวน .count()มา
db.movies.find({ cast: "Roy L. McCardell" }).count()

//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด โดยใช้ find เพื่อหาข้อมูลดังต่อไปนี้
//โดยการใช้ field director แล้วกำหนด value เป็น Hal Roach เพื่อหาข้อมูล ใน directors
//ของข้อมูล ใน collection movies 
//แล้วใส่ เงื่อนไข ให้หาจำนวน .count()มา
db.movies.find({ directors: "Hal Roach" }).count()


//ดึงข้อมูลจาก collection ที่ชื่อ movies มาทั้งหมด โดยใช้ find เพื่อหาข้อมูลดังต่อไปนี้
//โดยการใช้ field director แล้วกำหนด operator เป็น $in เพื่อหาข้อมูล Hal Roach ใน directors
//ของข้อมูล ใน collection movies 
//แล้วกำหนด field title 1 เพื่อให้แสดง ชื่อเรื่องของหนังเรื่องนั้น และ awards.wins เพื่อเจาะจงว่า
//หนังเรื่องนั้นได้รับรางวัลอะไรไหม 
//และใส่เงื่อนไขเพิ่ม คือ id:0 เพื่อให้ให้แสดง id ออกมาก
db.movies.find({directors: { $in: ["Hal Roach"] } }, {title: 1, 
"awards.wins": 1, id: 0 });


