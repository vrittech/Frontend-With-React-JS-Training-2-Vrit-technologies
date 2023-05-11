import { ToastOptions, toast } from "react-toastify";
import { toasterInterface } from "../interface/global.interface";

const toasterConfig: ToastOptions<toasterInterface> = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};


export const ToastifySuccess = (message: String) => {
    toast.success(message, toasterConfig);
}

export const ToastifyWarning = (message: String) => {
    toast.warning(message, toasterConfig);
}

export const ToastifyError = (message: String) => {
    toast.error(message, toasterConfig);
}


