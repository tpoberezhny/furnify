import { BenefitCardProps } from "../../lib/interface";

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  imageUrl,
  textPosition = "top-left",
  blurTextBg = false,
}) => {
  let positionClasses = "top-4 left-0 text-start";
  if (textPosition === "bottom-left") {
    positionClasses = "bottom-0 left-0 text-start";
  } else if (textPosition === "center") {
    positionClasses = "inset-0 flex items-center justify-center";
  }

  return (
    <div
      className="relative aspect-square md:aspect-auto bg-cover bg-center rounded-md overflow-hidden w-[323px] h-[358px] md:h-[498px] bg-gray-500 mb-8"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={`absolute ${positionClasses} p-4`}>
        {blurTextBg ? (
          <div className="bg-white bg-opacity-70 background-blur-sm p-3 rounded dark:invert">
            <h2 className="font-semibold text-lg dark:invert">{title}</h2>
            <p className="text-sm mt-3 dark:invert">{description}</p>
          </div>
        ) : (
          <>
            <h2 className="font-bold text-xl text-white">{title}</h2>
            <p className="text-base text-white">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BenefitCard;
