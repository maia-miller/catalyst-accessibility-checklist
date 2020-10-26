import React, { useState, useEffect } from 'react';

import Checklist from '../checklist/checklist'
import allElementsData from '../../assets/data/element-data'

import './main.scss';

const Main = () => {
  const [visibleData, setVisibleData]: Array<any> = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    // 1) Clear "view All", then do search
    setVisibleData([]);

    // 2) Search
    // don't search empty string or single space
    if (searchTerm.length > 0 && searchTerm !== ' ') {
      let searchData: Array<any> = []

      allElementsData.forEach(element => {
        // pull out descriptions into an array
        let elementDescriptions: Array<string> = element.criteria.map(criterion => {
          return criterion.description
        })
        // convert array into string, and add title
        const searchableText = `${element.title} ${elementDescriptions.toString()}`

        // now search the array
        if (searchableText.indexOf(searchTerm) > -1) {
          searchData.push(element)
        }
      })

      setVisibleData(searchData)
    }
  }, [searchTerm])

  return (
    <div className="mainpage-wrapper">
      <main>
      <div className="mainpage-hero">
        <h1>Accessibility Checklist</h1>
        <div className="search-input-wrapper">
          <p>Search for an element</p>
          <input
            type="text"
            name="search"
            onChange={(e) => {setSearchTerm(e.target.value)}}
          />
        </div>
        <div className="view-all-wrapper">
          <span>or <button onClick={() => {setVisibleData(allElementsData)}}>view all elements</button></span>
        </div>
      </div>

        <div className="checklist-wrapper">
          {visibleData && (
            <Checklist data={visibleData}/>
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
