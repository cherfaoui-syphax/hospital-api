const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { queryStringParameters } = event;
    const { ward, token, dateRange } = queryStringParameters;
    
    if (!ward || !token || !dateRange) {
        const result = {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers" : "*",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'error': 'ward, dateRange or token missing'})
        };  
        return result;
    }
    
    // insert logic here to filter the results according to what wards the user is allowed to see
    
    // let params = {
    //   TableName: "pathogens",
    // }
    
    // let response;
    
    // try {
    
    //     const tableQuery = await dynamo.scan(params, function(err, data) {
    //       if (err) response = err;
    //       else response = data;
    //     }).promise();
        
    // } catch(e) {
    //     response = e;
    // }
    
    const response = [
    { label: "Oct 7", values: [7, 2, 3, 1] },
    { label: "Oct 8", values: [6, 2, 2, 1] },
    { label: "Oct 9", values: [6, 2, 2, 1] },
    { label: "Oct 10", values: [5, 2, 2, 1] },
    { label: "Oct 11", values: [4, 1, 2, 1] },
    { label: "Oct 12", values: [4, 1, 2, 1] },
    { label: "Oct 13", values: [4, 1, 2, 1] },
    { label: "Oct 14", values: [3, 2, 2, 1] },
    { label: "Oct 15", values: [3, 2, 2, 1] },
  ];

    const result = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers" : "*",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'data': response})
    };
    return result;
};

