import styles from '../styles/simple-form.module.css'
import { useState } from 'react';

function SimpleForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(user + ' ' + password);
  }

  function handleUser(event) {
    setUser(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label> User </label>
          <input className={styles.input} onChange={handleUser}/>
        </div>
        <div className={styles.inputContainer}>
          <label> Password </label>
          <input className={styles.input} type="password" onChange={handlePassword}/>
        </div>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SimpleForm;