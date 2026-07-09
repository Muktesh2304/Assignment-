"use client";

import { useState } from "react";

const videos = [
  {
    src: "/video1.mp4",
    words: ["Fresh"],
    accent: "Ambience",
  },
  {
    src: "/video2.mp4",
    words: ["Perfect Space", "for Every"],
    accent: "Occasion",
  },
  {
    src: "/video3.mp4",
    words: ["Taste the Tradition"],
    accent: "Elegance",
  },
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const showNextVideo = () => {
    setCurrentVideo((index) => (index + 1) % videos.length);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <video
        key={videos[currentVideo].src}
        className="absolute inset-0 h-full w-full object-cover"
        src={videos[currentVideo].src}
        autoPlay
        muted
        playsInline
        onEnded={showNextVideo}
      />
      <div className="absolute inset-0 bg-black/50" />

      <section className="absolute inset-0 z-10 flex items-center justify-center px-5 pt-20 text-center">
        <div className="max-w-6xl">
          <h1 className="[font-family:Georgia,serif] text-5xl font-normal uppercase leading-[0.9] tracking-[0.08em] text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            {videos[currentVideo].words.map((line) => (
              <span
                key={line}
                className="block"
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="-mt-1 [font-family:Brush_Script_MT,cursive] text-5xl font-normal italic leading-none text-white drop-shadow-2xl sm:-mt-3 sm:text-7xl md:text-8xl lg:-mt-5 lg:text-[8rem]">
            {videos[currentVideo].accent}
          </p>
        </div>
      </section>

      

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {videos.map((video, index) => (
          <button
            key={video.src}
            type="button"
            onClick={() => setCurrentVideo(index)}
            aria-label={`Play video ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              currentVideo === index ? "w-10 bg-[#eab65b]" : "w-5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
