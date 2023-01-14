import { useId } from 'react';

import classNames from 'classnames';

import { IUser } from '../../models/Users';
import { FormTitle, AddProjectForm } from './index';

const COMPONENT_NAME = 'AddProjectFeature';
const AddProjectFeature = (props: { className?: string; user: IUser }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, user, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <FormTitle />
      <AddProjectForm user={user} />
    </div>
  );
};

AddProjectFeature.displayName = COMPONENT_NAME;

export { AddProjectFeature };
