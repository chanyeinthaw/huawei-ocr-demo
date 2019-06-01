const url = 'https://ocr.ap-southeast-1.myhuaweicloud.com/v1.0/myanmar-driver-license'
const options = (token, image64) => ({
    method: 'POST',

    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token
    },

    body: JSON.stringify({
        image: image64
    })
})

export default function ocrMyanmarLicenseRequest(authToken, image64) {
    return fetch(url, options(authToken, image64))
}