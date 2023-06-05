import style from "./FriendList.module.css"
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return <ul className={style['friend__list']}>Friends{friends.map(({ id, avatar, name, isOnline }) => {
        return (
            <li className={style.item} key={id}>
                {isOnline ? ( <span className={style.online}></span>) : (<span className={style.offline}></span>)}
                
                <img className={style.avatar} src={avatar} alt={name} width="48" />
                <p className={style.name}>{name}</p>
       </li>)
    })}
    </ul>
}

FriendList.propTypes = {
 friends:PropTypes.array.isRequired   
}

export default FriendList;