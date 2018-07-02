import express from "express"
import config from "config"
import bodyParser from "body-parser"

const app = express()

// CẤU HÌNH BODY PARSER
//cấu hình bodyParser ra dạng json
app.use(bodyParser.json())

//để nhận được dữ liệu từ form data post lên
var urlencodedParser = bodyParser.urlencoded({ extended: true })

// CẤU HÌNH EJS
//đường dẫn đến thư mục views
app.set("views", __dirname + "/apps/views")

//Lệnh này set để nó hiểu tất cả file có đuôi ejs trong thư mục views
//đều được hiểu là template
app.set("view engine", "ejs")

// CẤU HÌNH STATIC
app.use("/static", express.static(__dirname + "/public"))

// Import thư mục controllers
const controllers = require(__dirname + "/apps/controllers")

// Include controllers

app.use(controllers)

const host = config.get("server.host")
const port = config.get("server.port")
// Tạo cổng kết nối
//Cài thêm module config
app.listen(port, host, () => {
	console.log(`Server is running: ${port}`)
})