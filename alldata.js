function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
  
    <div>           
  <table class="table table-striped">
  <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{ctx.users[0].name}</td>
              <td>{ctx.users[0].email}</td>
              <td>{ctx.users[0].password}</td>
              <td>{ctx.users[0].balance}</td>
            </tr>
        </tbody>
  </table>
</div>
    </>
  );
}
