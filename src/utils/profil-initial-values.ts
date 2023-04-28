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
      myImageUrl:
        profile.myImageUrl || 'https://fakeimg.pl/400x400/?text=No+Image',
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
    myImageUrl: 'https://fakeimg.pl/400x400/?text=No+Image',
  };
};
export default initialProfileValuesFunc;
