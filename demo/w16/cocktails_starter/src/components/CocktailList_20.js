import React from 'react';
import Cocktail_20 from './Cocktail_20';
import Loading from './Loading_20';
import { useGlobalContext } from '../context_20';

const CocktailList_20 = () => {
  const {loading, cocktails} = useGlobalContext();
  if(loading){
    return <Loading />
  }
  if(cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
    <h2 className="section-title">cocktails</h2>
    <div className="cocktails-center">
      {cocktails.map((item)=>{
        return <Cocktail_20 key={item.id} {...item} />
      })}
    </div>
  </section>
  );
};

export default CocktailList_20;
