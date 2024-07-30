import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './style.css'

const BackToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <button onClick={scrollToTop} className="back-to-top">
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    );
};
  
export default BackToTopButton;