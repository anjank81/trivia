import {
  SUCCESS,
  FAILURE,
  REQUESTING,
  ERROR,
  UID,
  USER_DETAILS
} from "../utils/constant";
import { get, post, put, postFormData } from "../utils/apiRequest.js";

import * as Cookie from "../utils/Cookie";
import { displayToast } from "../components/modules/toast.actions";
export const PROFILE_EVENT_REQUEST = "PROFILE_EVENT_REQUEST";
export const PROFILE_EVENT_SUCCESS = "PROFILE_EVENT_SUCCESS";
export const PROFILE_EVENT_FAILURE = "PROFILE_EVENT_FAILURE";

export const MILESTONE_EVENT_REQUEST = "MILESTONE_EVENT_REQUEST";
export const MILESTONE_EVENT_SUCCESS = "MILESTONE_EVENT_SUCCESS";
export const MILESTONE_EVENT_FAILURE = "MILESTONE_EVENT_FAILURE";

export const UPLOAD_VIDEO_REQUEST = "UPLOAD_VIDEO_REQUEST";
export const UPLOAD_VIDEO_SUCCESS = "UPLOAD_VIDEO_SUCCESS";
export const UPLOAD_VIDEO_FAILURE = "UPLOAD_VIDEO_FAILURE";

export const WORKEXP_EVENT_REQUEST = "WORKEXP_EVENT_REQUEST";
export const WORKEXP_EVENT_SUCCESS = "WORKEXP_EVENT_SUCCESS";
export const WORKEXP_EVENT_FAILURE = "WORKEXP_EVENT_FAILURE";

export const VOLUNTEER_EVENT_REQUEST = "VOLUNTEER_EVENT_REQUEST";
export const VOLUNTEER_EVENT_SUCCESS = "VOLUNTEER_EVENT_SUCCESS";
export const VOLUNTEER_EVENT_FAILURE = "VOLUNTEER_EVENT_FAILURE";

export const EDUCATION_EVENT_REQUEST = "EDUCATION_EVENT_REQUEST";
export const EDUCATION_EVENT_SUCCESS = "EDUCATION_EVENT_SUCCESS";
export const EDUCATION_EVENT_FAILURE = "EDUCATION_EVENT_FAILURE";

export const CERTIFICATION_EVENT_REQUEST = "CERTIFICATION_EVENT_REQUEST";
export const CERTIFICATION_EVENT_SUCCESS = "CERTIFICATION_EVENT_SUCCESS";
export const CERTIFICATION_EVENT_FAILURE = "CERTIFICATION_EVENT_FAILURE";

export const PUBLICATION_EVENT_REQUEST = "PUBLICATION_EVENT_REQUEST";
export const PUBLICATION_EVENT_SUCCESS = "PUBLICATION_EVENT_SUCCESS";
export const PUBLICATION_EVENT_FAILURE = "PUBLICATION_EVENT_FAILURE";

export const PATENT_EVENT_REQUEST = "PATENT_EVENT_REQUEST";
export const PATENT_EVENT_SUCCESS = "PATENT_EVENT_SUCCESS";
export const PATENT_EVENT_FAILURE = "PATENT_EVENT_FAILURE";

export const AWARD_EVENT_REQUEST = "AWARD_EVENT_REQUEST";
export const AWARD_EVENT_SUCCESS = "AWARD_EVENT_SUCCESS";
export const AWARD_EVENT_FAILURE = "AWARD_EVENT_FAILURE";

export const PROFILEIMAGE_EVENT_REQUEST = "PROFILEIMAGE_EVENT_REQUEST";
export const PROFILEIMAGE_EVENT_SUCCESS = "PROFILEIMAGE_EVENT_SUCCESS";
export const PROFILEIMAGE_EVENT_FAILURE = "PROFILEIMAGE_EVENT_FAILURE";

export const CV_EVENT_REQUEST = "CV_EVENT_REQUEST";
export const CV_EVENT_SUCCESS = "CV_EVENT_SUCCESS";
export const CV_EVENT_FAILURE = "CV_EVENT_FAILURE";

