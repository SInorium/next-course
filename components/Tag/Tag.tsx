import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "medium",
  color = "ghost",
  href,
  children,
  className,
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.medium]: size == "medium",
        [styles.small]: size == "small",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.gray]: color == "gray",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
