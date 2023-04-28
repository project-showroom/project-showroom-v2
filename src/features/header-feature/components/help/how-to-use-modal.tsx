import { useId } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Modal, { ModalProps } from '@mui/material/Modal';
import classNames from 'classnames';

const COMPONENT_NAME = 'HowToUseModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type HowToUseModalProps = Omit<ModalProps, 'children'> & {
  className?: string;
};

const HowToUseModal = ({ className = '', ...rest }: HowToUseModalProps) => {
  const id = useId() + '-' + COMPONENT_NAME;

  return (
    <>
      <Modal
        id={id}
        {...rest}
        className={classNames(className, COMPONENT_NAME)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
              <ListItemText
                primary="How To Use The Project Showroom?"
                secondary="You can follow these steps to use this website!"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar>1</ListItemAvatar>
              <ListItemText
                primary="Login / Register"
                secondary="Login / Register with your Google Account"
              />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemAvatar>2</ListItemAvatar>
              <ListItemText
                primary="Add A New Project"
                secondary="You can add your project in details"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>3</ListItemAvatar>
              <ListItemText
                primary="Manage Your Details"
                secondary="You can talk about yourself more!"
              />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemAvatar>4</ListItemAvatar>
              <ListItemText
                primary="That's it!"
                secondary="Your project showroom is ready! You can share your page with people!"
              />
            </ListItem>
          </List>
        </Box>
      </Modal>
    </>
  );
};

HowToUseModal.displayName = COMPONENT_NAME;

export { HowToUseModal };
