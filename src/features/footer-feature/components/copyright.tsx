import { useId } from "react";

const COMPONENT_NAME = "Copyright";
const Copyright = (props: {}) => {
  const id = useId() + "-" + COMPONENT_NAME;

  const { ...rest } = props;

  return (
    <div id={id} {...rest}>
      {COMPONENT_NAME}
    </div>
  );
};

Copyright.displayName = COMPONENT_NAME;

export { Copyright };
