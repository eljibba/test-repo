import { PProps } from "./P.props";
import styles from './P.module.css';
import cn from "classnames";

export const P = ({ className, size, children, ...props }: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles["p-base"]]: size == 'base',
                [styles["p-md"]]: size == 'md',
                [styles["p-lg"]]: size == 'lg'
            })}
            {...props}
        >
            {children}
        </p>
    );
};