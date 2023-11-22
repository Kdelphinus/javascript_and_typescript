import Button from './Button';
import styles from './App.module.css';
import {useEffect, useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter(current => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // 코드가 단 한 번만 실행
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  // [] 안에 있는 것이 변할 때마다 실행
  useEffect(() => {
    if (keyword !== '' && keyword.length > 1)
      console.log('SEARCH FOR', keyword);
  }, [keyword]);

  useEffect(() => {
    console.log('Counter:', counter);
  }, [counter]);

  useEffect(() => {
    console.log('keyword:', keyword, 'Counter:', counter);
  }, [keyword, counter]);
  return (
      <div>
        <input
            value={keyword}
            onChange={onChange}
            type={'text'}
            placeholder={'Search here...'}
        />
        <h1 className={styles.title}>Welcome back!</h1>
        <Button text={'Continue'}/>
        <button onClick={onClick}>{counter}</button>
      </div>
  );
}

export default App;
