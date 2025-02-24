import React from 'react';
import CardSection from '../../../../Reusable_cards/CardSection';
import logo1 from '../../../../../assets/Homepage/LatestNotification/LucknowUniversity.svg';
import logo2 from '../../../../../assets/Homepage/LatestNotification/vitlogo.svg';
import logo3 from '../../../../../assets/Homepage/LatestNotification/iitroper.svg';

const ParentCardSection = () => {
    const data = [
        {
            logo: logo1,
            heading: 'Lucknow University Registration Window Closing in Mar',
            description: 'Lucknow University is inviting applications for admission to its UG Programs for the academic session 2023-24. Interested candidates can apply through the official website till May 31, 2023.',
        },
        {
            logo: logo2,
            heading: 'VITEEE 2023 Registration Window Closing in Mar',
            description: 'The last date to apply for VITEEE 2023 is March 31, 2023. Candidates can apply for the exam at viteee.vit.ac.in Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit placeat sed assumenda iure? Voluptatum sunt aspernatur esse vitae inventore, minus est accusamus odit, perferendis vel quas, perspiciatis totam laborum alias!.',
        },
        {
            logo: logo3,
            heading: 'IIT Ropar MTech Admission 2023 Open Apply till April 23',
            description: 'IIT Ropar is inviting application for admission in MTech program for the academic year 2023-24; Apply till April 23Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit placeat sed assumenda iure? Voluptatum sunt aspernatur esse vitae inventore, minus est accusamus odit, perferendis vel quas, perspiciatis totam laborum alias!.. ',
        },
    ];

    return (
        <div className="flex justify-evenly  md:flex-col sm:mx-auto gap-2 md:mx-auto hover:cursor-pointer">
            {data.map((item, index) => (
                <CardSection key={index} {...item} />
            ))}
        </div>
    );
};

export default ParentCardSection;
