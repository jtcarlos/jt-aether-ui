export const inputVariant = {
  floating: {
    input:
      "peer block py-3 px-4 w-full border border-[#C3C3C3] outline-none rounded-md text-sm disabled:opacity-50 transition-all duration-200-ease-linear placeholder:opacity-0 no-ms-clear",
    label:
      "pointer-events-none absolute left-[0.65rem] top-0 origin-[0_0] mb-0 text-[#666666] truncate transition-all duration-200-ease-out -translate-y-[0.6rem] scale-[0.8] bg-white px-2 peer-focus:-translate-y-[0.6rem] peer-focus:scale-[0.8] peer-focus:pt-0 peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-[1] peer-placeholder-shown:pt-[0.6rem] peer-placeholder-shown:bg-transparent no-ms-clear",
  },
  inside: {
    input:
      "peer block w-full p-4 text-sm border outline-none rounded-md placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 no-ms-clear",
    label:
      "absolute top-0 start-0 origin-[0_0] p-4 h-full text-sm text-gray-500 truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 no-ms-clear",
  },
}
