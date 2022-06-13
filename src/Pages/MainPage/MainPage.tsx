import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../Components/SvgIcons/Icons';
import { Button } from '../../UI/Button/Button';
import styles from './styles.module.scss';

const MainPage: React.FC = () => {
  // const claimType = (type: string) => {
  //   switch (type) {
  //     case 'Software': {
  //       return { background: '#FF7675' };
  //     }
  //     case 'Troubleshooting': {
  //       return { background: '#6C5CE7' };
  //     }
  //     case 'Networking': {
  //       return { background: '#FDCB6E' };
  //     }
  //     default: {
  //       return { background: '#7DB59A' };
  //     }
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Your claims</h1>
        <Link to='/createclaim'>
          <Button bgColor='primary'>
            <Icon iconName='icon-plus' />
            Create claim
          </Button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <tr className={styles.table__header__tr}>
            <th>
              Title
              <button>
                <Icon iconName='icon-sort' />
              </button>
            </th>
            <th>
              Created
              <button>
                <Icon iconName='icon-sort' />
              </button>
            </th>
            <th>
              Type
              <button>
                <Icon iconName='icon-sort' />
              </button>
            </th>
            <th>
              Status
              <button>
                <Icon iconName='icon-sort' />
              </button>
            </th>
            <th>
              Actions
              <button>
                <Icon iconName='icon-sort' />
              </button>
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          <tr className={styles.table__body__tr}>
            <td>Figma smart web system for to build</td>
            <td>12/04/2021</td>
            <td>
              {' '}
              <span className={styles.claimType}></span>
              Hardware
            </td>
            <td>
              {' '}
              <span className={styles.claim__status}>declined</span>{' '}
            </td>
            <td>
              <Link to='/editclaim'>Browse</Link>
            </td>
          </tr>
          <tr className={styles.table__body__tr}>
            <td>Figma smart web system for to build</td>
            <td>12/04/2021</td>
            <td>
              {' '}
              <span className={styles.claimType}></span>
              Hardware
            </td>
            <td>
              {' '}
              <span className={styles.claim__status}>new</span>{' '}
            </td>
            <td>
              <Link to='/editclaim'>Browse</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
