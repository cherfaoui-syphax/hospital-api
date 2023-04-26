const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const { token } = queryStringParameters;

  if (!token) {
    const result = {
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

  const response = [
    { role_id: 1, role_name: "Surgeon" },
    { role_id: 2, role_name: "Nurse" },
    { role_id: 3, role_name: "Janitor" },
    { role_id: 4, role_name: "Patient" },
  ];

  const result = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: response }),
  };
  return result;
};
