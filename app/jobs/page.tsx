//app/jobs/page.tsx
import React from 'react';
import jobs from '../../db/jobs.json';
import JobCard from '../components/JobCard';
import Link from 'next/link';

const JobsPage = () => {
  const jobCount = jobs.job_postings.length;
  return (
    <div className='flex flex-col gap-16 mt-16 mb-16'>
      <div className='flex justify-around mt-2'>
        <div className='flex flex-col'>
          <h1 className='text-black font-black text-4xl'>Opportunities</h1>
          <h3 className='text-[#7C8493]'>Showing {jobCount} results</h3>
        </div>
        <div className='flex gap-1'>
          <h2 className='text-black'>Sorted by: </h2>
          <p className="text-black text-[16px] font-medium">Most Relevant</p>
        </div>
      </div>
      <div className='flex flex-col gap-[1rem]'>
        {jobs.job_postings.map((job, index) => (
            <Link href={`/jobs/${index}`} key={index}>
              <JobCard 
                key={index}
                title={job.title}
                location={job.about.location}
                description={job.description}
                icon={job.image}
                company={job.company}
              />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default JobsPage