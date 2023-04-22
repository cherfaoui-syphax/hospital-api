const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

/**
 * Returns an HTML page containing an interactive Web-based
 * tutorial. Visit the function URL to see it and learn how
 * to build with lambda.
 */
exports.handler = async (event) => {
    let params = {
      TableName: "pathogens",
    }

    let response;
    let result;

    try {

        const tableQuery = await dynamo.scan(params, function(err, data) {
          if (err) response = err;
          else response = data;
        }).promise();


    } catch(e) {
        response = e;
        result = {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers" : "*",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'error': e})
        };
        return result;
    }


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

