"use client";

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import {itemProps} from '../lib/interface';
import { urlFor } from "../lib/sanity";

interface PricesClientProps {
  data: itemProps[];
}

export default function PricesClient({data}: PricesClientProps) {
  const [mainTypeFilter, setMainTypeFilter] = useState<string>('all');
  const [additionalTypeFilter, setAdditionalTypeFilter] = useState<string>('');

  const filteredData = data.filter((item) => {
    const matchedMainType = mainTypeFilter === 'all' || item.mainType === mainTypeFilter;
    const matchedAdditionalType = additionalTypeFilter === '' || item.additionalType === additionalTypeFilter;
    return matchedMainType && matchedAdditionalType;
  });

  return (
    <div className='max-w-5xl mt-20 text-center mx-auto'>
      <h1 className='title mb-16'>Prices</h1>
      {/* Filters Section */}
      <div className='flex justify-between mb-8'>
        {/* Main Type Filter */}
        <div>
          <h3 className='font-medium text-lg mb-4'>Filter by Main Type</h3>
          <div className='space-x-2'>
            <Button variant={mainTypeFilter === 'all' ? "default" : "outline"} onClick={() => setMainTypeFilter('all')}>
              All
            </Button>
            <Button
              variant={mainTypeFilter === "hotelHome" ? "default" : "outline"}
              onClick={() => setMainTypeFilter("hotelHome")}
            >
              Hotel & Home
            </Button>
            <Button
              variant={mainTypeFilter === "office" ? "default" : "outline"}
              onClick={() => setMainTypeFilter("office")}
            >
              Office
            </Button>
          </div>
        </div>

        {/* Additional Type Filter */}
        <div>
          <h3 className='font-medium text-lg mb-2'>Filter by Additional Type</h3>
          <select className='p-2 border rounded-md' value={additionalTypeFilter} onChange={(e) => setAdditionalTypeFilter(e.target.value)}>
          <option value="">All</option>
            <option value="chair">Chair</option>
            <option value="desk">Desk</option>
            <option value="storageCabinet">Storage Cabinet</option>
            <option value="bed">Bed</option>
            <option value="wardrobe">Wardrobe</option>
            <option value="entrywayCloset">Entryway Closet</option>
            <option value="sofa">Sofa</option>
            <option value="armchair">Armchair</option>
            <option value="dresser">Dresser</option>
            <option value="bedsideTable">Bedside Table</option>
            <option value="kitchenTable">Kitchen Table</option>
            <option value="diningChair">Dining Chair</option>
          </select>
        </div>
      </div>
      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center bg-gray-100 dark:bg-gray-800"
          >
            <div className='w-full h-[200px] flex justify-center items-center bg-gray-200 rounded-md '>
            <Image
              src={urlFor(item.titleImage).url()}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain rounded-md w-full h-full"
            />
            </div>
            <div className='mt-4 text-center'>
            <h4 className="font-medium text-lg">{item.title}</h4>
            <p className="text-gray-500 mt-2">{item.rentPrice} CZK / month</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}