const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { queryStringParameters } = event;
    const { ward, token, dateRange } = queryStringParameters;
    
    if (!ward || !token || !dateRange) {
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
    
    const response = {
    endDate: 1663027186011,
    startDate: 1662415200000,
    content: [
      {
        pathogen: "C. difficile",
        percentage: 38,
      },
      {
        pathogen: "E. coli",
        percentage: 39,
      },
      {
        pathogen: "MRSA",
        percentage: 15,
      },
      {
        pathogen: "Staphylococcus Aureus",
        percentage: 8,
      },
    ],
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

