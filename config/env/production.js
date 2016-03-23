module.exports = {
    db: 'mongodb://10.10.36.75/showcase',
    mailer: {
        host: '127.0.0.1',
        port: 25,
        ignoreTLS: false,
        auth: {
            user: 'showcase',
            pass: 'testpassword'
        }
    },
    twilo: {
        accountSid: 'AC1309e9366c6fa0099ec5f68bcceacf4a',
        authToken: 'e4cd240c300e78ed267907c0a1987653'
    },
    security: {
        secret: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWQiOjEyMywiaWF0IjoxNDM1MDY0MzY5LCJleHAiOjE0MzUwODIzNjl9',
        expirationTimeInMinutes: 60
    }
};
