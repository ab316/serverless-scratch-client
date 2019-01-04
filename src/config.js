export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-1",
        BUCKET: "serverlessstack-note-uploads"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://molddsizfh.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_M6mUCWDvl",
        APP_CLIENT_ID: "68fr3vc6qse8c647t5og153c2p",
        IDENTITY_POOL_ID: "eu-west-1:b8a52306-f953-4172-8254-c594e708febf"
    }
};
