import * as yup from 'yup';

const validationSchema = yup.object({
  projectTitle: yup.string().required('Required'),
  thumbnailUrl: yup.string().required('Required'),
  leftButtonUrl: yup.string().required('Required'),
  rightButtonUrl: yup.string().required('Required'),
  leftButtonTitle: yup.string().required('Required'),
  rightButtonTitle: yup.string().required('Required'),
});

export default validationSchema;
