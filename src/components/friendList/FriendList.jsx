import style from "./FriendList.module.css"
import FriendListItem from './friendListItem/FriendListItem'
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return <ul className={style['friend__list']}>
        {friends.map(friend => {
            return (
            <FriendListItem key={friend.id} {...friend}/>
           )
    })}
    </ul>
}

FriendList.propTypes = {
 friends:PropTypes.array.isRequired   
}

export default FriendList;