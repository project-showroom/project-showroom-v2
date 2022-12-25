import { useId } from "react";
import classNames from "classnames";
import { Button } from "@mui/material";
import { IBaseButtonType } from "../../types/element-types/button-elements-types";

const COMPONENT_NAME = "BaseButton";

const BaseButton = (props: IBaseButtonType) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <Button
      id={id}
      {...rest}
      // aria-label={id + " " + rest["aria-label"]}
      className={classNames(className, COMPONENT_NAME)}
    ></Button>
  );
};

BaseButton.displayName = COMPONENT_NAME;

export { BaseButton };
