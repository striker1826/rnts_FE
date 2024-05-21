import './header.scss';
import logoAreyou from '@/assets/logo-are_you.svg';
import logoLate from '@/assets/logo-late.svg';

const Header = () => {
  return (
    <header className="home_header_container">
      <div className="img_wrap">
        <div className="logo">
          <img src={logoAreyou} alt="logo" />
          <img src={logoLate} alt="logo" />
        </div>
        <img className="profile_img" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="profileImg" />
      </div>
    </header>
  );
};

export default Header;
