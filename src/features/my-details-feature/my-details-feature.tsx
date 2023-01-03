import { useId } from 'react';

import classNames from 'classnames';

import { MyDetailsForm } from './components/my-details-form';
import { MyDetailsFormTitle } from './components/my-details-form-title';

const COMPONENT_NAME = 'MyDetailsFuture';
const MyDetailsFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <MyDetailsFormTitle />
      <MyDetailsForm />
    </div>
  );
};

MyDetailsFeature.displayName = COMPONENT_NAME;

export { MyDetailsFeature };
