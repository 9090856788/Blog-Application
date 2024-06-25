/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import {
  setId,
  setUserName,
  setEmail,
  setMessage,
  setOpen,
  setLoading,
} from "./reducers";

const provideUserAuthDetails = () => {
  const dispatch = useDispatch();
  return {
    setId: (id) => dispatch(setId(id)),
    setUserName: (UserName) => dispatch(setUserName(UserName)),
    setEmail: (email) => dispatch(setEmail(email)),
    setMessage: (message) => dispatch(setMessage(message)),
    setOpen: (open) => dispatch(setOpen(open)),
    setLoading: (loading) => dispatch(setLoading(loading)),
  };
};

export default provideUserAuthDetails;
