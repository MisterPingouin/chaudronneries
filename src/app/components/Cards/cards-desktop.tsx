import Link from "next/link";

const CardsDesktop = () => {
  return (
    <div className="w-[500px] h-auto bg-background-black text-white rounded-lg shadow-lg opacity-80 px-10 py-10">
      {/* Tag section */}
      <div className="bg-white text-black text-label font-bold uppercase rounded-sm px-2 py-0.5 w-fit mb-4">
        ÉVÈNEMENT
      </div>

      {/* Title and event description */}
      <div className="text-heading font-semibold italic pt-2 ">
        FESTIVAL D&apos;AUTOMNE
      </div>
      <div className="text-body font-semibold italic">
        12, 14 & 15 SEPTEMBRE 2024
      </div>
      <div className="text-hero font-semibold italic underline pt-6">
        DAMBUDZO
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="text-body font-semibold italic">
          <p>CRÉATION DE </p>
          <p>NORA CHIPAUMIRE</p>
        </div>
        {/* Button section */}
        <Link href="https://www.festival-automne.com/fr/edition-2024/nora-chipaumire-dambudzo">
          <div className="px-3 w-auto h-10 bg-primary text-black rounded-full flex items-center justify-center shadow-lg hover:bg-white transition duration-300 cursor-pointer">
            <p className="text-label font-semibold pr-1">DÉCOUVRIR</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardsDesktop;
