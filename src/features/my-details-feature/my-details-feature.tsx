import { useId } from 'react';

import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { IProfileType, IUserType } from '../../types/api-types';
import { MyDetailsForm } from './components/my-details-form';
import { MyDetailsFormTitle } from './components/my-details-form-title';

const COMPONENT_NAME = 'MyDetailsFuture';
const MyDetailsFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const { profile } = useSelector(
    (state: { profile: { profile: IProfileType } }) => state.profile,
  );
  const { user } = useSelector(
    (state: { user: { user: IUserType } }) => state.user,
  );

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <MyDetailsFormTitle user={user} />
      <MyDetailsForm profile={profile} user={user} />
    </div>
  );
};

MyDetailsFeature.displayName = COMPONENT_NAME;

export { MyDetailsFeature };
