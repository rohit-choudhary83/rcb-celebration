 

const FanMessageWall = () => {
  const messages = [
    "Ee Sala Cup Namde!",
    "Kohli OP!",
    "Dil jeet liya!",
    "Maxwell Magic!",
    "Faf the Captain!",
    "Lion-hearted effort!",
    "RCB Forever!",
    "Boundaries rain today!",
    "Stadium went wild!",
    "Finally, Trophy Time!",
  ];

  return (
    <div className="h-screen bg-black w-screen pt-[10vh]">

    <div className="p-5 text-center ">
      <h2 className="text-4xl font-bold text-orange-400 mb-6">
        RCB Celebration Wall
      </h2>
      <p className="text-lg mb-8 text-white">
        Fan messages lighting up the wall!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {messages.map((msg, idx) => (
            <div
            key={idx}
            className="bg-white text-black p-4 rounded-xl shadow-md text-left font-semibold text-lg hover:scale-105 transition-transform"
            >
            {msg}
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default FanMessageWall;
