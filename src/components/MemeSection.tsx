 

 import { Helmet } from 'react-helmet';

const MemeSection = () => {
   
 
  return (
    <>
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600"> Meme Section</h2>



    </div>
    <Helmet>
        <title>RCB Universe - Meme Section</title>
        <meta name="description" content="Explore and share hilarious memes about RCB and cricket. Add your own memes and join the fun!" />
        <meta name="keywords" content="RCB memes, cricket memes, meme gallery, funny memes, Royal Challengers Bangalore" />
        <meta name="author" content="Your Name or RCB Universe Team" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="RCB Universe - Meme Section" />
        <meta property="og:description" content="Explore and share hilarious memes about RCB and cricket. Add your own memes and join the fun!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/memes" />
        <meta property="og:image" content="https://i.imgflip.com/1bij.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RCB Universe - Meme Section" />
        <meta name="twitter:description" content="Explore and share hilarious memes about RCB and cricket. Add your own memes and join the fun!" />
        <meta name="twitter:image" content="https://i.imgflip.com/1bij.jpg" />
      </Helmet>
    </>
  );
};

export default MemeSection;
