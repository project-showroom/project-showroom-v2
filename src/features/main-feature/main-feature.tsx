import { Container, Divider } from '@mui/material';

import { CardFeature } from '../card-feature';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = () => {
  return (
    <>
      <Container maxWidth="md">
        {/* <HeroName />
        <HeroDetails />
        <HeroButtons firstButtonText={'My projects'} /> */}
        <Divider />
      </Container>
      <CardFeature />
    </>
  );
};

MainFeature.displayName = COMPONENT_NAME;

export { MainFeature };
