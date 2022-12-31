import { useId } from 'react';

import classNames from 'classnames';

import { BaseTypography } from '../../../../components/typography-elements/index';

const COMPONENT_NAME = 'FormTitle';
const FormTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <BaseTypography
        gutterBottom
        variant="h4"
        component="h4"
        color="textPrimary"
      >
        {'Add Project'}
      </BaseTypography>
    </div>
  );
};

FormTitle.displayName = COMPONENT_NAME;

export { FormTitle };
