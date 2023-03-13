import { FormTitleElement } from '../../../components/form-elements';
import { IUserType } from '../../../types/api-types';

const COMPONENT_NAME = 'MyDetailsFormTitle';
const MyDetailsFormTitle = (props: { user: IUserType }) => {
  const { user } = props;
  const { email } = user;
  return (
    <FormTitleElement>
      Manege Details <small>(E-Mail: {email})</small>
    </FormTitleElement>
  );
};

MyDetailsFormTitle.displayName = COMPONENT_NAME;

export { MyDetailsFormTitle };
