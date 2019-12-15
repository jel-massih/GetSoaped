import {ApiRequest} from './ApiClient'

const localStorageKey = '__bookshelf_token__'

function handleUserResponse({user: {token, ...user}}: any) {
  window.localStorage.setItem(localStorageKey, token)
  return user
}

export const getUser = () => {
  const token = getToken()
  if (!token) {
    return Promise.resolve(null)
  }
  return ApiRequest('me').catch(error => {
    logout()
    return Promise.reject(error)
  })
};

export const login = (username: string, password: string) => {
  return ApiRequest('login', {username, password}).then(handleUserResponse)
};

export const register = (username: string, password: string) => {
  return ApiRequest('register', {username, password}).then(
    handleUserResponse,
  )
};

export const logout = () => {
  window.localStorage.removeItem(localStorageKey)
  return Promise.resolve()
};

export const getToken = () => {
  return window.localStorage.getItem(localStorageKey)
};