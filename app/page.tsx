'use client'

import Nav from '../components/Nav';
import About from '../components/About';
import Work from '../components/Work';
import More from '../components/More';
import Quotes from '../components/Quotes';
import PreLoader from '../components/PreLoader';
import {useState} from 'react';
import dynamic from 'next/dynamic'
import { Result } from 'postcss';


export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const PageContent = dynamic(() => import('../components/Portfolio'),  {
    ssr: false,
    loading: () => <PreLoader/>,
  });
  

  return (
    <main>
      <PageContent/>
    </main>
  )
}
