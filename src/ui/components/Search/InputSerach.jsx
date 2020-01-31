import React, {useState} from 'react'
import { Layout } from 'ui/components/Layout'
import InputFieldStyles from 'ui/static/css/InputFields/InputFields.module.css'


const InputSearch = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <Layout>
            <div className={InputFieldStyles.inputWrapper}></div>
            <div className="col-md-6">
                <label htmlFor="search-from-text">From</label>
                <input id="search-from-text" type="text" value={inputValue} placeholder="Search City" />
            </div>
            <div className="col-md-6">
                <label htmlFor="search-to-text">To</label>
                <input id="search-to-text" type="text" value={inputValue} placeholder="Search City" />
            </div>
        </Layout>
    )
}

export default InputSearch