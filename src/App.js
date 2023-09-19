import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const TextFieldWithLabel = withLabel(withError(TextField));


function App() {

    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setError('Error....rrrr ');
        }, 4000)
    }, []);

  return (
    <div className="App">
        {/*<TextField*/}
        <TextFieldWithLabel
            // label={'label.....'}
            value={value}
            onChange={setValue}
            placeholder={'please enter.....'}
            // error={error}
        >
            High order Component label
        </TextFieldWithLabel>
        <>
            <LabelAndButton>
                버튼을 위한 레이블
            </LabelAndButton>
        </>
    </div>
  );
}

function withLabel (Component) {

    return ({children, ...rest}) => {
        console.log('라벨 컴포넌트  ', children , rest);
        return (
        <div>
            <label className='text-label'>{children}</label>
            <Component {...rest}/>
        </div>
    )}
}

function withError (Component) {
    return ({error = 'Error', ...rest}) => {
        console.log('에러 컴포넌트  ', error, rest)
        return (
            <>
                < Component {...rest} />
                <div className='error'>{error}</div>
            </>
        )
    }
}

function TextField({value, onChange, placeholder}) {

    return (
        <div>
            <input
                value={value}
                type='text'
                placeholder={placeholder}
                className={'text-input'}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

const LabelAndButton = withLabel(CustomButton);

function CustomButton() {

    const handleSubmitBtn = () => {
        console.log('전송 버튼 클릭 ');
    }

    return (
        <>
            <button
                onClick = {handleSubmitBtn}
            >
                전송
            </button>
        </>
    )
}

export default App;
