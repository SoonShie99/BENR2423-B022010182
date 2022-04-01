const {faker} = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:<password>@sandbox.boqdr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
	let name = []
	let password = []
	let address = []
	for(let i=0; i<10; i++) {
		name= `${faker.name.firstName()} ${faker.name.lastName()}`;
		fakepass = faker.internet.password();
		fakepass = bcrypt.hashSync(fakepass, 10);
		fakeaddress = faker.address.city()
		name.push(name);
		password.push(fakepass);
		address.push(fakeaddress);
	}

	console.log(name);
	console.log(password);
	console.log(address);

	try{

		for(let i=0; i<10; i++) {
			client.db("week3").collection("users").insertOne({
				name: name[i],
				password: password[i],
				address: address[i]
			})
		}
	}
	catch(err) {
		console.log(err);
	}
});
