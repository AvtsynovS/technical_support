import React from 'react';
import styles from './styles.module.scss';

interface Props {
  iconName: string;
}

export const Icon = (props: Props) => {
  const { iconName } = props;
  switch (iconName) {
    case 'icon-archive':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.navbar}
        >
          <path
            d='M29 16V29H11V16'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M31 11H9V16H31V11Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18 20H22'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-bell':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21.73 29C21.5542 29.3031 21.3018 29.5547 20.9982 29.7295C20.6946 29.9044 20.3504 29.9965 20 29.9965C19.6496 29.9965 19.3054 29.9044 19.0018 29.7295C18.6982 29.5547 18.4458 29.3031 18.27 29M30 25H10C10.7956 25 11.5587 24.6839 12.1213 24.1213C12.6839 23.5587 13 22.7956 13 22V17C13 15.1435 13.7375 13.363 15.0503 12.0503C16.363 10.7375 18.1435 10 20 10C21.8565 10 23.637 10.7375 24.9497 12.0503C26.2625 13.363 27 15.1435 27 17V22C27 22.7956 27.3161 23.5587 27.8787 24.1213C28.4413 24.6839 29.2044 25 30 25V25Z'
            stroke='#5C5C5C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-database':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 16C24.9706 16 29 14.6569 29 13C29 11.3431 24.9706 10 20 10C15.0294 10 11 11.3431 11 13C11 14.6569 15.0294 16 20 16Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M29 20C29 21.66 25 23 20 23C15 23 11 21.66 11 20'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11 13V27C11 28.66 15 30 20 30C25 30 29 28.66 29 27V13'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-dollar-sign':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 9V31'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M25 13H17.5C16.5717 13 15.6815 13.3687 15.0251 14.0251C14.3687 14.6815 14 15.5717 14 16.5C14 17.4283 14.3687 18.3185 15.0251 18.9749C15.6815 19.6313 16.5717 20 17.5 20H22.5C23.4283 20 24.3185 20.3687 24.9749 21.0251C25.6313 21.6815 26 22.5717 26 23.5C26 24.4283 25.6313 25.3185 24.9749 25.9749C24.3185 26.6313 23.4283 27 22.5 27H14'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-globe':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 29C25.5228 29 30 24.5228 30 19C30 13.4772 25.5228 9 20 9C14.4772 9 10 13.4772 10 19C10 24.5228 14.4772 29 20 29Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10 19H30'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20 9C22.5013 11.7384 23.9228 15.292 24 19C23.9228 22.708 22.5013 26.2616 20 29C17.4987 26.2616 16.0772 22.708 16 19C16.0772 15.292 17.4987 11.7384 20 9V9Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-home':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11 17L20 10L29 17V28C29 28.5304 28.7893 29.0391 28.4142 29.4142C28.0391 29.7893 27.5304 30 27 30H13C12.4696 30 11.9609 29.7893 11.5858 29.4142C11.2107 29.0391 11 28.5304 11 28V17Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17 30V20H23V30'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-navigation':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 19L29 10L20 29L18 21L10 19Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-pie-chart':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M29.2104 23.8901C28.5742 25.3946 27.5792 26.7203 26.3123 27.7514C25.0454 28.7825 23.5452 29.4875 21.9428 29.8049C20.3405 30.1222 18.6848 30.0422 17.1205 29.5719C15.5563 29.1015 14.131 28.2551 12.9694 27.1067C11.8078 25.9583 10.9452 24.5428 10.457 22.984C9.96886 21.4252 9.86996 19.7706 10.169 18.1647C10.468 16.5589 11.1559 15.0507 12.1724 13.7721C13.189 12.4935 14.5033 11.4834 16.0004 10.8301'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M30.0005 20C30.0005 18.6868 29.7418 17.3864 29.2393 16.1732C28.7367 14.9599 28.0001 13.8575 27.0716 12.9289C26.143 12.0003 25.0406 11.2638 23.8273 10.7612C22.6141 10.2587 21.3137 10 20.0005 10V20H30.0005Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-log-out':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17 29H13C12.4696 29 11.9609 28.7893 11.5858 28.4142C11.2107 28.0391 11 27.5304 11 27V13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H17'
            stroke='#5C5C5C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24 25L29 20L24 15'
            stroke='#5C5C5C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M29 20H17'
            stroke='#5C5C5C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-mail':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 12H28C29.1 12 30 12.9 30 14V26C30 27.1 29.1 28 28 28H12C10.9 28 10 27.1 10 26V14C10 12.9 10.9 12 12 12Z'
            stroke='#ADADAD'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M30 14L20 21L10 14'
            stroke='#ADADAD'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-search':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 27C22.4183 27 26 23.4183 26 19C26 14.5817 22.4183 11 18 11C13.5817 11 10 14.5817 10 19C10 23.4183 13.5817 27 18 27Z'
            stroke='#5C5C5C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M27.9999 28.9999L23.6499 24.6499'
            stroke='#5C5C5C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-lock':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M27 19H13C11.8954 19 11 19.8954 11 21V28C11 29.1046 11.8954 30 13 30H27C28.1046 30 29 29.1046 29 28V21C29 19.8954 28.1046 19 27 19Z'
            stroke='#ADADAD'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15 19V15C15 13.6739 15.5268 12.4021 16.4645 11.4645C17.4021 10.5268 18.6739 10 20 10C21.3261 10 22.5979 10.5268 23.5355 11.4645C24.4732 12.4021 25 13.6739 25 15V19'
            stroke='#ADADAD'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-plus':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 13V27'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13 20H27'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'icon-sort':
      return (
        <svg
          width='7'
          height='10'
          viewBox='0 0 7 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 3.75L3.5 0L7 3.75H0Z' fill='#C2C2C2' />
          <path d='M0 6.25L3.5 10L7 6.25H0Z' fill='#C2C2C2' />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
