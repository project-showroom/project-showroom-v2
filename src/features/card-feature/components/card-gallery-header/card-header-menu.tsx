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
}) => {
  const { anchorEl, handleClose, open } = props;

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
        <li className="p-1">
          <ListButton href="/" icon={<DeleteIconElement />} text="Delete" />
        </li>
        <Divider component="div" role="presentation" flexItem />
        <li className="p-1">
          <ListButton
            href="/edit-project"
            icon={<EditIconElement />}
            text="Edit"
          />
        </li>
        <li className="p-1"></li>
      </MenuItem>
    </Menu>
  );
};

CardHeaderMenu.displayName = COMPONENT_NAME;

export { CardHeaderMenu };
