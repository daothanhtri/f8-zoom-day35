import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({
  size = "medium",
  color,
  loading = false,
  disabled = false,
  rounded = false,
  bordered = false,
  children,
  href,
  className,
  onClick,
  ...passProps
}) {
  const classNames = clsx(
    styles.btn,
    styles[size],
    color && styles[color],
    className,
    {
      [styles.rounded]: rounded,
      [styles.bordered]: bordered,
      [styles.loading]: loading,
      [styles.disabled]: disabled || loading,
    }
  );

  const isDisable = loading || disabled;
  let Component = href ? "a" : "button";

  const handleClick = (e) => {
    if (isDisable) {
      e.preventDefault();
      return;
    }

    onClick?.(e);
  };

  return (
    <Component
      {...passProps}
      href={href}
      className={classNames}
      onClick={handleClick}
      disabled={isDisable && Component === "button"}
    >
      <span className={styles.spinner} />
      <span className={styles.label}>{children}</span>
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "alert"]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  bordered: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
