import OneGame from '../ui/OneGame';
import { Supense } from 'react';

const fetchData = async () => {

  try {

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 250));

    const data = 'check this out'

    console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }

};
export default async function TestPage() {
  const data = await fetchData();

  return (
    <div>
      <p>{ data }</p>
      <h1>A Test Page</h1>
      <ul className="bg-slate-200 p-2 rounded border-2 border-slate-600">

        <OneGame amount={ 34 } />
        <OneGame amount={ 77 } />
        <OneGame amount={ 45 } />

      </ul>
    </div>
  );
};
//This should be the default boilerplate for a page in Next.js
