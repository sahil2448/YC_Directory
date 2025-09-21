"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
        const reset =()=>{
        const form = document.querySelector('.search-form') as HTMLFormElement;
        form.reset();
    }
  return (
    <div>
      <button type="button" onClick={reset}>
        <Link href="/" className="size-[50px] rounded-full bg-black flex justify-center items-center !important"><X className="size-5 text-white" /></Link>
      </button>
    </div>
  )
}

export default SearchFormReset