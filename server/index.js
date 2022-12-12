const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');

// Configure the AWS SDK with your AWS access key ID and secret access key.
// These are your credentials for accessing AWS services.
AWS.config.update({
	accessKeyId: '',
	secretAccessKey: '',
	region: ''
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./'));

app.get('/products', (req, res) => {
	return res.status(200).json({
		"products": [
			{
				"id": 1,
				"title": "iPhone 9",
				"description": "An apple mobile which is nothing like apple",
				"price": 549,
				"discountPercentage": 12.96,
				"rating": 4.69,
				"stock": 94,
				"brand": "Apple",
				"category": "smartphones",
				"thumbnail": "...",
				"images": ["...", "...", "..."]
			},
			{
				"id": 2,
				"title": "iPhone 11",
				"description": "An apple mobile which is nothing like apple",
				"price": 949,
				"discountPercentage": 12.96,
				"rating": 4.69,
				"stock": 94,
				"brand": "Apple",
				"category": "smartphones",
				"thumbnail": "...",
				"images": ["...", "...", "..."]
			}
		]
	});
});


app.post('/save-products', (req, res) => {
	// Create a new instance of the DynamoDB client.
	const dynamoDb = new AWS.DynamoDB.DocumentClient();

	// Define the data to be saved to DynamoDB.
	const data = {
		id: "1",
		title: 'iPhone 9',
		description: 'An apple mobile which is nothing like apple',
		price: 549,
		discountPercentage: 12.96,
		rating: 4.69,
		stock: 94,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: '...',
		images: ['...', '...', '...']
	};

	// Save the data to DynamoDB.
	dynamoDb.put({
		TableName: 'products',
		Item: data
	}, (error) => {
		if (error) {
			return res.status(599).json({"status":"error" + error});
		} else {
			return res.status(200).json({ "status": "success" });
		}
	});
});

app.get('*', (req, res) => {
	console.log("🚀 ~ file: index.js:86 ~ app.get ~ req", req);
	res.sendFile(`index.html`, { root: "./" });
});

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
