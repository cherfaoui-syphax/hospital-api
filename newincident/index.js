const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { queryStringParameters, body } = event;
  const { ward, token } = queryStringParameters;

  let response;
  let result;

  if (!ward || !token) {
    result = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "ward or token missing" }),
    };
    return result;
  }

  let parsedBody;

  try {
    if (body !== undefined) {
      parsedBody = JSON.parse(event.body);
    }

    let params = {
      Item: parsedBody.Item,
      TableName: "incidents",
    };

    await dynamo
      .put(params, function (err, data) {
        if (err) response = err;
        else response = data;
      })
      .promise();

    result = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: response,
      }),
    };
    return result;
  } catch (e) {
    result = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    };
    return result;
  }
};
