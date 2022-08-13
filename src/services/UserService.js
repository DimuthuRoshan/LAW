import { appConfigs } from "../configs/config";


export const getAllUsers = async () => {
    const baseUrl = appConfigs.config[process.env.NODE_ENV].apiBaseUrl;
    console.log(appConfigs.config[process.env.NODE_ENV]);
    console.log(appConfigs);
    console.log(`${baseUrl}/users`);

    try{
        const headers = { 'Content-Type': 'application/json' }
        const response = await fetch(`${baseUrl}/users`,{headers});
        const test =  await response.json();
        console.log(test);
    }catch(error) {
        return [];
    }
}
