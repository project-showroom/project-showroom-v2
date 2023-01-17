import { useId } from 'react';

import classNames from 'classnames';

import { FormTitle, EditProjectForm } from './index';

const COMPONENT_NAME = 'EditProjectFeature';
const EditProjectFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <FormTitle />
      <EditProjectForm />
    </div>
  );
};

EditProjectFeature.displayName = COMPONENT_NAME;

export { EditProjectFeature };
