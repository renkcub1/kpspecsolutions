import nydreeLogo from "../../assets/manufacturers/nydree_logo_green.png";
import everstepLogo from "../../assets/manufacturers/everstep_logo.png";
import gmsLogo from "../../assets/manufacturers/gms_black_logo.png";
import pssLogo from "../../assets/manufacturers/pss_black_logo.png";
import tcgLogo from "../../assets/manufacturers/tcg_logo.png";
import buloLogo from "../../assets/manufacturers/bulo_logo.png";
import pointLogo from "../../assets/manufacturers/point_logo.png";

const logos = [
  nydreeLogo,
  everstepLogo,
  gmsLogo,
  pssLogo,
  tcgLogo,
  buloLogo,
  pointLogo,
];

function ManufacturerWall() {
  return (
    <section className="bg-white py-36">
      <div className="mx-auto max-w-[1550px] px-10 lg:px-20">
        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-44 items-center justify-center rounded-[26px] border border-[#ECE7DE] bg-[#FCFBF8]"
            >
              <img
                src={logo}
                alt=""
                className="max-h-16 max-w-[210px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManufacturerWall;