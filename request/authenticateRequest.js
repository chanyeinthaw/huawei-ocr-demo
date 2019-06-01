export default function authenticateRequest() {
    return fetch(url, options)
}

const url = 'https://iam.ap-southeast-1.myhuaweicloud.com/v3/auth/tokens'
const options = {
    method: 'POST',
    body: JSON.stringify({
        "auth": {
            "identity": {
                "methods": [
                    "password"
                ],
                "password": {
                    "user": {
                        "name": "chanyeinthaw",
                        "password": "669870Is>032014",
                        "domain": {
                            "name": "OCRTesting"
                        }
                    }
                }
            },
            "scope": {
                "project": {
                    "id": "74b884dbb9b9497a9f236e71c209d235"
                }
            }
        }
    })
}