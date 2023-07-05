"use client";
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { manufacturers } from "@/constants";

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");

    const filteredManufacturer = (query === "")
        ? manufacturers
        : manufacturers.filter(item => 
            item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")))

  return (
    <div className='search-manufacturer'>
        <Combobox
            value={manufacturer}
            onChange={setManufacturer}
        >
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        className="ml-4"
                        width={20}
                        height={20}
                        alt="Car logo"
                    />
                </Combobox.Button>
                <Combobox.Input
                    className="search-manufacturer__input"
                    placeholder="Gurgel"
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={ e => {
                        // console.log("typed::: ", e.target.value)
                        setQuery(e.target.value)}}
                    onBlur={e => {
                        // console.log("query--- ", query);
                        (query === "") && setManufacturer("");
                    }}
                />
                <Transition 
                    as={ Fragment }
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    // afterLeave={() => setQuery("")}
                >
                    <Combobox.Options>
                        { filteredManufacturer.length === 0 && query !== "" 
                            ?
                                <Combobox.Option
                                    value={query}
                                    className="search-manufacturer__option"
                                >
                                    Not found :/
                                </Combobox.Option>
                            :
                                query === ""
                                    ?   <>HELLO</>
                                    :
                                        filteredManufacturer.map(item=> 
                                            <Combobox.Option
                                                key={item}
                                                className={({ active }) => (
                                                    `relative search-manufacturer__option ${active 
                                                                                                ? "bg-primary-blue text-white" 
                                                                                                : "text-gray-900"}`
                                                )}
                                                value={item}
                                            >
                                                { item }
                                            </Combobox.Option>
                                        )
                        }
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer;