import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-south-1_nxWJF6lTM',
    ClientId: '194dv28o5hckmu0ddevje2m4ou'
}

export default new CognitoUserPool(poolData);