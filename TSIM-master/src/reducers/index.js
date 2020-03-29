import { combineReducers } from "redux";
import modal from "../components/modules/modal.reducers";
import loginSignup from "./loginSignup.reducer.js";
import event from "./event.reducer";
import blog from "./blog.reducer";

import profile from "./profile.reducer";
import toast from "../components/modules/toast.reducers";
import { demo } from "./demo";
import feed from "./feed.reducer";
import attendee from "./attendee.reducer";
export default combineReducers({
  demo,
  modal,
  profile,
  loginSignup,
  event,
  blog,
  feed,
  toast,
  attendee
});
