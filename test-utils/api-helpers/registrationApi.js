const {request} = require('@playwright/test');
const {baseAPI} = require('./baseAPI');

exports.SignUpAPI = class SignUp extends baseAPI {
    constructor(request) {
        super(request);
        this.enpoint='/api/auth/local/register';
    };
}