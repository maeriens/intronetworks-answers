import React from 'react'

const excercises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Sidebar() {
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
                <details open>
                  <summary>Chapter 1</summary>
                  <ul>
                    {excercises.map(e => <li key={e}><a href={`#${e}`}>{e}</a></li>)}
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
