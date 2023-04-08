import { useId } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';

import { CardItem } from '../components/card-item';

const COMPONENT_NAME = 'FavoriteCards';
const FavoriteCards = ({ className = '', ...rest }: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CardItem />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

FavoriteCards.displayName = COMPONENT_NAME;

export { FavoriteCards };
