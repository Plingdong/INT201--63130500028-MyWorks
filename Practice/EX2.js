function checkPayment(payment, priceOfProduct) { // สร้างฟังก์ชั่นเอาไว้สำหรับเช็คเงินทอน

    console.log(`--- Product price ${priceOfProduct} baht, paid ${payment} baht ----`); // แสดงราคาที่ต้องจ่าย และจำนวนเงินที่จ่าย

    let change = payment - priceOfProduct; // สร้าง change เก็บจำนวนเงินที่ต้องทอน
    if (change < 0) { // ถ้าค่าchange น้อยกว่า 0
        return "Not enough money !"; // จะแสดงข้อความ Not enough money !
    } else if (change == 0) { // ถ้าค่าchange เท่ากับ 0
        return "Give enough money :)"; // จะแสดงข้อความ Give enough money :)
    } else { // ถ้าค่าเป็นค่าอื่นๆ
        return numOfCash(change);
    }
}


function numOfCash(change) { // ฟังก์ชั่นรับค่า change เพื่อคำนวนหาจำนวนแบงค์และเหรียญที่ต้องทอน
    let cash = { //สร้างobj cash เก็บค่าแบงค์และเหรียญแต่ละชนิดไว้โดยตั้งค่าเริ่มต้นที่ 0

        "500 baht banknote": 0,
        "100 baht banknote": 0,
        "50 baht banknote": 0,
        "20 baht banknote": 0,
        "10 baht coin": 0,
        "5 baht coin": 0,
        "2 baht coin": 0,
        "1 baht coin": 0,

    };
    while (change > 0) { // loop while เช็คค่า changeถ้า > 0 ให้ทำต่อไป
        if (change >= 500) { // ถ้า change >= 500 ให้อัปเดตค่าแบงค์500 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 500; //นำจำนวนที่ต้องทอนลบแบงค์ที่ทอนออกไปเพื่ออัปเดตจำนวนเงินที่เหลือที่ต้องทอน
            cash["500 baht banknote"]++; //เรียก obj ที่มี key ชื่อว่า “500 baht banknote”
        } else if (change >= 100) { // ถ้า change >=100 ให้อัปเดตค่าแบงค์ 100 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 100;
            cash["100 baht banknote"]++;
        } else if (change >= 50) { // ถ้า change >=50 ให้อัปเดตค่าแบงค์ 50 ใน cash โดยเพิ่มขึ้นทีละ 1 
            change = change - 50;
            cash["50 baht banknote"]++;
        } else if (change >= 20) { // ถ้า change >=20 ให้อัปเดตค่าแบงค์ 20 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 20;
            cash["20 baht banknote"]++;
        } else if (change >= 10) { // ถ้า change >=10 ให้อัปเดตค่าเหรียญ 10 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 10;
            cash["10 baht coin"]++;
        } else if (change >= 5) { // ถ้า change >=5 ให้อัปเดตค่าเหรียญ 5 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 5;
            cash["5 baht coin"]++;
        } else if (change >= 2) { // ถ้า change >=2 ให้อัปเดตค่าเหรียญ 2 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 2;
            cash["2 baht coin"]++;
        } else { // ถ้าไม่เข้าเงื่อนไขใดเลยให้อัปเดตค่าเหรียญ 1 ใน cash โดยเพิ่มขึ้นทีละ 1
            change = change - 1;
            cash["1 baht coin"]++;
        }
    }
    let buffer = ""; // ประกาศตัวแปรชื่อ buffer
    for (let money in cash) {
        // ใช้ for in ในการแสดงค่าของ cash
        if (cash[money] != 0) {
            buffer += `${money}, ${cash[money]} piece\n`; // ถ้า value
            // ของแต่ละ property ไม่เท่ากับ 0 ให้แสดงค่านั้น เก็บไว้ใน buffer
        }
    }
    return buffer; //รีเทิร์นค่า buffer
}

console.log(checkPayment(2, 10)); // เรียกใช้ฟังก์ชั่น checkPayment
console.log(checkPayment(10, 10)); // เรียกใช้ฟังก์ชั่น checkPayment
console.log(checkPayment(2450, 1900)); // เรียกใช้ฟังก์ชั่น checkPayment
console.log(checkPayment(1000, 722)); // เรียกใช้ฟังก์ชั่น checkPayment
console.log(checkPayment(5000, 4899)); // เรียกใช้ฟังก์ชั่น checkPayment