import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

const initialValues: IAddProjectFormValues = {
  projectTitle: '',
  thumbnailUrl: '',
  description: '',
  skillTags: [],
  leftButtonTitle: 'View Online',
  leftButtonUrl: '',
  rightButtonTitle: 'View Codes',
  rightButtonUrl: '',
  creatorId: '',
  creatorEmail: '',
  creatorDisplayName: '',
  creatorFirstName: '',
  creatorLastName: '',
  creatorDefaultUserName: '',
};

export default initialValues;
