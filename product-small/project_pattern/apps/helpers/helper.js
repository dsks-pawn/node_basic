//Ở đây sẽ viết những hàm giải mã password

//module bcrypt sử dụng để mã hóa password ( hash password )
import bcrypt from "bcrypt";
import config from "config";

const hashPassword = password => {
	// saltRounds là độ dài bên cofig là salt
	let saltRounds = config.get("salt");

	//sử dụng saltRounds làm tham số để tạo salt cho sẵn
	let salt = bcrypt.genSaltSync(saltRounds);

	//salt sử dụng để mã hóa password với hàm hash
	let hash = bcrypt.hashSync(password, salt);

	return hash;
};

module.exports = { hashPassword };
