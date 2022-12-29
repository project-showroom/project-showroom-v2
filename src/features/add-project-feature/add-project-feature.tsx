import { useId } from 'react';

import classNames from 'classnames';

import { AddProjectForm } from '../../components/add-project-form/index';
import { FormTitle } from './index';

const COMPONENT_NAME = 'AddProjectFeature';
const AddProjectFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <FormTitle />
      <AddProjectForm />
    </div>
  );
};

AddProjectFeature.displayName = COMPONENT_NAME;

export { AddProjectFeature };
