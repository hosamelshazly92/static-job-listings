import {
  container,
  avatar,
  section,
  info,
  companyText,
  newLabel,
  featuredLabel,
  positionText,
  text,
  labels,
  labelText,
  seperator,
} from "./Job.module.css";
import { v4 as uuid } from "uuid";

const Job = ({ job }) => {
  return (
    <div className={container}>
      <img className={avatar} src={job.logo} alt="avatar" />

      <div className={section}>
        <div className={info}>
          <p className={companyText}>{job.company}</p>
          {job.new && <p className={newLabel}>new</p>}
          {job.featured && <p className={featuredLabel}>featured</p>}
        </div>

        <p className={positionText}>{job.position}</p>

        <div className={info}>
          <p className={text}>{job.postedAt}</p>
          <p className={text}>{job.contract}</p>
          <p className={text}>{job.location}</p>
        </div>
      </div>

      <hr className={seperator} />

      <div className={labels}>
        <p className={labelText}>{job.role}</p>
        <p className={labelText}>{job.level}</p>
        {job.languages.map((itm) => (
          <p key={uuid()} className={labelText}>
            {itm}
          </p>
        ))}
        {job.tools.map((itm) => (
          <p key={uuid()} className={labelText}>
            {itm}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Job;
