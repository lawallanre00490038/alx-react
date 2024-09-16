import './Footer.css'
import { getFullYear, getFooterCopy } from '../utils';

const Footer = () => {
  return (
    
    <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>

  )
}

export default Footer