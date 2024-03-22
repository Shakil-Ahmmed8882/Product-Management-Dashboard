export const Categories = ({ categories }) => {
    
  return (
    <>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
        {/* categories: ["cat1", "cat2"], */}
        {categories?.map((category) => (
          <div key={category} className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            {category}
          </div>
        ))}
      </td>
    </>
  );
};
