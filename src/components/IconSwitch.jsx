import PropTypes from 'prop-types';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch">
      <span className="material-icons" onClick={() => onSwitch()}>
        {icon}
      </span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
