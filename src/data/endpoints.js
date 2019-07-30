const API_URL = "https://ikfprgiyxd.execute-api.us-east-1.amazonaws.com";
const API_VERSION = "v1";

const TRUCK_ENDPOINT = "truck";
const CONTRACT_ENDPOINT = "contract";

export const TRUCK = [API_URL, API_VERSION, TRUCK_ENDPOINT].join("/");
export const CONTRACT = [API_URL, API_VERSION, CONTRACT_ENDPOINT].join("/");