export const GETPROFILEIMAGE_EVENT_REQUEST = "GETPROFILEIMAGE_EVENT_REQUEST";
export const GETPROFILEIMAGE_EVENT_SUCCESS = "GETPROFILEIMAGE_EVENT_SUCCESS";
export const GETPROFILEIMAGE_EVENT_FAILURE = "GETPROFILEIMAGE_EVENT_FAILURE";

export const POST_USER_SKILL_REQUEST = "POST_USER_SKILL_REQUEST";
export const POST_USER_SKILL_SUCCESS = "POST_USER_SKILL_SUCCESS";
export const POST_USER_SKILL_FAILURE = "POST_USER_SKILL_FAILURE";

export const GET_USER_SKILL_REQUEST = "GET_USER_SKILL_REQUEST";
export const GET_USER_SKILL_SUCCESS = "GET_USER_SKILL_SUCCESS";
export const GET_USER_SKILL_FAILURE = "GET_USER_SKILL_FAILURE";

export const POST_USER_LANGUAGE_REQUEST = "POST_USER_LANGUAGE_REQUEST";
export const POST_USER_LANGUAGE_SUCCESS = "POST_USER_LANGUAGE_SUCCESS";
export const POST_USER_LANGUAGE_FAILURE = "POST_USER_LANGUAGE_FAILURE";

export const GET_USER_LANGUAGE_REQUEST = "GET_USER_LANGUAGE_REQUEST";
export const GET_USER_LANGUAGE_SUCCESS = "GET_USER_LANGUAGE_SUCCESS";
export const GET_USER_LANGUAGE_FAILURE = "GET_USER_LANGUAGE_FAILURE";

export const POST_USER_INTRESTS_REQUEST = "POST_USER_INTRESTS_REQUEST";
export const POST_USER_INTRESTS_SUCCESS = "POST_USER_INTRESTS_SUCCESS";
export const POST_USER_INTRESTS_FAILURE = "POST_USER_INTRESTS_FAILURE";

export const GET_USER_INTRESTS_REQUEST = "GET_USER_INTRESTS_REQUEST";
export const GET_USER_INTRESTS_SUCCESS = "GET_USER_INTRESTS_SUCCESS";
export const GET_USER_INTRESTS_FAILURE = "GET_USER_INTRESTS_FAILURE";

export const POST_USER_ACTIVITY_REQUEST = "POST_USER_ACTIVITY_REQUEST";
export const POST_USER_ACTIVITY_SUCCESS = "POST_USER_ACTIVITY_SUCCESS";
export const POST_USER_ACTIVITY_FAILURE = "POST_USER_ACTIVITY_FAILURE";

export const GET_USER_ACTIVITY_REQUEST = "GET_USER_ACTIVITY_REQUEST";
export const GET_USER_ACTIVITY_SUCCESS = "GET_USER_ACTIVITY_SUCCESS";
export const GET_USER_ACTIVITY_FAILURE = "GET_USER_ACTIVITY_FAILURE";

export const GET_PROFILE_DATA_REQUEST = "GET_PROFILE_DATA_REQUEST";
export const GET_PROFILE_DATA_SUCCESS = "GET_PROFILE_DATA_SUCCESS";
export const GET_PROFILE_DATA_FAILURE = "GET_PROFILE_DATA_FAILURE";

export const GET_MILESTONE_DATA_REQUEST = "GET_MILESTONE_DATA_REQUEST";
export const GET_MILESTONE_DATA_SUCCESS = "GET_MILESTONE_DATA_SUCCESS";
export const GET_MILESTONE_DATA_FAILURE = "GET_MILESTONE_DATA_FAILURE";

export const POST_PROFILE_VIDEO_REQUEST = "POST_PROFILE_VIDEO_REQUEST";
export const POST_PROFILE_VIDEO_SUCCESS = "POST_PROFILE_VIDEO_SUCCESS";
export const POST_PROFILE_VIDEO_FAILURE = "POST_PROFILE_VIDEO_FAILURE";

