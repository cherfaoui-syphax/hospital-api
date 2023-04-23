const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {

    let response;
    let result;

    response = [
        { role_id: 1 , role_name :  "Surgeon" },
        { role_id: 2 , role_name :  "Nurse" },
        { role_id: 3 , role_name :  "Janitor" }
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
