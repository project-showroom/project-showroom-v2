import { FormTitleElement } from '../../../components/form-elements';

const COMPONENT_NAME = 'MyDetailsFormTitle';
const MyDetailsFormTitle = () => {
  return (
    <FormTitleElement>
      Manege Details <small>(E-Mail: kullanıcının e-mail)</small>
    </FormTitleElement>
  );
};

MyDetailsFormTitle.displayName = COMPONENT_NAME;

export { MyDetailsFormTitle };
