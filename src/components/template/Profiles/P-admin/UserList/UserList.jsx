import Tables from './Tables';
import './UserList.css';

function UserList() {
  return (
    <section className="userList">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="userList_wrapper">
                        <h5 className="userList_title">لیست کاربران</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Tables/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UserList