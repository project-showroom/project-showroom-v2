import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../components/button-components';
import { iconAction } from '../../store/icon-slice';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = () => {
  const dispatcher = useDispatch();

  let icon = useSelector((state: { icon: { icon: string } }) => state.icon);

  const onChangeTheme = () => {
    if (icon.icon === 'moon') dispatcher(iconAction.iconSun());
    else dispatcher(iconAction.iconMoon());
  };

  return (
    <>
      Hello Tailwind
      <p>deneme</p>
      <button onClick={onChangeTheme}>Change Theme</button>
      <b>You selected (Redux-Toolkit): </b>
      <i>{icon.icon}</i>
      <div id="button-test">
        <SubmitButton />
        <SubmitButton />
      </div>
    </>
  );
};

MainFeature.displayName = COMPONENT_NAME;

export { MainFeature };
