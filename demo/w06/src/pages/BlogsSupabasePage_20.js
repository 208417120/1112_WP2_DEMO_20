import { useState, useEffect } from 'react';

// import axios from 'axios';
// import blogsData from '../data/blogData2_20';
// let api_url = `http://localhost:5000/api/card2_20`;
// let api_url = `https://one112-server-card-demo-20.onrender.com/api/card2_20`;

import { supabase } from '../db/clientSupabase';

const BlogsSupabasePage_20 = () => {
  const [name, setName] = useState('吳昱霆');
  const [id, setId] = useState('208417120');
  const [data, setData] = useState([]);
  // console.log('blog data', data);

  const fetchBlogDataFromSupabase = async () => {
    try {

      let { data, error } = await supabase.from('card_20').select('*')

      console.log('data', data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, {});

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Fetch Blogs From Supabase --{name} {id}
          </h2>
        </div>
        <div className='blogs-center2'>
          {data.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className='blog'>
                <img src={img} alt={title} className='img blog-img' />
                <div className='blog-content'>
                  <span>
                    {category} <i className='fa-solid fa-globe'></i>
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href='#'>read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogsSupabasePage_20;
