import { useId } from "react";
import classNames from "classnames";
import { BaseButton } from "./base-button";
import { IBaseButtonType } from "../../types/element-types/button-elements-types";

const COMPONENT_NAME = "SubmitTypeButton";
const SubmitTypeButton = (props: IBaseButtonType) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { className, ...rest } = props;

  // Server'a istek atmadan önce formun validasyonunu yapmak için

  return (
    <BaseButton
      id={id}
      type="submit"
      {...rest}
      className={classNames(className, COMPONENT_NAME)}
    />
  );
};

SubmitTypeButton.displayName = COMPONENT_NAME;

export { SubmitTypeButton };
