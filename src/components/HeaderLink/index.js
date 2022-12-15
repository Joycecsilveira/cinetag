import styles from './LinkHeader.module.css';
import { Link } from 'react-router-dom';

function LinkHeader({ url, children }) {
	return (
		<Link to={url} className={styles.link}>
			{children}
		</Link>
	);
}

export default LinkHeader;
