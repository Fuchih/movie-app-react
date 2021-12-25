import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { Wrapper, Content } from './SearchBar.styles'
import searchIcon from '../../images/search-icon.svg'

export default function SearchBar({ setSearchTerm }) {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    // 跳過初次渲染
    if (initial.current) {
      initial.current = false
      return
    }

    // 請求Data後延遲0.5秒後再渲染UI
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)
    return () => clearTimeout(timer) // 記得unMount
  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search Movie" onChange={(e) => setState(e.target.value)} value={state} />
      </Content>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func
}
