import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
  size = "medium",
  children,
  className,
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.large]: size == "large",
        [styles.medium]: size == "medium",
        [styles.small]: size == "small",
      })}
    >
      {children}
    </p>
  );
};
