import back from './back'

class crud {
    /**METODO GET*/
    async GET(endpoint, queryParams) {

        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }
        
        const data = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${back.api.baseURL}${endpoint}`;
        let response = (await (await fetch(url, data)).json())
        return response
    }
    /**METODO POST*/
    async POST(endpoint, body) {
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${back.api.baseURL}${endpoint}`;
        let response = (await (await fetch(url, data)).json())
        return response
    }
}
export default new crud();