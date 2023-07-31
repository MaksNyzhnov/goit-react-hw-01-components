import user from '../data/user'
import data from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions'
    
import Profile from "components/Profile/profile"
import Statistics from "components/Statistics/statistics"
import FriendList from 'components/FriendList/friendList'
import TransactionHistory from 'components/TransactionHistory/transactionHistory'


const App = () => {
    return <><Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
        <Statistics title="Upload stats" data={data} />
        
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
}
export default App
