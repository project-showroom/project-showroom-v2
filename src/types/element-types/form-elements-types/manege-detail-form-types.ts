export type ProfileInfoType = {
  userId?: string | undefined;
  userEmail?: string | undefined;
  defaultUserName?: string | undefined;
  displayName?: string | undefined;
};
export interface IManegeDetailsFormValues {
  userName?: string | undefined;
  myDetails?: string | undefined;
  giveNameToButton?: string | undefined;
  addLinkToYourDetails?: string | undefined;
  profileTitle?: string | undefined;
  userInfo?: ProfileInfoType;
}