export const POST_PROFILE_EDIT_REQUEST = "POST_PROFILE_EDIT_REQUEST";
export const POST_PROFILE_EDIT_SUCCESS = "POST_PROFILE_EDIT_SUCCESS";
export const POST_PROFILE_EDIT_FAILURE = "POST_PROFILE_EDIT_FAILURE";

export function getUserActivityRequest() {
  return {
    type: GET_USER_ACTIVITY_REQUEST,
    status: REQUESTING
  };
}

export function getUserActivitySuccess(userActivityGetMessage) {
  return {
    type: GET_USER_ACTIVITY_SUCCESS,
    status: SUCCESS,
    userActivityGetMessage
  };
}

export function getUserActivityFailure(error) {
  return {
    type: GET_USER_ACTIVITY_FAILURE,
    status: ERROR,
    error
  };
}

export function getUserActivity() {
  return async dispatch => {
    dispatch(getUserActivityRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/skills`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(getUserActivitySuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getUserActivityFailure(e.message));
    }
  };
}

export function postUserActivityRequest() {
  return {
    type: POST_USER_ACTIVITY_REQUEST,
    status: REQUESTING
  };
}

export function postUserActivitySuccess(userActivityPostMessage) {
  return {
    type: POST_USER_ACTIVITY_SUCCESS,
    status: SUCCESS,
    userActivityPostMessage
  };
}

export function postUserActivityFailure(error) {
  return {
    type: POST_USER_ACTIVITY_FAILURE,
    status: ERROR,
    error
  };
}

export function postUserActivity(details) {
  return async dispatch => {
    dispatch(postUserActivityRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/skills`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(postUserActivitySuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(postUserActivityFailure(e.message));
    }
  };
}

export function getUserInterestsRequest() {
  return {
    type: GET_USER_INTRESTS_REQUEST,
    status: REQUESTING
  };
}

export function getUserInterestsSuccess(userInterestsGetMessage) {
  return {
    type: GET_USER_INTRESTS_SUCCESS,
    status: SUCCESS,
    userInterestsGetMessage
  };
}

export function getUserInterestsFailure(error) {
  return {
    type: GET_USER_INTRESTS_FAILURE,
    status: ERROR,
    error
  };
}

export function getUserInterests(key) {
  return async dispatch => {
    dispatch(getUserInterestsRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `skills?limit=5&name=${key}`;
      const result = await get(url);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(getUserInterestsSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getUserInterestsFailure(e.message));
    }
  };
}

export function postUserIntrestsRequest() {
  return {
    type: POST_USER_INTRESTS_REQUEST,
    status: REQUESTING
  };
}

export function postUserIntrestsSuccess(userInterestsPostMessage) {
  return {
    type: POST_USER_INTRESTS_SUCCESS,
    status: SUCCESS,
    userInterestsPostMessage
  };
}

export function postUserIntrestsFailure(error) {
  return {
    type: POST_USER_INTRESTS_FAILURE,
    status: ERROR,
    error
  };
}

export function postUserIntrests(details) {
  return async dispatch => {
    dispatch(postUserIntrestsRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/skills`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(postUserIntrestsSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(postUserIntrestsFailure(e.message));
    }
  };
}

export function postUserLanguageRequest() {
  return {
    type: POST_USER_LANGUAGE_REQUEST,
    status: REQUESTING
  };
}

export function postUserLanguageSuccess(userLanguagePostMessage) {
  return {
    type: POST_USER_LANGUAGE_SUCCESS,
    status: SUCCESS,
    userLanguagePostMessage
  };
}

export function postUserLanguageFailure(error) {
  return {
    type: POST_USER_LANGUAGE_FAILURE,
    status: ERROR,
    error
  };
}

export function postUserLanguage(details) {
  return async dispatch => {
    dispatch(postUserLanguageRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/languages`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(postUserLanguageSuccess(resultJson));
    } catch (e) {
      return dispatch(postUserLanguageFailure(e.message));
    }
  };
}

export function getUserLanguageRequest() {
  return {
    type: GET_USER_LANGUAGE_REQUEST,
    status: REQUESTING
  };
}

export function getUserLanguageSuccess(userLanguageGetMessage) {
  return {
    type: GET_USER_LANGUAGE_SUCCESS,
    status: SUCCESS,
    userLanguageGetMessage
  };
}

export function getUserLanguageFailure(error) {
  return {
    type: GET_USER_LANGUAGE_FAILURE,
    status: ERROR,
    error
  };
}

export function getUserLanguage(key) {
  return async dispatch => {
    dispatch(getUserLanguageRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `languages`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getUserLanguageSuccess(resultJson));
    } catch (e) {
      return dispatch(getUserLanguageFailure(e.message));
    }
  };
}

