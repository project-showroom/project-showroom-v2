import { useId } from "react";
import classNames from "classnames";
import { Button } from "@mui/material";

const COMPONENT_NAME = "BaseButton";
const BaseButton = (props: { className?: string }) => {
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
