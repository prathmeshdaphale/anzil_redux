import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addInfo } from '../redux/actions/inputtext';
import AssnTable from './asn2table';

const Assignment2 = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const [text, setText] = useState({
        firstText: '',
        secondText: ''
    });
    const [data, setData] = useState([])
    const handleInput = e => {
        setText({ ...text, [e.target.name]: e.target.value });

    }
    const handleSubmit = (val, e) => {
        e.preventDefault();
        setData([...data, text])

    }
    useEffect(() => {
        dispatch(addInfo(data))

    }, [data])
    return (
        <div>
            <form>
                <h2>Assignment First </h2>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstText"
                        value={text.firstText}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label>Second Name</label>
                    <input
                        type="text"
                        name="secondText"
                        value={text.secondText}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <button onClick={(e) => handleSubmit(text, e)} >Submit</button>
                </div>

            </form>
            <AssnTable/>
        </div>
    )
}

export default Assignment2