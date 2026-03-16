//ดึงข้อมูลจาก (sample_mflix)
use('sample_mflix');

//ใส่ theaters ใน collection ตาม ด้วย key ที่ไล่ลำดับไป
//แล้วใส่ .count()ต่อท้าย เพื่อหาจำนวน theaters
db.theaters.find({"location.address.state": "AL" }).count();

////ใส่ theaters ใน collection ตาม ด้วย key ที่ไล่ลำดับไป
//แล้วเปลี่ยน แล้วใช้ . dotation ในการ acess เข้าไป เหมือน path 
//cit แล้วใส่ value เป็นชื่อเมือง เพื่อบอกให้ หาว่า theaters ในเมืองนี้ มีกี่โรง
db.theaters.find({"location.address.city": "La Quinta" }).count();