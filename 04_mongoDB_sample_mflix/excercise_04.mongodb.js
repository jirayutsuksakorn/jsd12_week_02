//ดึงข้อมูลจาก (sample_mflix)
use('sample_mflix');

//ดึงข้อมูลจาก collection ที่ movies แล้ว ใส่ field ที่ ชื่อ plot เพื่อ ดึงข้อมูล 
//จาก plot ที่ อยู่ ใน collection ของ movies 
//โดยดึงมาเฉพาะ plot ที่มีคำว่า American 
//โดยใส่เงื่อนไขเสริมคือ ให้ดึงมาทั้งหมด ของตัวพิมเล็กพิมใหญ่
db.movies.find({plot: {$regex: "American", $options: "i"}}).count();

//ดึงข้อมูลจาก collection ที่ movies แล้ว ใส่ field ที่ ชื่อ plot เพื่อ ดึงข้อมูล 
//จาก plot ที่ อยู่ ใน collection ของ movies 
//โดยดึงมาเฉพาะ plot ที่จบประโยคว่า Street 
//โดยใส่เงื่อนไขเสริมคือ ให้ดึงมาทั้งหมด ของตัวพิมเล็กพิมใหญ่
db.movies.find({plot: {$regex: "Street.$", $options: "i"}}).count();

