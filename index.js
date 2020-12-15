const AWS = require("aws-sdk");

// ロギング機能を有効
AWS.config.logger = console;

async function main() {
    //const docClient = new AWS.DynamoDB.DocumentClient({ region: "ap-northeast-1" });

    const lambda = new AWS.Lambda({ region: "ap-northeast-1" });
    let res = await lambda.listFunctions({}).promise();
    console.log("res:", JSON.stringify(res, null, 2));
}

main();
