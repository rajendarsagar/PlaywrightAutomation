class ApiUtils {


    constructor(request) {
        this.request = request;
    }




    async getToken(loginPayLoad) {
        const apiContext = await this.request.newContext();
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: loginPayLoad
        });

        const loginresponseJson = await loginResponse.json();
        //expect(loginResponse.status()).toBe(200);
        const token = loginresponseJson.token;
        console.log(token);
        return token;

    }

    async getOrderId(orderPayLoad, loginPayLoad) {
        const apiContext = await this.request.newContext();
        const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            data: orderPayLoad,
            headers: {
                'Authorization': await this.getToken(loginPayLoad),
                'Content-Type': 'application/json'
            }
        })

        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        //expect(orderResponse.ok()).toBeTruthy();
        const orderid = orderResponseJson.orders[0];
        console.log(orderid);
        return orderid;
    }
}
module.exports = { ApiUtils };