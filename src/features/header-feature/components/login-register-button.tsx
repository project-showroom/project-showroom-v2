import { useId } from 'react';

import classNames from 'classnames';

import { SingInUpButton } from '../../../components/button-components/index';
import { LogInIconElement } from '../../../components/icons-elements';

const COMPONENT_NAME = 'LoginRegisterButton';
const LoginRegisterButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  const headerLoginClassNames = classNames('flex text-sm mr-1');
  return (
    <div id={id} {...rest} className={headerLoginClassNames}>
      <SingInUpButton
        href="/api/google"
        variant="contained"
        color="loginButtonColor"
        buttonIcon={<LogInIconElement />}
      >
        Sign In / Up
      </SingInUpButton>
    </div>
  );
};

LoginRegisterButton.displayName = COMPONENT_NAME;

export { LoginRegisterButton };
