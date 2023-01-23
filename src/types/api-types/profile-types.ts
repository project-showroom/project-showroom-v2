import { UserInfoType } from '../element-types/form-elements-types/add-project-form-values';

export interface IProfileType {
  _id?: string;
  userName?: string;
  myDetails?: string;
  giveNameToButton?: string;
  addLinkToYourDetails?: string;
  profileTitle?: string;
  userInfo?: UserInfoType;
  createdAt?: Date;
}
