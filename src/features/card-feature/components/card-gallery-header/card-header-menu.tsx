import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

import {
  DeleteIconElement,
  EditIconElement,
} from '../../../../components/icons-elements';
import { ListItemIconButton } from '../../../header-feature';

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
          <ListItemIconButton
            url="/"
            text="Delete"
            ListIcon={<EditIconElement />}
          />
        </li>
        <Divider component="div" role="presentation" flexItem />
        <li className="p-1">
          <ListItemIconButton
            url="/edit-project"
            text="Edit"
            ListIcon={<EditIconElement />}
          />
        </li>
        <li className="p-1"></li>
      </MenuItem>
    </Menu>
  );
};

CardHeaderMenu.displayName = COMPONENT_NAME;

export { CardHeaderMenu };
