import axios from 'axios';

export const signup = async (user) => {
  try {
    const res = await axios.post(
      'https://shop.cyberlearn.vn/api/Users/signup',
      user,
    );
    if (res.status === 200) {
      window.alert(res.data.message);
    }
  } catch (err) {
    window.alert('Lỗi: ' + err.response.data.message);
  }
};
