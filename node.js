// Modules
const fs = require("fs");
const http = require("http");
const url = require("url");

// Templates HTML
const tempDescription = fs.readFileSync(
	`${__dirname}/templates/template-description.html`,
	"utf-8",
);
const tempLandpage = fs.readFileSync(
	`${__dirname}/templates/landpage.html`,
	"utf-8",
);
const tempProducts = fs.readFileSync(
	`${__dirname}/templates/template-products.html`,
	"utf-8",
);
const tempIndex = fs.readFileSync(`${__dirname}/templates/index.html`, "utf-8");

// JSON Data
const data = fs.readFileSync(`${__dirname}/products.json`, "utf-8");
const dataObj = JSON.parse(data);

// Server
const server = http.createServer((req, res) => {
	// Get the URL pathname
	const { query, pathname } = url.parse(req.url, true);
	console.log(url.parse(req.url, true));

	// Store URL in variable
	const pathName = req.url;

	// Routing that link different websites depend on the req
	if (pathname === "/" || pathname === "/landpage") {
		res.writeHead(200, { "Content-type": "text/html" });

		res.end(tempIndex);
	} else if (pathname === "/products") {
		res.writeHead(200, { "Content-type": "text/html" });

		res.end("tempProducts");
	} else if (pathname === "/description") {
		res.writeHead(200, { "Content-type": "text/html" });

		res.end("tempDesc");
	} else {
		res.writeHead(404, {
			"Content-type": "text/html",
		});

		res.end("<h1> 404 ERROR, Page not found!</h1>");
	}
});

server.listen(3000, "127.0.0.1", () => {
	console.log("Listening requests: port 3000");
});

// // CSS File
// fs.readFile(`${__dirname}/css/style.css`, function (err, cssdata) {
// 	if (err) console.log("err");
// 	res.writeHead(200, { "Content-Type": "text/css" });
// 	res.write(cssdata);
// 	res.end(cssdata);
// });
// // JS File
// fs.readFile(`${__dirname}/scripts/dom.js`, function (err, jsdata) {
// 	if (err) console.log("err");
// 	res.writeHead(200, { "Content-Type": "text/javascript" });
// 	res.write(jsdata);
// 	res.end(jsdata);
// });
