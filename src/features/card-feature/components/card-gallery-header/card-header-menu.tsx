import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  cardId?: string | undefined;
  cardDefaultUserName?: string;
  deleteCardById?: () => void;
}) => {
  const {
    anchorEl,
    handleClose,
    open,
    cardId: cardid,
    cardDefaultUserName,
    deleteCardById,
  } = props;

  const router = useRouter();

  const editCard = () => {
    router.push(`/${cardDefaultUserName}/edit-project/${cardid}`);
  };

  if (!cardid) return null;

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
        <ListButton
          onClick={deleteCardById}
          icon={<DeleteIconElement />}
          text="Delete"
          LinkComponent={Link}
        />
        <Divider component="div" role="presentation" flexItem />
        <ListButton
          onClick={() => editCard()}
          icon={<EditIconElement />}
          text="Edit"
          LinkComponent={Link}
        />
      </MenuItem>
    </Menu>
  );
};

CardHeaderMenu.displayName = COMPONENT_NAME;

export { CardHeaderMenu };
