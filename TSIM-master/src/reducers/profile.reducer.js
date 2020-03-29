import * as profileAction from "../actions/profile.action";

const profile = (
  state = {
    status: null,
    error: null,
    loading: false,
    profileDetails: null,
    milestoneDetails: null,
    workDetails: null,
    volunteer: null,
    educationExperienceEvent: null,
    certificationExperienceEvent: null,
    publicationExperienceEvent: null,
    patentExperienceEvent: null,
    awardExperienceEvent: null,
    profileImage: null,
    getprofileImage: null,
    postUserSkill: null,
    getUserSkills: null,
    postUserLanguages: null,
    getUserLanguages: [],
    postUserInterest: null,
    getUserInterest: [],
    postUserActivities: null,
    getUserActivities: [],
    userProfileDetails: null,
    getMilestoneDetails: null,
    getCv: null,
    getVideo: null,
    userSkillGetMessage: null,
    userLanguageGetMessage: null,
    volunteerExperienceEvent: null,
    postMilestoneDetails: null,
    workExperienceEvent: null,
    postSkillStatus: null,
    postLanguageStatus: null,
    postuserLanguage: null,
    profileEditdetails: null,
    pstCvdetails: null
  },
  action
) => {
  switch (action.type) {
    case profileAction.PROFILE_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        postSkillStatus: null,
        postLanguageStatus: null,
        loading: true
      });

    case profileAction.PROFILE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        pstCvdetails: null,
        loading: false,
        profileDetails: action.profileDetails
      });
    case profileAction.PROFILE_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.MILESTONE_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.MILESTONE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        postMilestoneDetails: action.milestoneDetails
      });
    case profileAction.MILESTONE_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    // work

    case profileAction.WORKEXP_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.WORKEXP_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        workExperienceEvent: action.workExperienceEvent
      });
    case profileAction.WORKEXP_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //vounteer

    case profileAction.VOLUNTEER_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.VOLUNTEER_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        volunteerExperienceEvent: action.volunteerExperienceEvent
      });
    case profileAction.VOLUNTEER_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //education

    case profileAction.EDUCATION_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.EDUCATION_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        educationExperienceEvent: action.educationExperienceEvent
      });
    case profileAction.EDUCATION_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //certification

    case profileAction.CERTIFICATION_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.CERTIFICATION_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        certificationExperienceEvent: action.certificationExperienceEvent
      });
    case profileAction.CERTIFICATION_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //publication

    case profileAction.PUBLICATION_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.PUBLICATION_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        publicationExperienceEvent: action.publicationExperienceEvent
      });
    case profileAction.PUBLICATION_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //patent

    case profileAction.PATENT_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.PATENT_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        patentExperienceEvent: action.patentExperienceEvent
      });
    case profileAction.PATENT_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //award

    case profileAction.AWARD_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.AWARD_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        awardExperienceEvent: action.awardExperienceEvent
      });
    case profileAction.AWARD_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //profile image

    case profileAction.PROFILEIMAGE_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.PROFILEIMAGE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        profileImage: action.profileImage
      });
    case profileAction.PROFILEIMAGE_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    //profile image

    case profileAction.GETPROFILEIMAGE_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GETPROFILEIMAGE_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        getprofileImage: action.profileImage
      });
    case profileAction.GETPROFILEIMAGE_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.POST_USER_SKILL_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        postUserSkills: action.postUserSkills
      });
    case profileAction.POST_USER_SKILL_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.GET_USER_SKILL_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GET_USER_SKILL_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userSkillGetMessage: action.userSkillGetMessage
      });
    case profileAction.GET_USER_SKILL_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.POST_USER_INTRESTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.POST_USER_INTRESTS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        postUserInterest: action.userInterestsPostMessage
      });
    case profileAction.POST_USER_INTRESTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.GET_USER_INTRESTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GET_USER_INTRESTS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        getUserInterest: action.userInterestsGetMessage
      });
    case profileAction.GET_USER_INTRESTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.POST_USER_LANGUAGE_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.POST_USER_LANGUAGE_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        postLanguageStatus: action.postLanguageStatus,
        loading: false,
        postuserLanguage: action.userLanguagePostMessage
      });
    case profileAction.POST_USER_LANGUAGE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.GET_USER_LANGUAGE_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GET_USER_LANGUAGE_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userLanguageGetMessage: action.userLanguageGetMessage
      });
    case profileAction.GET_USER_LANGUAGE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.POST_USER_ACTIVITY_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        postSkillStatus: null,
        loading: true
      });

    case profileAction.POST_USER_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        postSkillStatus: action.status,
        loading: false,
        postUserActivities: action.userActivityPostMessage
      });
    case profileAction.POST_USER_ACTIVITY_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.GET_USER_ACTIVITY_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GET_USER_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userActivityGetMessage: action.userActivityGetMessage
      });
    case profileAction.GET_USER_ACTIVITY_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.GET_PROFILE_DATA_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GET_PROFILE_DATA_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userProfileDetails: action.userProfileDetails
      });
    case profileAction.GET_PROFILE_DATA_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.GET_MILESTONE_DATA_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.GET_MILESTONE_DATA_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        getMilestoneDetails: action.getMilestoneDetails
      });
    case profileAction.GET_MILESTONE_DATA_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.CV_EVENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.CV_EVENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        pstCvdetails: action.postCvDetails
      });
    case profileAction.CV_EVENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case profileAction.POST_PROFILE_VIDEO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.POST_PROFILE_VIDEO_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        getVideo: action.profileVideo
      });
    case profileAction.POST_PROFILE_VIDEO_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    default:
      return state;
  }
};
export default profile;
