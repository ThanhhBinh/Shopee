import axios from "axios";
import AppUrl from "./AppURL";
import store from "../state/store";

var token = store.getState().user.token;

const axiosInstanceConfig = {
    baseURL: AppUrl.BaseURL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

// Kiểm tra nếu token không rỗng và thêm header Authorization
if (token !== "") {
    axiosInstanceConfig.headers["Authorization"] = `Bearer ${token}`;
}

// Lắng nghe thay đổi của store để cập nhật token
store.subscribe(() => {
    const newToken = store.getState().user.token;
    axiosInstance.defaults.headers["Authorization"] = newToken
        ? `Bearer ${newToken}`
        : null;
});

// Tạo instance axios với cấu hình đã thiết lập
export const axiosInstance = axios.create(axiosInstanceConfig);
