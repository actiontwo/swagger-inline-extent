/**
 * @api [get] ${replace}/codes/{type}/${a.b.c}
 * description: "Get List code"
 * tags:
 *  - v1/codes
 * summary: Get List Codes
 * parameters:
 *    - $ref: '#/components/parameters/limit' 
 *    - $ref: '#/components/parameters/page' 
 *    - $ref: '#/components/parameters/codeType' 
 * x-amazon-apigateway-integration:
 *     passthroughBehavior: when_no_match
 *     uri: '${path}/codes/{type}'
 */