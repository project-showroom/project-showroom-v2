import { IListButtonType } from '../../types/element-types/list-elements-types';
import { BaseListButton } from '../list-item-button-elements';
import { ListIcon } from '../list-item-icon-components';

const COMPONENT_NAME = 'ListButton';
const ListButton = (props: IListButtonType) => {
  const { text, ...rest } = props;

  return (
    <BaseListButton {...rest}>
      <ListIcon {...rest} />
      {text}
    </BaseListButton>
  );
};

ListButton.displayName = COMPONENT_NAME;

export { ListButton };
