//app/ui/JobCard.tsx
import React from 'react'
import styles from './JobCard.module.css'
import JobCardButton from './JobCardButton'

interface JobType {
    icon?: string
    title: string,
    location: string,
    description: string,
    company: string
}

const JobCard = ({icon, title, location, description, company}:JobType) => {
  return (
    <div className="flex w-[60rem] bg-white border-2 border-[#7C8493] rounded-2xl p-4 gap-4 justify-self-center">
        <div className="w-[7rem]"><img className='w-[5rem] self-center' src={icon} alt="logo" /></div>
        <div className="w-[40rem] flex flex-col gap-2">
            <div className="h-24 flex flex-col justify-start gap-1 box-border">
                <h1 className="m-0 text-[#25324B] font-bold text-lg">{title}</h1>
                <div className="flex gap-4 text-[#7C8493] p-0 m-0">
                    <p>{company}</p>
                    <p>*</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="text-[#25324B] mt-2">
                <p>{description}</p>
            </div>
            <div className="flex gap-2 mt-4">
                <JobCardButton style='inPerson' content='In person'/>
                <JobCardButton style='education' content='Education'/>
                <JobCardButton style='it' content='IT'/>
            </div>
        </div>
    </div>
  )
}

export default JobCard