const AWS = require("aws-sdk");

exports.handler = async (event) => {
    const { queryStringParameters } = event;
    const { token } = queryStringParameters;
    
    if (!token) {
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
    

    const response = [
        { category_id: 1 , category_name :  "Virus" },
        { category_id: 2 , category_name :  "Infection" },
        { category_id: 3 , category_name :  "Bacteria" }
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

