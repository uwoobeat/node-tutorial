const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // 모든 CORS 요청에 대하여 허용

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/dog", (req, res) => {
	res.send("<h1>dog</h1>");
});

app.get("/cat", (req, res) => {
	res.send({ sound: "nyaa" });
});

/*
API에 변하는 값을 전달해야 할 수도 있다. params와 query, body 방식이 존재한다.
params는 슬래시 뒤 변수를 담는다. :{var}과 같이 받을 수 있다.
*/

app.get("/user/:id", (req, res) => {
	const q = req.params;
	console.log(q); // json
	console.log(q.id); // string
});

app.get("/user/:id/:name", (req, res) => {
	const q = req.params;
	console.log(q); // json
	console.log(q.id); // string
	console.log(q.name); // string
});

/*
쿼리스트링 방식을 사용할 수 있다. 
?로 시작, key=val 형식으로 쿼리를 보낸다. &로 조건을 이어붙일 수 있다.
조건 길이를 다양하게 받을 수 있다.
*/

app.get("/notice", (req, res) => {
	const q = req.query;
	console.log(q);
});

/*
POST 요청의 request body에 json을 담아서 보내면 해당 값이 req.body에 저장된다. 
*/

app.get("/sound/:name", (req, res) => {
	const { name } = req.params;
	// 비구조화 할당 (destructing assignment)
	// json 형태의 req.params에서 name:val이 있으면 name 이름을 가진 변수에 val이 할당된다.

	if (name == "dog") {
		res.json({ sound: "bark" });
	} else if (name == "cat") {
		res.json({ sound: "nyaa" });
	} else if (name == "pig") {
		res.json({ sound: "oink" });
	} else {
		res.json({ sound: "unknown" });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
