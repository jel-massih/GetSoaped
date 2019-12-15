import {getUser} from './AuthClient'

export const bootstrapAppData = async () => {
  const user = await getUser();

  return {
    user
  };
};