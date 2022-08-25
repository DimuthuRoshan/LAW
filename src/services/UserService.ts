import { appConfigs } from "../configs/config";

export const userService = () => {
  const executionEnv = process.env.NODE_ENV
  const baseUrl:any = appConfigs.config[executionEnv].apiBaseUrl;
  const userLogin = (userName:string, password:string) => {
    console.log(baseUrl);
    console.log(userName);
    console.log(password);
  };

  return { userLogin };
};

export const getAllUsers = async () => {
  const baseUrl = appConfigs.config[process.env.NODE_ENV].apiBaseUrl;
  console.log(appConfigs.config[process.env.NODE_ENV]);
  console.log(appConfigs);
  console.log(`${baseUrl}/users`);

  try {
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(`${baseUrl}/users`, { headers });
    const test = await response.json();
    console.log(test);
  } catch (error) {
    return [];
  }
};
