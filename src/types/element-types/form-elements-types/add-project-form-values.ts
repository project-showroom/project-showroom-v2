type UserInfoType = {
  userId?: string;
  defaultUserName: string;
  displayName: string;
};

export interface IAddProjectFormValues {
  userName?: string;
  projectTitle: string;
  thumbnailUrl: string;
  description: string;
  skillTags: Array<string | number>;
  leftButtonTitle?: string;
  leftButtonUrl?: string;
  rightButtonTitle?: string;
  rightButtonUrl?: string;
  userInfo: UserInfoType;
}
