import ListItemIcon from '@mui/material/ListItemIcon';

const COMPONENT_NAME = 'ListIcon';
const ListIcon = (props: any) => {
  const { icon } = props;

  return <ListItemIcon>{icon}</ListItemIcon>;
};

ListIcon.displayName = COMPONENT_NAME;

export { ListIcon };
