import { Copyright, CopyrightExplanation } from './index';

const COMPONENT_NAME = 'FooterFeature';
const FooterFeature = () => {
  return (
    <>
      <Copyright />
      <CopyrightExplanation />
    </>
  );
};

FooterFeature.displayName = COMPONENT_NAME;

export { FooterFeature };
