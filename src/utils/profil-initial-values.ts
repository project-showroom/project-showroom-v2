import { IManegeDetailsFormValues } from '../types/element-types/form-elements-types';

const initialProfileValuesFunc = (
  profile: IManegeDetailsFormValues,
  user: any,
) => {
  if (profile)
    return {
      userName: profile.userInfo?.defaultUserName,
      myDetails: profile.myDetails,
      giveNameToButton: profile.giveNameToButton,
      addLinkToYourDetails: profile.addLinkToYourDetails,
      profileTitle: profile.profileTitle,
      userInfo: { ...profile.userInfo },
    };
  return {
    userName: user.defaultUserName,
    myDetails: '',
    giveNameToButton: '',
    addLinkToYourDetails: '',
    profileTitle: '',
    userInfo: {
      userId: '',
      userEmail: '',
      defaultUserName: '',
      displayName: '',
    },
  };
};
export default initialProfileValuesFunc;
