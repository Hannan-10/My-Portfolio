import React, { useEffect, useRef, useState } from 'react';

const videoId = 'jRQcneO4gRQ';
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('video-section--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section" id="video" aria-labelledby="video-title" ref={sectionRef}>
      <div className="video-heading">
        <p className="section-kicker">Video</p>
        <h2 id="video-title">A closer look, on camera.</h2>
      </div>

      <div className="video-frame">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Featured video"
            allow="accelerate; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-thumb-button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play video"
          >
            <img
              src={thumbnailUrl}
              alt=""
              onError={(event) => {
                event.currentTarget.src = fallbackThumbnailUrl;
              }}
            />
            <span className="video-play-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
