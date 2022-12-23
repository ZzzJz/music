import http from "@/utils/request";

export const checkPhone = (params: { phone: String }) => {
  return http.post('/cellphone/existence/check', params)
}

export const login = (params: { phone: String, password: String }) => {
  return http.post('/login/cellphone', params)
}