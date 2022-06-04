import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../Components/SvgIcons/Icons';
import { Button } from '../../UI/Button/Button';
import styles from './styles.module.scss';

// interface Props {
//   id: string;
//   title: string;
//   data(): void;
//   type: string;
//   status: string;
//   action: ReactNode;
//   children: string;
// }

const MainPage: React.FC = () => {
  //   const { id, title, data, type, status, achion, isAdmin, children } = props;

  //   const claim = [
  //     {
  //       id: id,
  //       title: 'Figma smart web system for to build',
  //       date: newData(),
  //       type: <img src={} alt='type' />,
  //     },
  //   ];

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
          <tr className={styles.table__header__th}>
            <th>Title</th>
            <th>Created</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Figma smart web system for to build</td>
            <td>12/04/2021</td>
            <td>Hardware</td>
            <td>declined</td>
            <td>
              <Button>
                <Link to='/editclaim'>Browse</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;

// function newData() {
//   throw new Error('Function not implemented.');
// }
