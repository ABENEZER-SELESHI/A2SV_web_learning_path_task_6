// app/jobs/[id]/page.tsx
import jobs from '../../../db/jobs.json';
import Style from './details.module.css';


interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const categoryStyles: Record<string, string> = {
  Marketing: "text-[#FFB836] bg-[#EB85331A]",
  Design: "text-[#56CDAD] bg-[#56CDAD1A]",
  IT: "bg-red-200 text-red-600",
  Development: "bg-green-200 text-green-600",
  Art: "bg-orange-200 text-orange-600",
  "Data Science": "bg-purple-200 text-purple-600",
  Analytics: "bg-pink-200 text-pink-600",
  "Customer Service": "bg-blue-200 text-blue-600",
  Support: "bg-amber-200 text-amber-600",
};

const Detailspage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const jobIndex = parseInt(id);

  if (isNaN(jobIndex)) {
    return <div>Invalid job ID</div>;
  }

  const job = jobs.job_postings[jobIndex];

  console.log(job);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="text-black flex gap-[5%] p-4">
      <div className="w-[1229px] p-4 flex flex-col gap-8 pt-8 pb-8">
        <div className={Style.description}>
          <h1 className='font-black text-xl pb-4'>Description</h1>
          <p>{job.description}</p>
        </div>
        <div className={Style.responsibilities}>
          <h1 className='font-black text-xl pb-4'>Responsibilities</h1>
          <ul className="flex flex-col gap-2">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <img
                  src="https://www.kindpng.com/picc/m/376-3766741_transparent-quality-icon-png-check-validation-png-download.png"
                  alt="check icon"
                  className="w-4 h-4 mt-1"
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={Style.candidate}>
          <h1 className='font-black text-xl pb-4'>Ideal Candidate We Want</h1>
          <ul className="list-disc pl-6">
            <li>
              <strong>
                young ({job.ideal_candidate.age} years old) {job.ideal_candidate.gender} {job.title}
              </strong>
            </li>
            {job.ideal_candidate.traits.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        <div className={Style.place}>
          <h1 className='font-black text-xl pb-4'>When & Where</h1>
            <p>
              <img src="/location.png" alt="location icon" className="inline border-2 rounded-full border-[#D6DDEB] p-[5px] mr-2" />
              {job.when_where}
            </p>
        </div>
      </div>

      <div className="w-[293.5px] p-4 flex flex-col gap-4">
        <div className='flex flex-col gap-[20px] border-b-2 border-b-[#D6DDEB] border-solid pb-[20px]'>
          <h1 className='font-black text-xl'>About</h1>
          <div className='flex'>
            <img src="/location.png" alt="location icon" className="inline border-2 rounded-full border-[#D6DDEB] p-[10px] mr-2" />
            <div className='flex flex-col'>
              <p className="font-normal text-base">
                Posted On:
              </p>
              <p className="font-semibold">{job.about.posted_on}</p>
            </div>
          </div>
          <div className='flex'>
            <img src="/location.png" alt="location icon" className="inline border-2 rounded-full border-[#D6DDEB] p-[10px] mr-2" />
            <div className='flex flex-col'>
              <p className="font-normal text-base">
                Deadline:
              </p>
              <p className="font-semibold">{job.about.deadline}</p>
            </div>
          </div>
          <div className='flex'>
            <img src="/location.png" alt="location icon" className="inline border-2 rounded-full border-[#D6DDEB] p-[10px] mr-2" />
            <div className='flex flex-col'>
              <p className="font-normal text-base">
                Location:
              </p>
              <p className="font-semibold">{job.about.location}</p>
            </div>
          </div>
          <div className='flex'>
            <img src="/location.png" alt="location icon" className="inline border-2 rounded-full border-[#D6DDEB] p-[10px] mr-2" />
            <div className='flex flex-col'>
              <p className="font-normal text-base">
                Start Date:
              </p>
              <p className="font-semibold">{job.about.start_date}</p>
            </div>
          </div>
          <div className='flex'>
            <img src="/location.png" alt="location icon" className="inline border-2 rounded-full border-[#D6DDEB] p-[10px] mr-2" />
            <div className='flex flex-col'>
              <p className="font-normal text-base">
                End Date:
              </p>
              <p className="font-semibold">{job.about.end_date}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 border-b-2 border-b-[#D6DDEB] border-solid pb-[20px]'>
          <h1 className='font-black text-xl'>Categories</h1>
          <ul className="flex flex-wrap gap-2">
            {job.about.categories.map((cat, i) => (
              <li
                key={i}
                className={`${
                  categoryStyles[cat] || "bg-gray-200 text-gray-600"
                } font-semibold text-[12px] py-1.5 px-2.5 rounded-full min-w-14 text-center`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-black text-xl'>Required Skills</h1>
          <ul className='flex flex-wrap gap-[0.5rem]'>
            {job.about.required_skills.map((skill, i) => (
              <li key={i} className="bg-[#F8F8FD] text-[#2D298E] font-normal text-[16px] px-3 py-1 w-fit">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
