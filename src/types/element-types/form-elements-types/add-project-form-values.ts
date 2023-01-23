export type UserInfoType = {
  userId?: string;
  userEmail?: string;
  defaultUserName?: string;
  displayName?: string;
};

export interface IAddProjectFormValues {
  _id?: string;
  userName?: string;
  projectTitle?: string;
  thumbnailUrl?: string;
  description?: string;
  skillTags?: Array<string | number>;
  leftButtonTitle?: string;
  leftButtonUrl?: string;
  rightButtonTitle?: string;
  rightButtonUrl?: string;
  userInfo?: UserInfoType;
  createdAt?: Date;
}
