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
  cardArray?: string[];
  creatorId: string;
  creatorEmail: string;
  creatorDisplayName: string;
  creatorFirstName: string;
  creatorLastName: string;
  creatorDefaultUserName: string;
}
