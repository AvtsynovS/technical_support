import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../Components/SvgIcons/Icons';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Button } from '../../UI/Button/Button';
import styles from './styles.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
// import { getClaims } from './../../store/ActionCreators/getClaims';

const LIMIT_PAGE = 10;

const MainPage: React.FC = () => {
  const { claims, totalItems } = useTypeSelector((state) => state.getClaims);
  const { getClaims } = useActions();

  const dispatch = useDispatch();

  const claimType = (type: string | undefined) => {
    switch (type) {
      case 'Software': {
        return { background: '#FF7675' };
      }
      case 'Troubleshooting': {
        return { background: '#6C5CE7' };
      }
      case 'Networking': {
        return { background: '#FDCB6E' };
      }
      default: {
        return { background: '#7DB59A' };
      }
    }
  };
  const claimStatus = (status: string) => {
    switch (status) {
      case 'Done': {
        return { background: '#00B894' };
      }
      case 'In progress': {
        return { background: '#FDCB6E' };
      }
      case 'Declined': {
        return { background: '#E84393' };
      }
      default: {
        return { background: '#6C5CE7' };
      }
    }
  };
  const page = useRef(1);

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    page.current = selected + 1;
  };

  useEffect(() => {
    getClaims(page.current, LIMIT_PAGE);
    // getClaims(page.current, LIMIT_PAGE);
  }, []);

  return (
    <>
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
            {claims.map((claim) => {
              return (
                <tr className={styles.table__body__tr} key={claim._id}>
                  <td>{claim.title}</td>
                  <td>{claim.createdAt}</td>
                  <td>
                    {' '}
                    <span
                      style={claimType(claim.type?.name)}
                      className={styles.claimType}
                    ></span>
                    {claim.type?.name}
                  </td>
                  <td>
                    {' '}
                    <span
                      style={claimStatus(claim.status.name)}
                      className={styles.claim__status}
                    >
                      {claim.status.name}
                    </span>{' '}
                  </td>
                  <td>
                    <Link to='/editclaim'>Browse</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={pageChangeHandler}
          pageRangeDisplayed={5}
          pageCount={totalItems}
          previousLabel='<'
          forcePage={page.current - 1}
          containerClassName={styles.paginate}
          pageClassName={styles.paginate__li}
          pageLinkClassName={styles.paginate__li__link}
          previousClassName={styles.paginate__prev}
          activeClassName={styles.paginate__active}
          breakClassName={styles.paginate__break}
        />
      </div>
    </>
  );
};

export default MainPage;
