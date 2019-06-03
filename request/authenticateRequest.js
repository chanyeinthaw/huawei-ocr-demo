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
                        "name": "OCRTesting",
                        "password": "HelloWorld",
                        "domain": {
                            "name": "lichufei"
                        }
                    }
                }
            },
            "scope": {
                "project": {
                    "id": "e2a3063b3abb4153ac4dfcd00ec81d9f"
                }
            }
        }
    })
}