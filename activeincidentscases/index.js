const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { queryStringParameters } = event;
    const { ward, token } = queryStringParameters;
    
    if (!ward || !token) {
        const result = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers" : "*",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'error': 'ward or token missing'})
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
        {
            type: 'confirmed',
            count: 12,
        },
        {
            type: 'unconfirmed',
            count: 4,
        },
        {
            type: 'unknown',
            count: 12,
        },
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
