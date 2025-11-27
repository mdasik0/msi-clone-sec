import clothPhoto from "../assets/sec-img/image-1.jpeg";
const TeamOfProfessionalSec = () => {
  return (
    <div className=" w-[1500px] mx-auto py-16 flex items-start gap-8">
      {/* image */}
      <div className="w-[734px] h-[490px] rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={clothPhoto}
          alt="msi logo"
        />
      </div>
      {/* text */}
      <div className="flex flex-col gap-8 poppins-medium w-[734px]">
        <h2 className="text-[22px] uppercase poppins-medium ">Team of professionalsis waiting for you</h2>
        <ul className="text-[18px] list-disc ml-10 poppins-regular  leading-[27px] tracking-[1px] ">
          <li className="w-[694px] text-justify">
            At MAS, we understand the importance of the basics. That’s why we
            focus on delivering essential clothing items that form the
            foundation of any wardrobe. From T-shirts to Tank Tops, our products
            are designed for comfort, quality, and versatility. As a subsidiary
            of Mishael International Inc., we leverage decades of industry
            experience to bring you the best in basic apparel.
          </li>
          <li className="w-[694px] text-justify">
            That’s why we focus on delivering essential clothing items that form
            the foundation of any wardrobe. From T-shirts to Tank Tops, our
            products are designed for comfort, quality, and versatility. As a
            subsidiary of Mishael International Inc., we leverage decades of
            industry experience to bring you the best in basic apparel.
          </li>
          <li className="w-[694px] text-justify">
            That’s why we focus on delivering essential clothing items that form
            the foundation of any wardrobe. From T-shirts to Tank Tops, our
            products are designed for comfort, quality, and versatility. As a
            subsidiary of Mishael International Inc., we leverage decades of
            industry experience to bring you the best in basic apparel.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamOfProfessionalSec;
