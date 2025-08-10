export function InstagramShare({
  instagramTitle,
  shareTitle,
  soonText,
}: {
  instagramTitle: string;
  shareTitle: string;
  soonText: string;
}) {
  return (
    <section id="instagram" className="section-wrapper scroll-section">
      <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-script text-4xl text-gray-800 mb-2">
            {instagramTitle}
          </h3>
          <p className="text-gray-700 mb-6">
            Use our hashtag on Instagram and see your photos here.
          </p>
          <div className="aspect-video bg-gray-100 border rounded-xl" />
        </div>
        <div>
          <h3 className="font-script text-4xl text-gray-800 mb-2">
            {shareTitle}
          </h3>
          <p className="mb-4 text-gray-700">{soonText}</p>
          <form className="space-y-3 max-w-xl">
            <input className="w-full border p-3 rounded" placeholder="Name" />
            <input className="w-full border p-3 rounded" placeholder="Email" />
            <textarea
              className="w-full border p-3 rounded"
              rows={5}
              placeholder="Message (optional)"
            />
            <button
              type="button"
              className="px-5 py-2 rounded bg-gray-800 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InstagramShare;


