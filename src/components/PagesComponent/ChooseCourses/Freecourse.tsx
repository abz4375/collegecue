import React from 'react';
import Heading from '../../Heading/Heading'
import { ExploreCourseCard } from '../../Reusable_cards/ExploreCourseCard';

const courses = [
    {
      category: 'Web Development',
      title: 'The Complete Web Developer in 2023: Zero to Mastery',
      lessons: 25,
      students: 54,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/01.jpg',
      instructor: 'Angela Yu',
      rating: 4.5,
      originalPrice: '79.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Marketing, Finance',
      title: 'How to Write the Ultimate 1 Page Strategic Business Plan',
      lessons: 22,
      students: 60,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/02.jpg',
      instructor: 'John Doe',
      rating: 4.0,
      originalPrice: '89.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Web Development',
      title: '100 Days Of Code - 2023 Web Development Bootcamp',
      lessons: 23,
      students: 40,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/03.jpg',
      instructor: 'Jane Smith',
      rating: 4.8,
      originalPrice: '99.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Design, UI/UX',
      title: 'User Experience The Ultimate Guide to Usability and UX',
      lessons: 19,
      students: 14,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/04.jpg',
      instructor: 'Alex Johnson',
      rating: 4.2,
      originalPrice: '79.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Design, UI/UX',
      title: 'User Experience The Ultimate Guide to Usability and UX',
      lessons: 19,
      students: 14,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/05.jpg',
      instructor: 'Alex Johnson',
      rating: 4.2,
      originalPrice: '79.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Design, UI/UX',
      title: 'User Experience The Ultimate Guide to Usability and UX',
      lessons: 19,
      students: 14,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/06.jpg',
      instructor: 'Alex Johnson',
      rating: 4.2,
      originalPrice: '79.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Design, UI/UX',
      title: 'User Experience The Ultimate Guide to Usability and UX',
      lessons: 19,
      students: 14,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/07.jpg',
      instructor: 'Alex Johnson',
      rating: 4.2,
      originalPrice: '79.99',
      discountedPrice: 'FREE',
    },
    {
      category: 'Design, UI/UX',
      title: 'User Experience The Ultimate Guide to Usability and UX',
      lessons: 19,
      students: 14,
      imageUrl: 'https://html.themewant.com/studyhub/assets/images/course/08.jpg',
      instructor: 'Alex Johnson',
      rating: 4.2,
      originalPrice: '79.99',
      discountedPrice: 'FREE',
    },
  ];

const Freecourse = () => {
  return (
    <div className='w-full bg-[#F5F5F5] my-20'>
    <div className='max-w-[1340px] px-4 mx-auto py-8'>
        <div className='mb-4'>
        <Heading heading_name={"Free Course"} />
        <p>Courses are available at an affordable price & valuable certifications are included.</p>
        </div>
        <div className="flex flex-wrap gap-6 md:w-full justify-center">
        {courses.map((course, index) => (
          <div key={index} className="w-[300px] h-[490px] md:w-full sm:w-full flex md:flex-col sm:flex-col">
            <ExploreCourseCard 
              category={course.category}
              title={course.title}
              lessons={course.lessons}
              students={course.students}
              imageUrl={course.imageUrl}
              instructor={course.instructor}
              rating={course.rating}
              originalPrice={course.originalPrice}
              discountedPrice={course.discountedPrice}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Freecourse