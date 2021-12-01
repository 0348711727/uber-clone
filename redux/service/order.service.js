// import config from "../../config";

export const addOrder = (restaurantName, items) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            item: items,
            restaurantName: restaurantName,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    // return fetch(`${config.API_URL}/api/orders`, requestOptions)
    return fetch('http://192.168.1.6:5000/api/orders', requestOptions)
        .then((response) => response.json())
        // .then(() => setTimeout(() => {
        //     setLoading(false)
        // }, 2500))
        .catch((err) => console.log(err));
}
export const getOrder = () => {
    return fetch('http://192.168.1.6:5000/api/orders')
        // fetch(`${config.API_URL}/api/orders`)
        .then(res => res.json())
        .then(json => setLastOrder([...json]))
        .catch(err => console.log(err))
}
