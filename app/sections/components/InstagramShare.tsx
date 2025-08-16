import React from 'react';

interface InstagramShareProps {
  instagramTitle: string;
  shareTitle: string;
  soonText: string;
}

export function InstagramShare({ instagramTitle, shareTitle, soonText }: InstagramShareProps) {
  return (
    <section id="instagram-share" className="section-wrapper scroll-section text-center bg-white">
      <h2 className="font-script text-4xl text-gray-800 mb-4">{instagramTitle}</h2>
      <p className="text-gray-600 mb-8">{soonText}</p>
      {/* You can add Instagram sharing functionality here later if needed */}
      <h3 className="font-script text-3xl text-gray-800 mb-4">{shareTitle}</h3>
      {/* This button can be replaced with actual sharing functionality or a link to Instagram */}
      <button className="btn btn-lg">
        Share on Instagram
      </button>
    </section>
  );
}

export default InstagramShare;
