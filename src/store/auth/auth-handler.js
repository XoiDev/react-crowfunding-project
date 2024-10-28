// import { call } from "redux-saga/effects";
// import { requesAuthRegister } from "./auth-requests";
// import { toast } from "react-toastify";

// export default function* handleAuthRegister(action) {

//   const { payload, type } = action;
//   try {
//     const response = yield call(requesAuthRegister, payload);
//     if (response.status === 201) {
//       toast.success("create new accoutn succcesfully!");
//     }
//   } catch (error) {}
// }

import { call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { requesAuthRegister } from "./auth-requests";
export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requesAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}
