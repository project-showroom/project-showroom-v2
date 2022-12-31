import { useId } from 'react';

import classNames from 'classnames';

import { SubmitButton } from '../../../components/button-components/index';
import { LogInIconElement } from '../../../components/icons-elements';

const COMPONENT_NAME = 'LoginRegisterButton';
const LoginRegisterButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  const headerLoginButtonClassNames = classNames('bg-gray-600');
  const headerLoginClassNames = classNames('flex text-sm mr-1');
  return (
    <div id={id} {...rest} className={headerLoginClassNames}>
      <SubmitButton
        href="/api/google"
        variant="contained"
        className={headerLoginButtonClassNames}
        Icon={<LogInIconElement />}
      >
        Sign In / Up
      </SubmitButton>
    </div>
  );
};

LoginRegisterButton.displayName = COMPONENT_NAME;

export { LoginRegisterButton };
