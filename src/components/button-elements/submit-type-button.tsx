import { useId } from "react";
import classNames from "classnames";
import { BaseButton } from "./base-button";
import { BaseButtonType } from "../../types/element-types/button-elements-types";

const COMPONENT_NAME = "SubmitTypeButton";
const SubmitTypeButton = (props: BaseButtonType) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { className, ...rest } = props;

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
