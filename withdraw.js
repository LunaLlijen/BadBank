function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [count, setCount] = React.useState(0);
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState('');
  
    React.useEffect(() => {
      document.title = 'Withdraw'; 
    });

    function handleChange(){
      setStatus('Oops, please enter numbers only!');
        setTimeout(() => setStatus(''),4000);
        clearForm();
        alert('Please enter a numeric value.')
        return false;
    }
    function validate(field, label){
      console.log(field);
      
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),4000);
        clearForm();
        return false;
      }
      //Checks if numeric value
      else if (isNaN(+field)) {
        setStatus('Oops, please enter numbers only!');
        setTimeout(() => setStatus(''),4000);
        clearForm();
        alert('Please enter a numeric value.')
        return false;
      }
      //Checks if withdrawal amount is larger than balance
      else if(field > parseInt(ctx.users[0].balance)){
        setStatus('Oops, account overdraft detected!');
        setTimeout(() => setStatus(''),4000);
        clearForm();
        return false;
      }
      //Checks if value is positive
      else if ( field <0 ) {
        setStatus('Oops, enter positive numbers only!');
        setTimeout(() => setStatus(''),4000);
        clearForm();
        return false;
      }
      //Returns success message
      setStatus('Withdrawal Request Successful! Please note that the requested amount has been deducted from your account.');
      setTimeout(() => setStatus(''),4000);
      clearForm();
      return true;
    }
    function handleButton(){
      if (!validate(amount,'Withdraw amount')){return};
      ctx.users[0].balance = parseInt(ctx.users[0].balance) - parseInt(amount);
      setShow(false);
    }    

  function clearForm(){
      setAmount('');
      setShow(true);
    }
      return (
        <Card 
          bgcolor="primary"
          header="Withdraw" 
          status={status}
          body={show ? (  
              <>
                <div><p>Balance: {JSON.stringify(ctx.users[0].balance)}</p>
                <input type="input" className="form-control" id="amount" placeholder="Withdraw amount" value={amount} onChange={e => !isNaN(+e.currentTarget.value) ? (setAmount(e.currentTarget.value)):(handleChange()) }/><br/><br/>
                <p><button disabled={!amount} className="btn btn-light" onClick={handleButton}>Withdraw</button><br/></p></div>
              </>
          ):(
              <>
              <div><p>Balance: {JSON.stringify(ctx.users[0].balance)}</p>
                <input type="input" className="form-control" id="amount" placeholder="Withdraw amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/><br/>
                <p><button disabled={!amount} className="btn btn-light" onClick={handleButton}>Withdraw</button><br/></p></div>
              </>
          )}
        />
      )
  }
