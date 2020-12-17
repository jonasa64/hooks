import useFirebase from "../hooks/useFirebase";

const Displayusers = () => {
    const {docs} = useFirebase('users');
    return (
        <div>
        <table className="table">
            <tr>
                <th>Username</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Email</th>
            </tr>

            {docs && docs.map(user => (
                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
            ))}

        </table>
</div>


    )

}

export default Displayusers;
