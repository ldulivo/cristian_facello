import './InfiniteCarousel.scss'

const InfiniteCarousel = ({ children }) => {
  return (
    <div className='InfiniteCarousel'>
      <div className="InfiniteCarousel-track">
        {children}
      </div>              
    </div>
  )
}

export default InfiniteCarousel
