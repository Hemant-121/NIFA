import React from 'react';

const Welcome = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <h1>Welcome To National Institute of Fine Arts</h1>
      <p className="lead">Welcome To National Institute of Fine Arts
National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>
      <p className='lead'>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.</p>
      <h5 className="mt-4"><strong>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</strong></h5>
      {/* <button type="button" class="btn btn-primary btn-lg br-30px" >Read More</button> */}
      <button className="btn btn-primary" style={{ borderRadius: '20px' }}>Read More</button>

    </div>
  );
};

export default Welcome;
