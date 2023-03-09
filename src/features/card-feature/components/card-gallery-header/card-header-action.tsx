import React, { useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import { CardHeaderMenu } from './index';

const COMPONENT_NAME = 'CardHeaderAction';
const CardHeaderAction = (props: {
  cardId?: string;
  cardDefaultUserName?: string;
  deleteCardById?: () => void;
}) => {
  const { cardId, cardDefaultUserName, deleteCardById } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <CardHeaderMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        cardId={cardId}
        cardDefaultUserName={cardDefaultUserName}
        deleteCardById={deleteCardById}
      />
    </>
  );
};

CardHeaderAction.displayName = COMPONENT_NAME;

export { CardHeaderAction };
