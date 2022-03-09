import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addvalue, subvalue, mulvalue, divivalue, InputHandle } from "../redux/actions/inputvalue";
import Assn1Output from "./assnoutput";

export const AssignmentFirst = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state?.CalReducer)
    const Handlestate =useSelector(state=> state?.HandleReducer)
    const [value, setValue] = useState({
        firstIP: 0,
        secondIP: 0
    });
    const [buttonInfo, setButtonInfo] = useState([
        { name: 'Add', fname: 'add' },
        { name: 'Substraction', fname: 'sub' },
        { name: "Multiplication", fname: 'mul' },
        { name: 'Division', fname: 'div' }
    ])
    const handleSubmit = (data, e) => {
        e.preventDefault();
        if (data === 'add') {
            dispatch(addvalue(value));
        }
        if (data === 'sub') {
            dispatch(subvalue(value));
        }
        if (data === 'mul') {
            dispatch(mulvalue(value));
        }
        if (data === 'div') {
            if (value.firstIP!==0 && value.secondIP !== 0) {

                dispatch(divivalue(value));
            }
        }
        dispatch(InputHandle(value))

    }
    const handleInput = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
console.log('Handlestate',Handlestate)
    return (
        <form>
            <h2>Assignment First </h2>
            <div>
                <label>First Input</label>
                <input
                    type="number"
                    name="firstIP"
                    value={value.firstIP || Number(Handlestate?.firstIP) }
                    onChange={handleInput}
                />
            </div>
            <div>
                <label>Second Input</label>
                <input
                    type="number"
                    name="secondIP"
                    value={value.secondIP || Number(Handlestate?.secondIP)}
                    onChange={handleInput}
                />
            </div>
            <div>
                {
                    buttonInfo.map((item) => {
                        return (
                            <button disabled={!value.firstIP || !value.secondIP} name={item.name} onClick={(e) => handleSubmit(item.fname, e)} >{item.name}</button>
                        )
                    })
                }
            </div>
            {
                !state?.output ? null : <Assn1Output />
            }
        </form>
    )
}
