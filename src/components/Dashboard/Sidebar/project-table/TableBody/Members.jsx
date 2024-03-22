export const Members = ({members}) => {

  return (
    <>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
        <div className="flex -space-x-1">
            {/* members:[memberProfile1,memberProfile2] */}
          {
            members?.map(member => (
                <img key={member} src={member} className="relative justify-center
                 bg-[#EAEAEA] flex h-10 w-10 shrink-0 overflow-hidden rounded-full"/>
            ))
          }
        </div>
      </td>
    </>
  );
};
