const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    let response;
    let result;

    response = [
        { category_id: 1 , category_name :  "Virus" },
        { category_id: 2 , category_name :  "Infection" },
        { category_id: 3 , category_name :  "Bacteria" }
      ];

    result = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers" : "*",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'data': response && response.Items ? response.Items : []})

    };
    return result;
};
