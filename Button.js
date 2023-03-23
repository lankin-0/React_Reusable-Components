import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  /* 
  classnames = extension for assigning ClassName as string
  from KEY of the object if VALUE is true
  classes before the object are always assigned.

  {
    "This will be assigned": true,
    "This will not be assigned": false
  }
  */

  const classes = className(
    rest.className,
    "px-3 py-1.5 border flex items-center",
    {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-400 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  /* 
    ...rest = rest of the props like event handlers,
    added classNames to a component..  
    special JS syntax..
  */
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    //Number(!!true) = 1
    //Number(!!undefined) = 0

    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Error: You can have only one of this: primary, secondary, success, warning, danger"
      );
    }
  },
};

export default Button;
