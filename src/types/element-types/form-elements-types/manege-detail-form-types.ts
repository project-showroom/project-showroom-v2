export type ProfileInfoType = {
  userId?: string;
  userEmail?: string;
  defaultUserName?: string;
  displayName?: string;
};
export interface IManegeDetailsFormValues {
  userName?: string;
  myDetails?: string;
  giveNameToButton?: string;
  addLinkToYourDetails?: string;
  profileTitle?: string;
  userInfo?: ProfileInfoType;
}
