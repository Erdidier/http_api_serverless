const {v4} = require("uuid");
const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const updateTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const {completed} = event.body;
  const {id} = event.pathParameters

  await dynamodb.put({
    TableName: "TodoTable",
    key: {id},
    UpdateExpression: 'set completed = :completed',
    ExpressionAttributeValues: {
        ':completed': completed
    },
    ReturnValues: "ALL_NEW"
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
        msg: "Todo Updated"
    }),
  };
};

module.exports = {
  handler: middy(updateTodo).use(httpJsonBodyParser())
}