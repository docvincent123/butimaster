import React from 'react';

const options = {
  locations: ['Kyiv', 'Lviv', 'Odesa'],
  date: ['2025-07-25', '2025-07-26', '2025-07-27'],
  time: ['09:00', '12:00', '15:00'],
  type: ['Procedure A', 'Procedure B', 'Procedure C'],
  partOfBody: ['Hands', 'Feet', 'Face'],
  qualification: ['Junior', 'Senior', 'Expert'],
};

export default function FilterBar() {
  return (
    <div className="bg-white shadow-sm p-4 rounded-3 mb-5">
      <div className="row g-3">
        <div className="col-sm">
          <select className="form-select">
            <option selected>Locations</option>
            {options.locations.map((o,i) => <option key={i}>{o}</option>)}
          </select>
        </div>
        <div className="col-sm">
          <select className="form-select">
            <option selected>Date</option>
            {options.date.map((o,i) => <option key={i}>{o}</option>)}
          </select>
        </div>
        <div className="col-sm">
          <select className="form-select">
            <option selected>Time</option>
            {options.time.map((o,i) => <option key={i}>{o}</option>)}
          </select>
        </div>
        <div className="col-sm">
          <select className="form-select">
            <option selected>Type</option>
            {options.type.map((o,i) => <option key={i}>{o}</option>)}
          </select>
        </div>
        <div className="col-sm">
          <select className="form-select">
            <option selected>Part of body</option>
            {options.partOfBody.map((o,i) => <option key={i}>{o}</option>)}
          </select>
        </div>
        <div className="col-sm">
          <select className="form-select">
            <option selected>Qualification</option>
            {options.qualification.map((o,i) => <option key={i}>{o}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
