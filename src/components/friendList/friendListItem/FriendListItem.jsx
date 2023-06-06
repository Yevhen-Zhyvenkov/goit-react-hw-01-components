import PropTypes from 'prop-types';
import style from "./FriendListItem.module.css"

const FriendListItem = (({ id, avatar, name, isOnline }) => {
        return (
            <li className={style.item} key={id}>
                {isOnline ? ( <span className={style.online}></span>) : (<span className={style.offline}></span>)}
                <img className={style.avatar} src={avatar} alt={name} width="48" />
                <p className={style.name}>{name}</p>
       </li>)
})

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;