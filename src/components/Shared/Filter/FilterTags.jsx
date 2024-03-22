const tagsArray = [
  { name: "Not set", value: "500" },
  { name: "Algeria", value: "1" },
  { name: "American Samoa", value: "10" },
  { name: "Andorra", value: "5" },
  { name: "Angola", value: "5" },
];

export const FilterTags = ({activeTab,handleClick}) => {
  return (
    <>
    {/* hello */}
      <div className={`${!activeTab?'translate-y-0 z-20 visible opacity-100':'-translate-y-16 opacity-0 invisible'}
       transition-all duration-200 absolute top-32 md:right-1/4 w-full sm:w-[90%] md:w-[480px] md:h-[460px] bg-white rounded-lg shadow-lg p-3 py-6 `}>
        <div className="flex flex-col space-y-4">
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r14:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="filter-type"
          >
            <span style={{ pointerEvents: "none" }}>Is equal to</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-[#dfc0ffa1] disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search..."
          />
          <div
            dir="ltr"
            className="relative overflow-hidden h-56 w-full rounded-md border"
            style={{
              position: "relative",
              "--radix-scroll-area-corner-width": "0px",
              "--radix-scroll-area-corner-height": "0px",
            }}
          >
            <style>{`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`}</style>
            <div
              data-radix-scroll-area-viewport=""
              className="h-full w-full rounded-[inherit]"
              style={{ overflow: "hidden scroll" }}
            >
              <div style={{ minWidth: "100%", display: "table" }}>
                <div className="flex flex-col space-y-2 p-2">
                  {tagsArray.map((item, index) => (
                    <div className="flex items-center space-x-2  cursor-pointer" key={index}>
                      <input
                        type="checkbox"
                        value="on"
                        className="peer accent-primary-color h-4 w-4 shrink-0 rounded-sm border mt-5 border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        id={`item-${index}`}
                      />
                      <label
                        htmlFor={`item-${index}`}
                        className="text-sm mt-5  cursor-pointer select-none font-medium leading-none"
                      >
                        {item.name} {item.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={()=>handleClick(false)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible bg-[#dedede] px-8 hover:bg-[#cecece]">
              Clear
            </button>

            <button onClick={()=>handleClick(false)} className="inline-flex bg-primary-color text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 px-8 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 hover:bg-hover-bg hover:text-hover-text py-2">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
