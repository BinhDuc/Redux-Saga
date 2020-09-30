/**
* File dinh nghia API lay du lieu tu Backend
*/
function callAPI(data) {
    return new Promise((resolve, reject) => {
        // API gui toi server can biet:
        // - method: Co the la GET, POST, PUT, DELETE, ...
        // - url: Duong dan toi Backend
        // - du lieu chuyen qua server thong qua body hoac header
        // Day la API lay du lieu nen khong can chuyen them du lieu gi
        // chi can url va method GET
        const url = 'http://localhost:3001/students/' + data.id
        // Ham fetch la ham cua Javascript su dung de goi toi Backend
        fetch(url, {
            headers: { "Content-type": "Application/json" },
            method: 'PUT',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export default callAPI;