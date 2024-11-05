import classNames from 'classnames/bind';
import styles from '../CSSModule.module.scss'

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            {/*<div className={`${styles.wrapper} ${styles.inverted}`}>*/}
            {/*<div className={[styles.wrapper, styles.inverted].join(' ')}>*/}
            Hello <span className='something'>CSS Module!</span>
        </div>
    );
};

export default CSSModule;