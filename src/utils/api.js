import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyB1_ZyQ_mKY19AWu7xtpLzHKCm6x6AYo24",
    cx: "f0c95f8f26cdc442e",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};


// AIzaSyB1_ZyQ_mKY19AWu7xtpLzHKCm6x6AYo24
// f0c95f8f26cdc442e