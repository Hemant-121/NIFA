import React from 'react';
import './Courses.css';
const Courses = () => {
  // Sample data for cards (replace with your own data)
  const cardData = [
    {
      id: 1,
      title: '6 Months Diploma in Sketching & Oil Painting - Regular/Part time',
      imageUrl: 'https://www.nifafinearts.com/images/animation-sketching.jpg', // Replace with your image URL
    },
    {
      id: 2,
      title: '1 to 3  Months Certificate Hobby Course (Regular and Weekend)',
      imageUrl: 'https://www.nifafinearts.com/images/3mchc.jpg', // Replace with your image URL
    },
    {
      id: 3,
      title: 'One Year Diploma in Fine Arts-Regular/Part Time-Level-3',
      imageUrl: 'https://www.nifafinearts.com/images/1ydfa.jpg', // Replace with your image URL
    },
    {
      id: 4,
      title: 'Two years Advance Diploma in Fine Arts - Regular/Part time',
      imageUrl: 'https://www.nifafinearts.com/images/2ydfa.jpg', // Replace with your image URL
    },
    {
      id: 5,
      title: 'Entrance Preparation For N.I.D',
      imageUrl: 'https://www.nifafinearts.com/images/entrance-prepration.jpg', // Replace with your image URL
    },
    {
      id: 6,
      title: 'B.F.A from UGC Recognised University',
      imageUrl: 'https://www.nifafinearts.com/images/bfa.jpg', // Replace with your image URL
    },
    {
      id: 7,
      title: 'M.A in Painting from UGC Recognised University',
      imageUrl: 'https://www.nifafinearts.com/images/ma.jpg', // Replace with your image URL
    },
    {
      id: 8,
      title: 'Entrance preparation for B.F.A',
      imageUrl: 'https://www.nifafinearts.com/images/entrance-prepration3.jpg', // Replace with your image URL
    },
    {
      id: 9,
      title: 'Kids 1 year Diploma (Level-1)',
      imageUrl: 'https://www.nifafinearts.com/images/kidl1.jpg', // Replace with your image URL
    },
    {
      id: 10,
      title: 'Kids 1 year Diploma (Level-2)',
      imageUrl: 'https://www.nifafinearts.com/images/kidl2.jpg', // Replace with your image URL
    },
    {
      id: 11,
      title: 'Entrance Preparation for NIFT',
      imageUrl: 'https://www.nifafinearts.com/images/entrance-prepration2.jpg', // Replace with your image URL
    },
    {
      id: 12,
      title: '3 Months Hobby Certificate Course For Kids',
      imageUrl: 'https://www.nifafinearts.com/images/hccfk.jpg', // Replace with your image URL
    }
  ];

  return (
    <div>
    <h1>Our Courses</h1>
    <div className="card-grid-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.imageUrl} alt={`Card ${card.id}`} className="card-image" />
          <div className="card-body">
            <h3 className="card-title">{card.title}</h3>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Courses;
