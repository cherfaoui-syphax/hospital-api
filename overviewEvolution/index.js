const AWS = require("aws-sdk");

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

  const response = {
    cases: {
      number: 20,
      percentage_change: -20,
      nominal_change: -30,
    },
    contacts: {
      number: 20,
      percentage_change: -20,
      nominal_change: -30,
    },
    contaminations: {
      number: 20,
      percentage_change: -20,
      nominal_change: -30,
    },
  };

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
