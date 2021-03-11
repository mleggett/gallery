import React, { useState } from 'react'

function Images({data}) {

  const [detail, setDetail] = useState(null)

  function handleThumbnailClick(ind) {
    setDetail(ind)
  }

  function handleBgClick() {
    setDetail(null)
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
              <div className="thumbnail" style={bgStyle} key={`${thumb.src}-${i}`} onClick={() => handleThumbnailClick(i) } />
          )
          })
        }
      </div>
      {
        detail && <div className="detail-holder">
          <div className="detail-bg" onClick={() => handleBgClick()}>
            <div className="detail-close">X</div>
          </div>
          <div className="detail-content">
            <img src={data[detail].largeSrc} alt={data[detail].title} />
          </div>
        </div>
        }
    </main>
  )
}

export default Images