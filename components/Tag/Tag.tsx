import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

export const Tag = ({ className, color='ghost', size = 'base', href, children, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.sm]: size == 'sm',
                [styles.base]: size == 'base',
                [styles.md]: size == 'md',
                [styles.ghost]: color == 'ghost',
                [styles.gray]: color == 'gray',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
                [styles.red]: color == 'red',

            })}
            {...props}
        >
            {href
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};