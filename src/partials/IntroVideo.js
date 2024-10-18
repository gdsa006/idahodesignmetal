import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import style from './IntroVideo.module.css';

const IntroVideo = ({ hideOuterWrapper, videoFileName }) => {
  return (
    <div className={style.videoContainer}>
      {/* <ReactPlayer
        url={`/videos/${videoFileName}`}
        playing
        muted
        loop
        width="100%"
        height="100%"
        playsinline
        className={style.video}
      /> */}
      <img src='/images/hero.webp' className={style.image} />

      {!hideOuterWrapper && (
        <div className={style.outerWrapper}>
          <div className='row'>
            <div className={`col col-md-4 col-sm-4 col-xs-12 ${style.column}`}>
              <div className={style.innerWrapper}>
                <span className={style.largeText}>Cost-effective</span>
                <span className={style.smallText}>Cheaper than asphalt shingle or tile</span>
              </div>
            </div>
            <div className={`col col-md-4 col-sm-4 col-xs-12 ${style.column}`}>
              <div className={style.innerWrapper}>
                <span className={style.largeText}>Durable</span>
                <span className={style.smallText}>Longer lifespan*</span>
              </div>
            </div>
            <div className={`col col-md-4 col-sm-4 col-xs-12 ${style.column}`}>
              <div className={style.innerWrapper}>
                <span className={style.largeText}>Impact Resistance</span>
                <span className={style.smallText}>Wind resistant</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

IntroVideo.propTypes = {
  hideOuterWrapper: PropTypes.bool,
  videoFileName: PropTypes.string.isRequired,
};

IntroVideo.defaultProps = {
  hideOuterWrapper: false,
};

export default IntroVideo;
