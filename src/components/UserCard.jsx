import React from "react";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';

const UserCard = ({name,email,company,phone,id}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4" key={id}>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h4><WorkIcon fontSize="small" className="mr-2"/>{company}</h4>
        <p><EmailIcon fontSize="small" className="mr-2"/>{email}</p>
        <p><PhoneEnabledOutlinedIcon fontSize="small" className="mr-2"/>{phone}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Call Now</button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
