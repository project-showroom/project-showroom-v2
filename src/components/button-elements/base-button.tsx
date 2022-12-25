import { useId } from "react";
import classNames from "classnames";
import { Button } from "@mui/material";
import { BaseButtonType } from "../../types/element-types/button-elements-types";

const COMPONENT_NAME = "BaseButton";

const BaseButton = (props: BaseButtonType) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <Button
      id={id}
      {...rest}
      className={classNames(className, COMPONENT_NAME)}
    ></Button>
  );
};

BaseButton.displayName = COMPONENT_NAME;

export { BaseButton };
