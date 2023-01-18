import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {
  DeleteIconElement,
  EditIconElement,
} from '../../../../components/icons-elements';
import { ListButton } from '../../../../components/list-item-button-components/list-button';

const COMPONENT_NAME = 'CardHeaderMenu';
const CardHeaderMenu = (props: {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  cardId: string;
  cardDefaultUserName: string;
}) => {
  const {
    anchorEl,
    handleClose,
    open,
    cardId: cardid,
    cardDefaultUserName,
  } = props;

  return (
    <Menu
      id="simple-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      className="w-h-full"
    >
      <MenuItem onClick={handleClose} className="flex flex-col">
        <ListButton href="/" icon={<DeleteIconElement />} text="Delete" />
        <Divider component="div" role="presentation" flexItem />
        <ListButton
          href={`/${cardDefaultUserName}/edit-project/${cardid}`}
          icon={<EditIconElement />}
          text="Edit"
        />
      </MenuItem>
    </Menu>
  );
};

CardHeaderMenu.displayName = COMPONENT_NAME;

export { CardHeaderMenu };
