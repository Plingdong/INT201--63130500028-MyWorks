const maxPoint = 100;

function gpax(point) {
    switch (point != null && point <= maxPoint) {
        case point >= 80:
            var grade = 'A';
            break;
        case point >= 70:
            var grade = 'B';
            break;
        case point >= 60:
            var grade = 'C';
            break;
        case point >= 50:
            var grade = 'D';
            break;
        case point < 50:
            var grade = 'F';
            break;
    }
    return grade;
};
let chanon = gpax(70);
console.log(`Grade Chanon: ${chanon}`);