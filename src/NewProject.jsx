import { useState } from 'react';
import ReusableInput from './ReusableInput';

export default function NewProject({ onButtonClick }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted Data: ', formData);
  };

  return (
    <div className="w-[35rem] mt-16">
      <form onSubmit={handleSubmit}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li className="flex justify-between my-4">
            <button
              onClick={onButtonClick}
              className="text-stone-700 hover:text-red-500">
              Cancel
            </button>
          </li>
          <li className="flex justify-between my-4">
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
              Save
            </button>
          </li>
        </menu>
        <div>
          <ReusableInput
            onChange={handleChange}
            text="Title"
            type="text"
            name="title"
            value={formData.title}
          />
          <ReusableInput
            onChange={handleChange}
            textarea
            text="Description"
            type="text"
            name="description"
            value={formData.description}
          />
          <ReusableInput
            onChange={handleChange}
            text="Due date"
            type="date"
            name="date"
            value={formData.date}
          />
        </div>
      </form>
    </div>
  );
}
