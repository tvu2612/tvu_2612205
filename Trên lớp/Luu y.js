// JavaScript:
// 1. Ngôn ngữ kịch bản scripting ( ko phải ngôn ngữ lập trình)
// 2. Hướng đoói tượng không hoàn toàn
// (dùng như hướng đối tượng nhưng ko có tc kế thừa)
// document.getElementsByName(): document: là 1 đối tượng(object)
// getElementsByName(): phương thức(method)
// Để truy cập(gọi) 1 phường thức: Tên Đối Tượng.(chấm) Tên Phương Thức
// document.getElementsByName()

// int a;
// a = 10;
// var a; //có thể là bất kỳ kiểu dữ liệu nào
// a = "Hello";
// a = 1.5;
// a = 20;
var today =  new Date();//Today là 1 Object có kiểu Date: Ngày
var hournow = today.getHours();//Giờ hiện tại
var greeting;
if(hournow > 18){
    greeting = "Good evening";
}else if(hournow > 12){
    greeting = "Good afternoon"
}else if(hournow > 0){
    greeting = "Good morning"
}else{
    greeting = "Welcome"
}
document.write('<h3>' + greeting + '</h3>')
