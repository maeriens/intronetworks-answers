import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CHAP_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const CHAP_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const getInitialChapter = () => {
  const current = window.location.pathname;
  if (pathname === '/') return 0;
  return current[current.length - 1]
}

function Sidebar() {
  const [currentChapter, setChapter] = useState(() => getInitialChapter)

  return (
    <section className="sidebar">
      <div className="sidebar__content">
        <div className="title-bar">
          <div className="title-bar-text">Content</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <ul className="tree-view">
            <li>Index
             <ul>
                <details open={currentChapter === 1}>
                  <summary><Link to='/chapter1' onClick={() => setChapter(1)}>Chapter 1</Link></summary>
                  {currentChapter === 1 && (
                    <ul>
                      {CHAP_1.map(e => <li key={e}><a href={`#${e}`}>{e}</a></li>)}
                    </ul>
                  )}
                </details>
                <details open={currentChapter === 2}>
                  <summary><Link to='/chapter2' onClick={() => setChapter(2)}>Chapter 2</Link></summary>
                  <ul>
                    {CHAP_2.map(e => <li key={e}><a href={`#${e}`}>{e}</a></li>)}
                  </ul>
                </details>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
