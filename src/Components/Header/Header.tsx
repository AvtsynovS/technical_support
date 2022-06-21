import React, { useEffect } from 'react';
import { Input } from '../../UI/Input/Input';
import { Icon } from '../SvgIcons/Icons';
import styles from './styles.module.scss';
import avatar from '../../assets/images/avatar.png';
import { useLocation } from 'react-router-dom';
import { useTypedSelector } from './../../hooks/useTypeSelector';
import { useActions } from './../../hooks/useActions';

const Header: React.FC = () => {
  let location = useLocation();

  // типизация хука useSelector, нужна, т.к. хук может вернуть не только объект.
  // в качестве аргумента возвращает весь state откуда можно взять необходимую информацию
  // заменяеь mapStateToProps
  const { users, loading, error } = useTypedSelector((state) => state.user);

  // возвращает ссылку на dispatch, используется вместо mapDispatchToProps
  // в качестве аргумента передается action, либо action-creator
  // const dispatch = useDispatch();

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  });

  console.log(users);

  return (
    <>
      {location.pathname === '/main' ? (
        <div className={styles.headerContainer}>
          <div className={styles.headerContainer__search}>
            <Input placeholder='Search' icon='icon-search' />
          </div>
          <div className={styles.infoPannel}>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-bell' />
            </div>
            <div className={styles.infoPannel__item}>
              <img
                className={styles.infoPannel__item_elips}
                src={avatar}
                alt='avatar'
              />
            </div>
            <div className={styles.infoPannel__item}>Ivan Ivanov</div>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-log-out' />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.headerContainer}>
          <div className={styles.infoPannel}>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-bell' />
            </div>
            <div className={styles.infoPannel__item}>
              <img
                className={styles.infoPannel__item_elips}
                src={avatar}
                alt='avatar'
              />
            </div>
            <div className={styles.infoPannel__item}>Ivan Ivanov</div>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-log-out' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
