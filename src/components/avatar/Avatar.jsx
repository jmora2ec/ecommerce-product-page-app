import './avatar.scss';
import avatar from '../../assets/images/image-avatar.png';

const Avatar = () => {
  return (
    <div className="user-icon">
      <img src={avatar} alt="" />
    </div>
  );
};

export default Avatar;
