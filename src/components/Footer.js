export default function Footer() {

  return (
    <footer
      className="flex flex-row flex-wrap justify-center text-center italic max-w-xl leading-6 mx-4 mt-6 mb-5 gap-y-4"
    >
      <span 
        className="text-lg md:text-xl w-full"
      >
        "Selamat Datang di Sekuro Village Beach Resort Jepara"
      </span>
      <div
        className="flex flex-row flex-wrap justify-center gap-3"
      >
        <button
          onClick={() => window.open('https://sekurovillage.digidaxa.com', '_blank')}
          className="py-3 px-5 font-bold border-[1px] border-primary rounded-full bg-primary shadow shadow-primary hover:shadow-lg hover:shadow-primary text-white transition-all duration-150">
          VR Tour
        </button>
        <button
          onClick={() => window.open('https://sekurovillage.com', '_blank')}
          className="py-3 px-5 font-bold border-[1px] border-primary rounded-full shadow shadow-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary text-primary transition-all duration-150">
          Visit Our Website
        </button>
      </div>
    </footer>
  );
}
