import React from 'react'
import { useStateValue } from '../../contextAPI/StateProvider'
import useGoogelSearch from '../../useGoogelSearch';
import './SearchPage.css'
import responseData from '../../response'
import {Link} from 'react-router-dom'
import Search from '../../components/search/Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
                <div className='searchPage__headerBody'>
                    <Search hideButttons/>
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='#'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to='#'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='#'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link to='#'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to='#'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to='#'>More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to='#'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='#'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term&&(
                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
                    {data?.items.map(item=>(
                    <div key={item.cacheId} className='searchPage__result'>
                        <a className='searchPage__resultUrl' href={item.link} target="_blank">
                            {item.displayLink}
                        </a>
                        <a className='searchPage__resultTitle' href={item.link} target="_blank"><h2>{item.title}</h2></a>
                        <p className='searchPage__resultSnippet'>{item.snippet}</p>
                    </div>
                    ))}
                </div>
               
            )}

        </div>
    )
}

export default SearchPage
