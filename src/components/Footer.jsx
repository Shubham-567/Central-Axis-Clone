import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className='lg:px-28 py-6 border-t border-border-dark'>
      <div className='flex justify-start items-center gap-2'>
        <img src={logo} alt='central axis logo' className='w-9' />
        <p className='text-sm'>
          Copyright © <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
