import axios from 'axios';
import { DOMAIN } from '../ultil/settings/config';

export const signup = async (user) => {
  try {
    const res = await axios.post(`${DOMAIN}api/Users/signup`, user);
    if (res.status === 200) {
      window.alert(res.data.message);
    }
  } catch (err) {
    window.alert('Lỗi: ' + err.response.data.message);
  }
};