export function getUserSkillSuccess(userSkillGetMessage) {
  return {
    type: GET_USER_SKILL_SUCCESS,
    status: SUCCESS,
    userSkillGetMessage
  };
}

export function getUserSkillFailure(error) {
  return {
    type: GET_USER_SKILL_FAILURE,
    status: ERROR,
    error
  };
}
export function getUserSkillRequest() {
  return {
    type: GET_USER_SKILL_REQUEST,
    status: REQUESTING
  };
}

export function getUserSkill() {
  return async dispatch => {
    dispatch(getUserSkillRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `skills`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      // dispatch(displayToast("Well done"));
      return dispatch(getUserSkillSuccess(resultJson));
    } catch (e) {
      // dispatch(displayToast("No data available"));
      return dispatch(getUserSkillFailure(e.message));
    }
  };
}

export function postUserSkillRequest() {
  return {
    type: POST_USER_SKILL_REQUEST,
    status: REQUESTING
  };
}

export function postUserSkillSuccess(postUserSkills) {
  return {
    type: POST_USER_SKILL_SUCCESS,
    status: SUCCESS,
    postUserSkills
  };
}

export function postUserSkillFailure(error) {
  return {
    type: POST_USER_SKILL_FAILURE,
    status: ERROR,
    error
  };
}

