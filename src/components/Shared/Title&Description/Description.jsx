export const Description = ({text,position}) => {
  return (
    <>
     <p className={`text-${position} text-description-text text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-body`}>{text}</p> 
    </>
  );
};