
export const domain = 'https://recipe-sharing-platform.herokuapp.com'

export const authHeader = {
    headers: {
        'auth-token': localStorage.getItem('auth-token')
    }
}
