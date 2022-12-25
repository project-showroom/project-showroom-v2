import { useId } from "react";
import classNames from "classnames";
import { SubmitTypeButton } from "../button-elements";
import { SubmitButtonType } from "../../types/element-types/button-elements-types";

const COMPONENT_NAME = "SubmitButton";
const SubmitButton = (props: SubmitButtonType) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <SubmitTypeButton
      id={id}
      {...rest}
      className={classNames(
        className,
        "bg-green", // All submit buttons will have this class
        COMPONENT_NAME
      )}
    >
      Submit {props.submitCounter ?? `+ ${props.submitCounter}`}
    </SubmitTypeButton>
  );
};

SubmitButton.displayName = COMPONENT_NAME;

export { SubmitButton };
