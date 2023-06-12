const http=require('http')
http.createServer(function(request,response){
    response.write('HTTP Module using node');
    response.end();
}).listen(3000);

let option1={
    host:"lms.saveetha.ac.in",
    path:"/",
    method:"GET"
};
let option2={
    host:"lms.saveetha.ac.in",
    path:"/",
    method:"POST"
}
let option3={
    host:"date.nager.at",
    path:"/api/v3/PublicHolidays/2023/AT",
    method:"PUT"
}
let option4={
    host:"date.nager.at",
    path:"/api/v3/PublicHolidays/2023/AT",
    method:"DELETE"
}
http.request(option1, (response) => {
    console.log(` GET STATUS: ${response.statusCode}`)
}).end();
http.request(option2, (response) => {
    console.log(`POST STATUS: ${response.statusCode}`)
}).end();
http.request(option3, (response) => {
    console.log(`PUT STATUS: ${response.statusCode}`)
}).end();

http.request(option4, (response) => {
    console.log(`DELETE STATUS: ${response.statusCode}`)
}).end();
