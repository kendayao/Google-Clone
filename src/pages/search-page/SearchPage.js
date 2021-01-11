import React from 'react'
import { useStateValue } from '../../contextAPI/StateProvider'
import useGoogelSearch from '../../useGoogelSearch';
import './SearchPage.css'
import responseData from '../../response'
import {Link} from 'react-router-dom'

function SearchPage() {
    const[{term},dispatch]=useStateValue();
    // const {data}=useGoogelSearch(term)

    const data=responseData
    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo'
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google logo'/>
                </Link>
            </div>
            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage
