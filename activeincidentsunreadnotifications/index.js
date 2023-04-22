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
            pathogen: 'C.difficile',
            testResult: 'positive',
            name: 'Karen Smith',
            id: 1231231234,
            date: 1664759097951,
        },
        {
            pathogen: 'C.difficile',
            testResult: 'positive',
            name: 'John Smith',
            id: 1231231234,
            date: 1664759097951,
        },
        {
            location: 'surgical room 2',
            mitigation: 'cleaning service',
            status: 'completed',
            id: 1231231234,
            date: 1664759097951,
        },
        {
            pathogen: 'Escherichia coli',
            testResult: 'positive',
            name: 'John Smith',
            id: 1231231234,
            date: 1664759097951,
        },
        {
            pathogen: 'Escherichia coli',
            testResult: 'negative',
            name: 'Jane Doe',
            id: 1231231234,
            date: 1664759097951,
        },
        {
            location: 'surgical room 3',
            mitigation: 'cleaning service',
            status: 'completed',
            id: 1231231234,
            date: 1664759097951,
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

