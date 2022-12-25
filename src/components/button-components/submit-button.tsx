import { useId } from "react";
import classNames from "classnames";
import { SubmitTypeButton } from "../button-elements";
import { BaseButtonType } from "../../types/element-types/button-elements-types";

const COMPONENT_NAME = "SubmitButton";
const SubmitButton = (props: BaseButtonType) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <SubmitTypeButton
      id={id}
      {...rest}
      className={classNames(className, COMPONENT_NAME)}
    >
      Submit
    </SubmitTypeButton>
  );
};

SubmitButton.displayName = COMPONENT_NAME;

export { SubmitButton };
