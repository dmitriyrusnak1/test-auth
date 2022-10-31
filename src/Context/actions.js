export const email = 'admin@gmail.com'
const pass = 'admin123'

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let isAuth = (loginPayload.email === email && loginPayload.password === pass) ? true : false
    if (isAuth) {
        let data = {
            email, 
            token: btoa(email)
        }
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        localStorage.setItem('currentUser', JSON.stringify(data));
        return data
    }
 
    dispatch({ type: 'LOGIN_ERROR', error: 'wrong email or password!'});
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: 'network error' });
  }
}

export async function me(dispatch, token){
  try{
    let email = atob(token)
    dispatch({type: 'AUTH_ME', payload: email})
  }catch(err){
    console.log(err)
  }
}
 
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}