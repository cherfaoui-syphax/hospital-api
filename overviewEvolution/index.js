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
    

    
    const response = {
        cases : {
            number: 20 , 
            percentage_change : -20 , 
            nominal_change : -30 

        },
        contacts : {
            number: 20 , 
            percentage_change : -20 , 
            nominal_change : -30 

        },
        contaminations : {
            number: 20 , 
            percentage_change : -20 , 
            nominal_change : -30 

        }
    };

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

