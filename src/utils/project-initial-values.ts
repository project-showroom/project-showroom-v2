import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

const initialFormValuesFunc = (
  editProject: IAddProjectFormValues | any,
  tags: any,
) => {
  if (editProject && tags)
    return {
      projectTitle: editProject.projectTitle,
      thumbnailUrl: editProject.thumbnailUrl,
      description: editProject.description,
      skillTags: tags,
      leftButtonTitle: 'View Online',
      leftButtonUrl: editProject.leftButtonUrl,
      rightButtonTitle: 'View Codes',
      rightButtonUrl: editProject.rightButtonUrl,
      userInfo: { ...editProject.userInfo },
    };
  return {
    projectTitle: '',
    thumbnailUrl: '',
    description: '',
    skillTags: tags,
    leftButtonTitle: 'View Online',
    leftButtonUrl: '',
    rightButtonTitle: 'View Codes',
    rightButtonUrl: '',
    userInfo: '',
  };
};
export default initialFormValuesFunc;
