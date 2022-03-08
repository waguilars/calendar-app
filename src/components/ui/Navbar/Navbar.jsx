const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
      <span className='navbar-brand'>
        Wilson Aguilar
      </span>
      <button className='btn btn-danger'>
        <i className='fa fa-sign-out-alt' />
        <span> Salir</span>
      </button>
    </div>
  );
};
export default Navbar;
