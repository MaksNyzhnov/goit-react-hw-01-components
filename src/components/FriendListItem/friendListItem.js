import css from './friendListItem.module.css'


const FriendListItem = ({avatar, name, isOnline, id}) => {
return <li className={css.item}>
  <span className={`${css.status} ${isOnline ? css.online : css.ofline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
}

export default FriendListItem