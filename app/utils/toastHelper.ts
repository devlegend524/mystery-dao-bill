import { ToastOptions, toast } from 'react-toastify';

export const notify = (type:any, message:string) => {
  const options:ToastOptions =
  {
    position: "bottom-right",
    theme: "dark",
    hideProgressBar: true,
    pauseOnHover: false
  }

  switch (type) {
    case type === 'success':
      toast.success(message, options);
      break;
    case type === 'error':
      toast.error(message, options);
      break;
    case type === 'warning':
      toast.warn(message, options);
      break;
    case type === 'info':
      toast.info(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
}