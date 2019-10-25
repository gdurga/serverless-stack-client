export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-wsnl34f6wvz3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h0604m9cvi.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_RRa2OG4Xw",
    APP_CLIENT_ID: "1blhta62du96830b6lccpi36iq",
    IDENTITY_POOL_ID: "us-east-1:dbd8e733-d808-4fd3-80f4-ebf50909bc59"
  }
};
