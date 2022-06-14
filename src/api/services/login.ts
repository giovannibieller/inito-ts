import EndPoints from '../endpoints';
import client from '../client/client';

async function post(username: string, password: string) {
  const body = {
    username: username,
    password: password
  };

  try {
    const res = await client.post(EndPoints.LOGIN, body);
    return res;
  } catch (error) {
    return {
      status: 'KO',
      error: error
    };
  }
}

export default { post };
