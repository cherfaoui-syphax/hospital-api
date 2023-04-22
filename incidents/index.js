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
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "ward or token missing" }),
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
      id: "QE-BA-DAR1",
      status: "confirmed",
      index: {
        name: "Jane Smith",
        id: 1111231234,
      },
      pathogen: "C. difficile",
      pathogenCategory: "Gastrointestinal infections",
      date: "Sun, 24 July 2022, 5:06 pm",
      role: "Patient",
      notes: ["fsfdsfsd", "fdsfds"],
      exposures: [
        {
          level: "high",
          name: "Aaron Norwood",
          id: 1221231234,
          mitigations: ["order-pathology-test", "self-isolate"],
          date: "Mon, 9 April 2023, 3:45 pm",
          duration: 180000,
          role: "Patient",
          distance: 0.4,
          type: "person",
        },
        {
          level: "high",
          name: "Elizabeth Holmes",
          id: 1221231234,
          mitigations: ["order-pathology-test", "self-isolate"],
          date: "Mon, 9 April 2023, 4:05 pm",
          role: "Patient",
          distance: 0.2,
          duration: 180000,
          type: "person",
        },
        {
          level: "low",
          name: "Surgical Room 2",
          mitigations: ["request-cleaning-service"],
          date: "Mon, 9 April 2023, 3:23 pm",
          duration: 180000,
          role: "Room",
          distance: 0.5,
          type: "room",
        },
      ],
    },
    {
      id: "BE-FA-GHR12",
      status: "confirmed",
      index: {
        name: "John Smith",
        id: 1136267234,
      },
      pathogen: "C. difficile",
      pathogenCategory: "Gastrointestinal infections",
      date: "Sun, 24 December 2022, 5:06 pm",
      role: "Patient",
      notes: ["fsfdsfsd", "fdsfds"],
      exposures: [
        {
          level: "high",
          name: "Steven Peabody",
          id: 1221231234,
          mitigations: ["order-pathology-test", "self-isolate"],
          date: "Mon, 9 January 2023, 3:45 pm",
          duration: 180000,
          distance: 0.7,
          role: "Patient",
          type: "person",
        },
        {
          level: "high",
          name: "Lauren Summers",
          id: 1221231234,
          mitigations: ["order-pathology-test", "self-isolate"],
          date: "Mon, 9 January 2023, 4:05 pm",
          role: "Patient",
          distance: 1,
          duration: 180000,
          type: "person",
        },
      ],
    },
    {
      id: "BE-FA-GHR12",
      status: "confirmed",
      index: {
        name: "Katie Winters",
        id: 1136267234,
      },
      pathogen: "C. difficile",
      pathogenCategory: "Gastrointestinal infections",
      date: "Sun, 04 January 2023, 1:06 pm",
      role: "Patient",
      notes: ["fsfdsfsd", "fdsfds"],
      exposures: [
        {
          level: "high",
          name: "Karen Langly",
          id: 1221231234,
          mitigations: ["order-pathology-test", "self-isolate"],
          date: "Mon, 9 March 2023, 3:45 pm",
          duration: 180000,
          distance: 0.1,
          role: "Patient",
          type: "person",
        },
        {
          level: "high",
          name: "Tom Malcolm",
          id: 1221231234,
          mitigations: ["order-pathology-test", "self-isolate"],
          date: "Mon, 9 March 2023, 4:05 pm",
          role: "Patient",
          duration: 180000,
          distance: 0.3,
          type: "person",
        },
      ],
    },
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
