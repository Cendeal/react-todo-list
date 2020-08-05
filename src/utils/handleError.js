import {notification} from "antd";

export default (error) => {
    notification.error({
        message: `${error.response ? error.response.data : error.message || 'UNKNOWN ERROR, RETRY IT LATER'}, Please retry later!`
    });
    return error
}
