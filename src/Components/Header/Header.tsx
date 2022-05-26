import React from 'react';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return <div className={styles.container}>Header component</div>;
};

export default Header;
// import React from 'react';
// import styles from './styles.module.scss';
// import heart from '../../assets/icon/heart.svg';
// import basket from '../../assets/icon/basket.svg';
// import lable from '../../assets/images/QPICK.png';
// import { Link } from 'react-router-dom';

// const Header = (props) => {

//   return (
//     <div className={styles.header}>
//       <div>
//         <img src={lable} alt='lable' />
//       </div>
//       <div className={styles.buttonMenu}>
//         <div className={styles.heart}>
//           <button className={styles.btn}>
//             <img src={heart} alt='heart' />
//           </button>
//         </div>
//         <div className={styles.basket}>
//           <Link to={'/basket'}>
//             <button className={styles.btn}>
//               <img src={basket} alt='basket' />
//             </button>
//           </Link>
//           <div className={styles.notification}>1</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
