/* eslint-disable no-undef */
import { getDecodedAccessToken } from "../utils";
import axios from "./axios";
import {storageService} from "./index";

export default class IdentityService {
  async logout() {
    storageService.clearCookieData();
    return window.location.replace(process.env.REACT_APP_LOGIN_URL);
  }
  
  async isAuthenticated() {
    const authData = storageService.getAuthData();
    if (!authData.accessToken) {
      return false;
    }
    return true;
  }

  async signUp(signUpData) {
    storageService.clearAuthData()
    const response = await axios.post(`api/signup`, signUpData);
    
    const userData = getDecodedAccessToken(response.data);
    
    storageService.saveAuthData({
      accessToken: response.data.accessToken,
      userName: response.data.userName,
      expires_in: userData.exp
    })
    return response.data;
  }

  async login(loginData) {
    storageService.clearAuthData()
    const response = await axios.post(`api/auth/login`, loginData);
    
    const userData = getDecodedAccessToken(response.data);
    
    storageService.saveAuthData({
      accessToken: response.data.accessToken,
      userName: response.data.userName,
      expires_in: userData.exp
    })
    return response.data;
  }
}