export function postUserSkills(details) {
  return async dispatch => {
    dispatch(postUserSkillRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/skills`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(postUserSkillSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(postUserSkillFailure(e.message));
    }
  };
}

export function postProfileData() {
  return {
    type: PROFILE_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function profileEventSuccess(profileDetails) {
  return {
    type: PROFILE_EVENT_SUCCESS,
    status: SUCCESS,
    profileDetails
  };
}

export function profileEventFailure(error) {
  return {
    type: PROFILE_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function profileEvent(details) {
  return async dispatch => {
    dispatch(postProfileData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/profile`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(profileEventSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(profileEventFailure(e.message));
    }
  };
}

// add milestone event for profile

export function postMilestoneData() {
  return {
    type: MILESTONE_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function milestoneSuccess(milestoneDetails) {
  return {
    type: MILESTONE_EVENT_SUCCESS,
    status: SUCCESS,
    milestoneDetails
  };
}

export function milestoneFailure(error) {
  return {
    type: MILESTONE_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function milestoneEvent(details) {
  return async dispatch => {
    dispatch(postMilestoneData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/milestones`;
      const result = await postFormData(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(milestoneSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(milestoneFailure(e.message));
    }
  };
}

// add work experience event for profile

export function postWorkExperienceData() {
  return {
    type: WORKEXP_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function workExperienceSuccess(workExperienceEvent) {
  return {
    type: WORKEXP_EVENT_SUCCESS,
    status: SUCCESS,
    workExperienceEvent
  };
}

export function workExperienceFailure(error) {
  return {
    type: WORKEXP_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function workExperienceEvent(details) {
  return async dispatch => {
    dispatch(postWorkExperienceData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;

      let url = `users/${userId}/professional?actionType=work`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      if (resultJson.status === 200) {
        dispatch(displayToast(resultJson.message));
        return dispatch(workExperienceSuccess(resultJson));
      } else {
        dispatch(displayToast(resultJson.message));
      }
    } catch (e) {
      return dispatch(workExperienceFailure(e.message));
    }
  };
}

// add vounteer experience event for profile

export function postVolunteerExperienceData() {
  return {
    type: VOLUNTEER_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function volunteerExperienceSuccess(volunteerExperienceEvent) {
  return {
    type: VOLUNTEER_EVENT_SUCCESS,
    status: SUCCESS,
    volunteerExperienceEvent
  };
}

export function volunteerExperienceFailure(error) {
  return {
    type: VOLUNTEER_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function volunteerExperienceEvent(details) {
  return async dispatch => {
    dispatch(postVolunteerExperienceData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/professional/?actionType=volunteer`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Well done"));
      return dispatch(volunteerExperienceSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(volunteerExperienceFailure(e.message));
    }
  };
}

// add education experience event for profile

export function postEducationData() {
  return {
    type: EDUCATION_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function educationExperienceSuccess(educationExperienceEvent) {
  return {
    type: EDUCATION_EVENT_SUCCESS,
    status: SUCCESS,
    educationExperienceEvent
  };
}

export function educationExperienceFailure(error) {
  return {
    type: EDUCATION_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function educationExperienceEvent(details) {
  return async dispatch => {
    dispatch(postEducationData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/professional/?actionType=education`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      if (resultJson.status === "200") {
        dispatch(displayToast(resultJson.message));
        return dispatch(educationExperienceSuccess(resultJson));
      } else {
        dispatch(displayToast(resultJson.message));
      }
    } catch (e) {
      return dispatch(educationExperienceFailure(e.message));
    }
  };
}

// add certification experience event for profile

export function postCertificationData() {
  return {
    type: CERTIFICATION_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function certificationExperienceSuccess(certificationExperienceEvent) {
  return {
    type: CERTIFICATION_EVENT_SUCCESS,
    status: SUCCESS,
    certificationExperienceEvent
  };
}

export function certificationExperienceFailure(error) {
  return {
    type: CERTIFICATION_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function certificationExperienceEvent(details) {
  return async dispatch => {
    dispatch(postCertificationData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/professional?actionType=certification`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      if (resultJson.status === "200") {
        dispatch(displayToast("Well done"));
        return dispatch(certificationExperienceSuccess(resultJson));
      }
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(certificationExperienceFailure(e.message));
    }
  };
}

// add publication experience event for profile

export function postPublicationData() {
  return {
    type: PUBLICATION_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function publicationExperienceSuccess(publicationExperienceEvent) {
  return {
    type: PUBLICATION_EVENT_SUCCESS,
    status: SUCCESS,
    publicationExperienceEvent
  };
}

export function publicationExperienceFailure(error) {
  return {
    type: PUBLICATION_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function publicationExperienceEvent(details) {
  return async dispatch => {
    dispatch(postPublicationData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/professional/?actionType=publication`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      if (resultJson.status === "200") {
        dispatch(displayToast("Well done"));
        return dispatch(publicationExperienceSuccess(resultJson));
      }
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(publicationExperienceFailure(e.message));
    }
  };
}

// add patent experience event for profile

export function postPatentData() {
  return {
    type: PATENT_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function patentExperienceSuccess(patentExperienceEvent) {
  return {
    type: PATENT_EVENT_SUCCESS,
    status: SUCCESS,
    patentExperienceEvent
  };
}

export function patentExperienceFailure(error) {
  return {
    type: PATENT_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function patentExperienceEvent(details) {
  return async dispatch => {
    dispatch(postPatentData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/professional/?actionType=patent`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      if (resultJson.status === "200") {
        dispatch(displayToast("Well done"));
        return dispatch(patentExperienceSuccess(resultJson));
      }
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(patentExperienceFailure(e.message));
    }
  };
}

// add patent experience event for profile

export function postAwardData() {
  return {
    type: AWARD_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function awardExperienceSuccess(awardExperienceEvent) {
  return {
    type: AWARD_EVENT_SUCCESS,
    status: SUCCESS,
    awardExperienceEvent
  };
}

export function awardExperienceFailure(error) {
  return {
    type: AWARD_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function awardExperienceEvent(details) {
  return async dispatch => {
    dispatch(postAwardData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/professional/?actionType=honourAwards`;
      const result = await post(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      if (resultJson.status === "200") {
        dispatch(displayToast(resultJson.message));
        return dispatch(awardExperienceSuccess(resultJson));
      } else {
        dispatch(displayToast(resultJson.message));
      }
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(awardExperienceFailure(e.message));
    }
  };
}

// upload profile image event for profile

export function postProfileImageDataRequesting() {
  return {
    type: PROFILEIMAGE_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function profileImageExperienceSuccess(profileImage) {
  return {
    type: PROFILEIMAGE_EVENT_SUCCESS,
    status: SUCCESS,
    profileImage
  };
}

export function profileImageExperienceFailure(error) {
  return {
    type: PROFILEIMAGE_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function profileImageExperienceEvent(details) {
  return async dispatch => {
    dispatch(postProfileImageDataRequesting());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/uploadProfilePhotos`;
      const result = await postFormData(url, details);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      // if (resultJson.status === "200") {
      dispatch(displayToast(resultJson.message));
      return dispatch(profileImageExperienceSuccess(resultJson));
      // }
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(profileImageExperienceFailure(e.message));
    }
  };
}

// upload CV event for profile

export function postCVData() {
  return {
    type: CV_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function postCVSuccess(postCvDetails) {
  return {
    type: CV_EVENT_SUCCESS,
    status: SUCCESS,
    postCvDetails
  };
}

export function postCVFailure(error) {
  return {
    type: CV_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function postCVExperienceEvent(details) {
  return async dispatch => {
    dispatch(postCVData());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/uploadCv`;
      const result = await postFormData(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast(resultJson.message));
      return dispatch(postCVSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(postCVFailure(e.message));
    }
  };
}

// GET API CALLS

// profile get data

export function getProfileDetailsRequest() {
  return {
    type: GET_PROFILE_DATA_REQUEST,
    status: REQUESTING
  };
}

export function getProfileDetailsSuccess(userProfileDetails) {
  return {
    type: GET_PROFILE_DATA_SUCCESS,
    status: SUCCESS,
    userProfileDetails
  };
}

export function getProfileDetailsFailure(error) {
  return {
    type: GET_PROFILE_DATA_FAILURE,
    status: ERROR,
    error
  };
}

export function getProfileDetails() {
  return async dispatch => {
    dispatch(getProfileDetailsRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/profile`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      // dispatch(getBlogComment(id));
      return dispatch(getProfileDetailsSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getProfileDetailsFailure(e.message));
    }
  };
}

// milestone get data

export function getMilestoneDetailsRequest() {
  return {
    type: GET_MILESTONE_DATA_REQUEST,
    status: REQUESTING
  };
}

export function getMilestoneDetailsSuccess(getMilestoneDetails) {
  return {
    type: GET_MILESTONE_DATA_SUCCESS,
    status: SUCCESS,
    getMilestoneDetails
  };
}

export function getMilestoneDetailsFailure(error) {
  return {
    type: GET_MILESTONE_DATA_FAILURE,
    status: ERROR,
    error
  };
}

export function getMilestoneDetails() {
  return async dispatch => {
    dispatch(getMilestoneDetailsRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/milestones`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      // dispatch(getBlogComment(id));
      return dispatch(getMilestoneDetailsSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getMilestoneDetailsFailure(e.message));
    }
  };
}

//profile get profile video

export function postProfileVideoRequest() {
  return {
    type: POST_PROFILE_VIDEO_REQUEST,
    status: REQUESTING
  };
}

export function postProfileVideoSuccess(profileVideo) {
  return {
    type: POST_PROFILE_VIDEO_SUCCESS,
    status: SUCCESS,
    profileVideo
  };
}

export function postProfileVideoFailure(error) {
  return {
    type: POST_PROFILE_VIDEO_FAILURE,
    status: ERROR,
    error
  };
}

export function postProfileVideoData(details) {
  return async dispatch => {
    dispatch(postProfileVideoRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/uploadIntroVideo`;
      const result = await postFormData(url, details);
      const resultJson = await result.data;

      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast(resultJson.message));
      return dispatch(postProfileVideoSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(postProfileVideoFailure(e.message));
    }
  };
}
