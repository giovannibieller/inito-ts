import Api from '@api/index';
import useApi from './useApi';

const useGetUsers = () => {
  return useApi(Api.users.get);
};

export default useGetUsers;
