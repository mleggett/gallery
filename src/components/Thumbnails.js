import React, { useState } from 'react'

function Thumbnails({data}) {

  const [detail, setDetail] = useState(null)

  function handleClick(ind) {
    setDetail(ind)
  }

  return (
    <main>
      <div className="thumbnails-holder">
        {
        data.map((thumb, i) => {
          const bgStyle = {
            backgroundImage: `url(${thumb.src})`,
            
          }
          return (
              <div className="thumbnail" style={bgStyle} key={`${thumb.src}-${i}`} onClick={() => handleClick(i) } />
          )
          })
        }
      </div>
      {
        detail && <div className="detail-holder">
          <div className="detail-bg">
            <div className="detail-close">X</div>
          </div>
          <div className="detail-content">
            <img src={data[detail].src} alt={data[detail].title} />
          </div>
        </div>
        }
    </main>
  )
}

export default Thumbnails