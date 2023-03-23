import { useId } from 'react';

import * as icons from '@icons-pack/react-simple-icons';
import { IconType } from '@icons-pack/react-simple-icons';
import classNames from 'classnames';
const iconComponents: { [key: string]: IconType } = icons;

const COMPONENT_NAME = 'GenericIconWithText';
const GenericIconWithText = ({
  className = '',
  option = '',
  ...rest
}: {
  className?: string;
  option?: string | number;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const IconComponent = iconComponents['Si' + option];

  return (
    <div
      id={id}
      {...rest}
      className={classNames(
        className,
        COMPONENT_NAME,
        'flex max-h-5 gap-2 items-center justify-center',
      )}
    >
      {IconComponent && <IconComponent size={16} />}
      <span>{option}</span>
    </div>
  );
};

GenericIconWithText.displayName = COMPONENT_NAME;

export { GenericIconWithText };
