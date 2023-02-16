export async function handler(event: string, context: string){
console.log('====================================');
console.log('Stage Name is: ' + process.env.stage);
console.log('====================================');

return  {
    body: "Hello from a lambda Function",
    statusCode: 200
}
}